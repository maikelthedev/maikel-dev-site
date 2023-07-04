# The Survation Panel Back-End

## The goal

Survation wanted to design their own panel, that's a tool to have their own panelist completing surveys instead of having to pay third-party suppliers of panelists, to save costs. The set of people completing surveys is what's called a "panel" in this context. 

## What I did

The back end of the project was made using NodeJs, ExpressJS, JsonWebTokens for authentication, Mongo for database, Redis for stuff that needed to go much faster than Mongo could. 

For every tool I used the latest version at all times and updated as soon as they were released. I used Bitbucket to preserve **their** code. There are some related utilities in Python that I'm going to mention in a different project as I treated it as such (the sampler, the mailer). 

The same interface was used for both users and panelists. 

## Features

1. Rest API sign up/log in/log out/change details/complete surveys/cash out/check points/list surveys. 
1. Additional API connection to their Wordpress site to fetch posts listed on their homepage and bottom section. 
1. Creat


