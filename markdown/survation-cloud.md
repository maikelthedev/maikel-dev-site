# The Survation Cloud

## Where this all started

Survation required the panel software I was designing to read posts from their pre-existing, very broken and very outdated Wordpress setup. 

To load the site could take as long as more than 1 full minute. I didn't want the panel I designed to be that slow, nor did I want it to cache the posts, I wanted it to always have up-to-date posts. So I decided to speed up their [Wordpress](https://www.survation.com) site. 

At the very beginning the Survation cloud was just their [Wordpress](https://www.survation.com) site. 

### First step, moving the cloud

The site was hosted in a self-managed hosting solution that didn't allow me to tweak with anything on the database or the web servers. That solution was 40 GBP per month. I copied all the Wordpress folder content, enumerated the versions of each one of the systems (nginx, php, mysql) and replicated the whole setup at first in a Digital Ocean server that costs them only 5 USD/month. SSL handling for the httpS was performed automatically using Let's Encrypt. 

### Second step, the tweaks

Now that I could do whatever I wanted to speed up the site, I used [Locust](https://locust.io/) to measure the start average load time. I was using at first [Apache JMeter](https://jmeter.apache.org/) but I found it cumbersome in comparison so I found that other tool. 

So once it was all up and running I started from finding possible tweaks to the DB to make it faster, the first thing was to try to move into an up-to-date version. It didn't take much work. Also I migrated from MySQL into MariaDB. 

Next I downloaded a couple of plugins:
* One that would take every image or file anyone at Survation uploaded it and copy it in a Digital Ocean bucket with CDN enabled as cdn.survation.com 
* One that would serve every file from that CDN instead of the local version. 
* One that would cache every page, unless a project manager was editing it. 

Then I copied and created another version of their template files that would take all images from the CDN too. 

The result was [Survation.com](https://www.survation.com) now fully loads in under 3 seconds. Its rest API is also near instant. 

## Requirements changed

### Fat machines for data science

From time to time Survation runs what is called an [MRP](https://en.wikipedia.org/wiki/Multilevel_regression_with_poststratification) survey. I'm not going to try to explain it because I'm not a statistician. The thing is to run it they need a big fat machine with large memory and multiple processors. 

At first we were using Digital Ocean but in my never-ending compare-the-market mood I discovered [Hetzner](https://www.hetzner.com/). Each machine was costing 480 USD per month and were not that powerful. With Hetzner they were costing never more than 40 euros and were much faster. Also, the joy of using European providers. 

Once deployed the machine all I need to do was to configure network, SSH access, run R-studio with some very specific and obscure packages for it, then secure it and help the expert statistician that was going to use it shall they have any technical query. In a nutshell I ended up creating a Terraform template since this was happening once every 3 to 6 months. 

But this was the beginning with Hetzner. 

### More services

Since they had me they could provide added-value to clients with dashboards in R-studio with the results of the research projects they run so I started dockerising everything, at first this meant just:
- [Wordpress](https://www.survation.com)
- Panel backend
- [Panel frontend](https://panel.survation.com)
- MySQL
- Mongo
- Redis

But then it became:
- [Survation Wiki](https://tech.survation.com/) a technical wiki were everything technical was explained to them. 
- [Survation secrets](https://secrets.survation.com) a Bitwarden instance. Saving Survation hundreds of pounds in LastPass users. Documented too in the Wiki. 
- [Jenkins](https://jenkins.survation.com) my CI/CD tool of choice, not because of lack of trying finding a better one. 
- [Phabricator](https://phabricator.survation.com/) where every bit of my code, and some needed for the Data Scientist was shared. Let alone to get through me everbody had to first log their query there, stopping unnecesary questions that would be replied with a link to [lmgtfy.com](https://www.lmgtfy.app/)
- Survation Utils: a set of Python utilities that worked alongisde the panel continously to create samples, email users and scrape the answers of the users to the surveys to be used to sample them. 
- Survation Data: Jupyter Notebooks with several utilities to perform some data science with the data from Mongo or clean up respondent data from dirty datasets. 
- [Survation File](https://files.survation.com/login) a OwnCloud instance used as a file drop so clients could sent data safely or viceversa. 
- [Sensu](https://sensu.survation.com) to monitor their cloud. Sending to my smartwatch alarms if anything failed through Pushover. Before I was using good-old Nagios, later Icynga. I changed to Sensu because I wanted a simple distributed test system that could be in different places. 
- Grafana to monitor the panelist users, the sign-ups, the rate of growth, the completion of surveys and their cost. 
- [Survation Dashboards](https://visual.survation.com/) Shiny dashboards hidden per client, behind a user-protected page. Their data scientist provided the visualisations, I provided the platform and configured it for each client. 

## Enter Kubernetes

As it was becoming unmanageable I decided to use Kubernetes to orchestrate them all, self-heal and not have a hundred different copies of MariaDB doing the same thing. Let alone assigning whatever.survation.com domain names was much easier using Traefik inside Kubernetes. 

I configured the whole thing in Terraform to create the cloud while Ansible to configure the machines, including pulling from Velero the back-ups of every service. I tested the setup with production-mirrored data, destroying and rebuilding it once and again until the whole thing could be destroyed with a "terraform destroy --auto-approve" command and rebuilt losing absolutely nothing with "terraform apply" including domain names assignment using Digital Ocean via Terraform code. 

The final setup was:
- AWS SES to send emails. 
- Digital Ocean as CDN, bucket for back ups and DNS nameservers for all of Survation domains and subdomains. 
- Hetzner as the actual machines running it all, somewhere in Finland.

As per today the Survation cloud still runs under this setup and I learnt a good lesson that I tattooed in my right arm. 


![The Survation Panel](/posts/lessismore.webp)







