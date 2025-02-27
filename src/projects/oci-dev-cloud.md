---
title: OCI Development Cloud
layout: post
author: Maikel
posts: projects
description: Oracle Cloud Infrastructure FreeBSD Development Environment
image: hexagons.jpg
---
# Oracle Cloud Infrastructure FreeBSD Development Environment

SkunkWerks works with FreeBSD in most of their projects and they use OCI as their multi-country development environment of developers all over the globe. 

What they needed was a cloud environment made of:
* 2 AMD servers. 
* 1 ARM server
* A network load balancer
* A VCN configuration
* A public subnet
* Some specific ports open on every machine via firewall rules, all others closed
* SSH keys pre-configured
* OCI DNS in place to assign names to each machine and be accessible through a specific domain. 
* Platform should use as OS their tailor made FreeBSD build (the other project I did for them)

## What I did

Using Terraform and the excellent Oracle Cloud Documentation about [it](https://docs.oracle.com/en-us/iaas/developer-tutorials/tutorials/tf-simple-infrastructure/01-summary.htm), I created their entire dev infrastructure as code tha they could run with a simple "terraform apply" and modifiable variables with their descriptions in .tfvars with some initial configuration. 

Prior to this, I had never before used OCI. 
