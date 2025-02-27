---
title: Panel Backend
layout: post
author: Maikel
posts: projects
description:  The Survation Panel Back-End 
image: hexagons.jpg
---
# The Survation Panel Back-End

## The goal

Survation wanted to design their own panel, that's a tool to have their own panelist completing surveys instead of having to pay third-party suppliers of panelists, to save costs. The set of people completing surveys is what's called a "panel" in this context. 

## What I did

The back end of the project was made using NodeJs, ExpressJS, JsonWebTokens for authentication, Mongo for database, Redis for stuff that needed to go much faster than Mongo could. 

For every tool I used the latest version at all times and updated as soon as they were released. I used Bitbucket to preserve **their** code. There are some related utilities in Python that I'm going to mention in a different project as I treated it as such (the sampler, the mailer). 

The same API was used for both panelist, managers and admins. Endpoints were user-token based, so a panelist could not trigger an endpoint that required an admin. Some changes performed by admins or managers sent me an email (cash out) for motorization. 

Some features were experimentally made in Rust because I wanted to give it a try, using [Neon Bindings](https://neon-bindings.com/)

Both front end and back end were part of a Kubernetes cloud so each one of the projects had their own deployment YAML and were tested in a stage environment using Docker in Jenkins, then automatically deployed in production if everything was fine. 

## Features

1. Rest API as a user to sign up/log in/log out/change details/complete surveys/cash out/check points/list surveys. 
1. Additional API connection to their [Wordpress](https://www.survation.com) site to fetch posts listed on their homepage and bottom section, also for the text and images shown in the homepage. So they could, without needing to code, change it from [Wordpress](https://www.survation.com), which they were familiar with. In WP they had CustomFields plugin for that. So I just had to point them to the right page to made the modifications and add a tutorial in the wiki I created for them. 
1. Rest API as an admin and manager to create projects, close projects, modify projects, enqueue emails, send password recovery emails, delete users, modify users, add user points, create samples, modify samples, create lists, modify lists, delete samples or lists, pay users. 



