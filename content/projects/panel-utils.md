# Survation Panel Utils

## Introduction

There are processes that run the Panel that do not require a ExpressJS server, nor a front end in Angular. These are processes that runs regularly in the background independently. 

## First stage the mailer

This project started as a mailer. That is a Python project that took a list of emails, a template from AWS, data associated with each email and using Amazon Web Services SES it sends all those mass emails. Typical emails where:
* New survey (duration, points per survey)
* Password Recovery (with a token)
* New User
* Points registered
* You've been paid (when the user asked to cash out) their points). 

I created beautifully-formatted templated emails manually using  [Foundation](https://get.foundation/emails.html) and uploaded them to AWS using AWS-cli. Then I could just choose the template from the mailer and send over the data that needed to add to it. 

## The Sampler

At the beginning we were targeting all panelists, we needed them all to complete the initial surveys upon launch to have enough data to later better sample by those details. But then once we have the data we needed:

1. The Extractor: To pull all their responses from SurveyGizmo and format them in the user collection of Mongo as our unique souce of truth and data lake. 
2. The Sampler: to based, on those answers, be able to create UK National Representative samples. But also to create tailor-made samples as required by the project manager. 
3. The Updater: To update dynamic (updatable) samples. Samples that update depending on users responses to other surveys or new users added to the panel. e.g.: If you needed a survey to get immediate responses from any new user from Scotland, you'll made this survey use a dynamic sample with "region = scotland"

All of these were merged with the mailer and run in the same project. A Python utility with 4 modules that would run each in consecutive order every minute, independent from the panel backend. 

## The Queue

Both sample and mailer were using a very simple queue using Mongo as the unique source of truth connecting both backend and utils. 

Utils could create a mailing list or sample with "processed: false" and the utils would pick it up and process it, then retrieve the formed, processed document back to Mongo with "processed: true" and wait until there's another one that needs processing. 

In the case of user responses, it'll just wait for new transactions, as completing a survey is a new transaction, with "processed: false".

