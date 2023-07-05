# Automated FreeBSD image build tailored for Oracle Cloud Infrastructure

SkunkWerks specializes in FreeBSD as Operating System. They maintain their own versions for use with the Oracle Cloud Infrastructure. Each week they build a new version with the latest bugfixes and updates. 

This task was done manually using some flakey scripts for the Fish shell. SkunkWerks wanted to automate this so nobody anymore had to waste time every week doing it. My task was to automate it using Ansible that they will integrate with their Github hooks workflow. The system needed to be configurable so that you could specify which processor you were building for (AMD or ARM). 

## What I did. 

I decompose their Fish script. Most of it was using OCI cli, other parts QEMU, most of it shell scripts. 

I converted all the OCI bits into OCI Ansible collection so that error control could be built in in the YAML code. 

The code would then:
1. Run a machine on OCI as builder environment with FreeBSD (ARM for ARM / AMD for AMD) with configurable power (number of processors, size of RAM). 
1. Pull the latest stable version of FreeBSD with all its bugfixes and updates. Using now the git module of Ansible. 
1. Create a build for the chosen processor. 
1. Apply the patches to make the build compatible with OCI. 
1. Upload the file to an OCI bucket. 
1. Destroy the builder server. 
1. Create an image from the file in the OCI bucket. 
1. Apply some needed settings change in the configuration of that image so that it could run. 
1. Run a server with the image and some given cloud-init configuration. 
1. Connect to that image and run some test code to prove it works. 
1. Destroy the testing server. 

## What I learnt from this

I enjoyed this project a lot since I learnt plenty new skills with it. 

* To run stuff using QEMU. Specially to run ARM from QEMU on an x86 machine. 
* Image creation on Oracle Cloud which might come handy whenever a client needs a cloud that accepts tailor-made images (there aren't many). 
* The use of Cloud-Init scripts. 
* Everything about OCI Ansible Collection, its limitations and its features. 
* The build process of a FreeBSD system. 
* How "make" works, since I don't code in C, so never used it before. 
* The differences between FreeBSD and Linux (specially Ubuntu). Now I run FreeBSD in an old laptop as part of my home lab. 