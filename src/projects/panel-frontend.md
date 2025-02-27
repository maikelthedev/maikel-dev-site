---
title: Panel Frontend
layout: post
author: Maikel
posts: projects
description: The Survation Panel Front-End 
image: hexagons.jpg
---
# The Survation Panel Front-End

## The goal

Survation wanted to design their own panel, that's a tool to have their own panelist completing surveys instead of having to pay third-party suppliers of panelists, to save costs. The set of people completing surveys is what's called a "panel" in this context. 

## What I did

I created the [Survation Panel](https://panel.survation.com) from scratch using the latest version of Angular, reaching all the way from v.4 up to v.13 and maintaining it. I used Bitbucket to preserve **their** code and applied using Bootstrap a ready-made theme template of which they had a static design (just the homepage) by [Spinach](https://spinachbranding.com/), I used Boostrap to speed up design and the page allowed users to find the surveys. 

The same interface was used for both panelists and project managers. So they had a different, privileged dashboard that allowed them to create projects. 

The result is in this image

![The Survation Panel](/posts/panel-frontend.webp)

## Features

### As a panelist/user
1. Sign Up / Log in / Delete your own account. 
1. See a list all the surveys available to you. 
1. Complete those surveys
1. Check your points (1 point = 1 pence)
1. Cash out your points into money. 
1. View Results
1. Allow you to complete your profile
1. Ask for a password reminder. 
1. Change notifications, emails, address, postcode. 
1. Read the latest blog posts they published. 
### As a manager or administrator
1. Create project definition (survey link, points, duration, sample to apply it to, mail delivery, shown until date).
1. Send (or resend) alerts of new surveys to those users who enabled notifications. 
1. Change survey status (visible, not visible)
1. Create samples based on age recent activity (always prioritse users who reply faster), brackets, region, sex, gender, income, or **very literally** every answer any respondent has answered to any survey before. <-- *This was one of my proudest accomplishments*
1. Create lists of panelist based on their emails. 
1. Crate other managers or admins (only admins)
1. Assign points (only admins)
1. Delete, modify data or ban users. 
