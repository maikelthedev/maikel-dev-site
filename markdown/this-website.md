# This website

I postponed the creation of this website until I had the time to really do it the way I desired to get it done. 
I wanted something that matched these requirements:

* Free to serve
* Easy to maintain whenever there are new projects. 
* Showcases what I can do with JavaScript
* Is fast

## My choices

I'm an Angular guy but I've experienced first hand from my work at Survation how slow SPAs can be and the nightmare for SEO they can become. In fact for Survation the webpage is server by the backend and to ensure they can be scanned by crawlers I modified the backend so that it detects crawlers it servers a static page generated with handlebars with just the needed information (basic html with meta tags) to show an image for Facebook or Twitter links, description, title, etc. 

But I also knew React, despite only using it with Survation for a very small project to get new users into the Panel. So I wanted to use React here but I wanted it to be server-based so I chose NextJS. 

And since Vercel not only supplies 1 free project with their free "hobby" offering but also allows custom domains I chose to use them. 

I used TailWinds CSS to style it because I wanted to try something different than Elon Musk's owned Bootstrap. 

NextJS is fast, but I might revisit my choice using Astro. 

The projects (like this page) are described using markdown, which is built statically on deployment. 
