# Min.io cluster deployment scripts

Headbright needed to automate the deployment of a 3-machines cluster for Min.io servers as object storage. They have a pre-made script for a single-node deployment and some cloud-init initial configuration they wanted me to reuse. 

## What I did

I rewrote the bash script, dividing each section into different functions for easy debugging, including an option to be able to call the script with 

```bash
source thescript.sh
```

to be able to run each function independently. They didn't want me to use Terraform so I also wrote an additiona script that wasn't part of the job to emulate the use of Terraform under the same exact conditions they wanted to develop the cloud (use Hetzner CLI, the number of PCs, their names, their folders). I conveniently named the script to develop my copycat dev environment "thescript.sh apply" and "thescript.sh destroy"

Because of inter-communication  between servers I had to open some additional ports, which I did by amending their cloud-init file. Once the entire system was up and running, I tested it repeatedly and once it was robust enough I sent them all the files includinig the one of my dev enviornment that they could use as a guide to avoid repeating themselves in the command line.

My own script (not part of the contract and therefore not subject to NDAs or copyright) to launch my dev environment was this:

```bash
#!/bin/bash

set -e

PATH_TO_KNOWN_HOSTS=/home/maikel/.ssh/known_hosts

apply_function() {
    echo "Applying..."
    hcloud server create --name=minio1 --type=cx11 --image=ubuntu-20.04 --user-data-from-file=cloud-config.yaml && \
    hcloud server create --name=minio2 --type=cx11 --image=ubuntu-20.04 --user-data-from-file=cloud-config.yaml && \
    echo "All servers up"
    
    # Call the function to add volumes
    add_volumes_function
}

destroy_function() {
    echo "Destroying..."
    hcloud server delete minio1 && \
    hcloud server delete minio2 && \
    echo "All servers destroyed" && \
    # We need the IPs to get rid of the known_hosts line. 
    get_all_ips_function && \
    ssh-keygen -f "${PATH_TO_KNOWN_HOSTS}" -R "${minio1_ip}" && \
    ssh-keygen -f "${PATH_TO_KNOWN_HOSTS}" -R "${minio2_ip}" install
    
    # Call the function to destroy volumes
    destroy_volumes_function
}

add_volumes_function() {
    echo "Creating & attaching volumes..."
    hcloud volume create --size 10 --name volume-minio1 --server minio1 && \
    hcloud volume create --size 10 --name volume-minio2 --server minio2 && \
    echo "All volumes created"
}

dettach_volumes_function() {
    echo "Dettaching volumes..." && \
    hcloud volume detach volume-minio1  && \
    hcloud volume detach volume-minio2  && \
    echo "All volumes dettached"
}

destroy_volumes_function() {
    echo "Destroying volumes..." && \
    hcloud volume delete volume-minio1  && \
    hcloud volume delete volume-minio2  && \
    echo "All volumes destroyed"
}

get_server_ip() {
    local server_name="$1"
    hcloud server describe "$server_name" -o json | jq -r '.public_net.ipv4.ip'
}

get_all_ips_function() {
    minio1_ip=$(get_server_ip minio1)
    minio2_ip=$(get_server_ip minio2)
    
    echo "IP address of minio1: $minio1_ip"
    echo "IP address of minio2: $minio2_ip"
}

send_file_to_server() {
    local file_path="$1"
    local target_ip="$2"
    echo "$file_path"
    echo "$target_ip"
    scp -i ~/.ssh/.somekey "$file_path" zofx@"$target_ip":/tmp/
}

send_install_script_function() {
    # Send the install script to each server
    send_file_to_server install-multi-minio.sh "$minio1_ip"
    send_file_to_server install-multi-minio.sh "$minio2_ip"
}

mount_volumes_function() {
    # Mounts the volumes in each server, must run after cloud-config has finished
    ssh ubuntu@"$minio1_ip" -i ~/.ssh/.somekey "sudo mkdir /mnt/ubuntu-minio0 && sudo mkfs.xfs /dev/sdb && sudo mount /dev/sdb /mnt/ubuntu-minio0"
    ssh ubuntu@"$minio2_ip" -i ~/.ssh/.somekey "sudo mkdir /mnt/ubuntu-minio0 && sudo mkfs.xfs /dev/sdb && sudo mount /dev/sdb /mnt/ubuntu-minio0"
    
}

# Check if a parameter is provided
if [ $# -lt 1 ]; then
    echo "Usage: $0 [apply|destroy|add_volumes|destroy_volumes|mount_volumes]"
    exit 1
fi

# Determine the action based on the first parameter
case "$1" in
    "apply")
        apply_function
    ;;
    "add_volumes")
        add_volumes_function
    ;;
    "destroy_volumes")
        dettach_volumes_function
        destroy_volumes_function
    ;;
    "mount_volumes")
        get_all_ips_function
        mount_volumes_function
    ;;
    "get_all_ips")
        get_all_ips_function
    ;;
    "send_install_script")
        get_all_ips_function
        send_install_script_function
    ;;
    "destroy")
        destroy_function
    ;;
    *)
        echo "Unknown action: $1"
        exit 1
    ;;
esac

```