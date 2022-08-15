# Top Coin

## [API](https://top-coin.herokuapp.com/api/coindata) | [Website](https://top-coin.herokuapp.com/) 

&nbsp;

![](/readmeImg/topCoinDemo.gif)

&nbsp;

This project was meant to allow me to deep-dive into the MERN stack. I focused on adhering to best practices, and trying to achieve the best performance possible, especially as this database could grow to a very large size. I initially intended this project to take around 100 hours to build, but as I progressed further in my learning, I found more and more features I wanted to add, like the ability to sort coins by different categories, and add a dark mode that saves your preference to local storage. 

In the end, this project took well over 200 hours from start to finish, and allowed me to have a great understanding and improve my skills in MongoDB, Express, React, and Node. 

## Table of contents

- [Overview](#overview)
- [My process](#my-process)
  - [Built with](#built-with)\
  - [Performance](#performance)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Features](#features)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

&nbsp;

## Overview
Top Coin is a cryptocurrency tracker. At the end of every day (12am MST), the top 10 performing coins, based on their percent growth in the last 24 hours, are added to the database. If the coin hasn't been in the top 10 before, a new document is created for that coin. If the coin has been in the top 10 coins previously, the coins relevant data is updated. 

&nbsp;

## Features
- Sort current coins in ascending or descending order based on 24h change, 7d change, or by price. 
- Site-wide dark and light mode.
- Site path /api/coindata route will show all historical collected data in the database.
- Each current top 10 coin displays a chart with data points of each time they were in the top 10 coins of the day.
- Chart that populates dynamic data.
- Dynamic routing, each coin has its own unique route.

&nbsp;

## My process

Step 1: Planning
  - The first step of this project was deciding what would work with my goals I wanted to achieve - to build a website with a lot of dynamic data, and get some repetition for my React skills.
  - Cryptocurrency sites, like [CoinMarketCap](https://coinmarketcap.com/) and [CoinGecko](https://www.coingecko.com/) are great examples of websites that display a lot of dynamic data, so I modelled my idea after their sites. I did not want to make a copy that just displays data, I wanted there to be a separate purpose, which is why I came up with the idea to only log the top 10 performing coins of the day. 

Step 2: Server setup: 
- This stage was rather easy. After creating the React app structure, I started with making the backend API. This way, I would have all the data I needed to be displayed solidified and ready to be used. 
- I set up a simple backend server, and connected to my MongoDB cluster. From there, I set up my site routes. I knew I would only need get all data, post, and patch requests, so I did not make a delete route or a get specific id route. Next, I setup a function that would fetch data at whatever interval I specified. For testing, this was set at every 1 - 10 minutes to find bugs, but at the production stage, the database was completely deleted, and the interval was set to once per day. 
- Note, for the first day in production, I set the server to fetch every 30 minutes just to start with a decent amount of starting data. 

Step 3: React:
- After I had the backend working as I wanted, I started laying out how I wanted my site to look in Figma. I only layed out a rough idea, as I intended to change the site as I went, I knew I would have problems/features come up during development that I would want to address.
- As this was my biggest project to date, how my files were set up was not ideal for a project this size. I had to change my entire file structure from how I initially had it layed out, both for future scaling and best practices. 

Step 4: Deployment:
- I chose to deploy my app on Heroku. The main two reasons for this choice were that I had already used Heroku and was familiar with it, and because it was free and performs very well. 


&nbsp;

### Built with:

&nbsp;

- ![](https://img.shields.io/badge/MongoDB-informational?style=flat&logo=mongodb&logoColor=white&color=green)

- ![](https://img.shields.io/badge/Express-informational?style=flat&logo=express&logoColor=white&color=lightgray)

- ![](https://img.shields.io/badge/React-informational?style=flat&logo=react&logoColor=white&color=informational)

- ![](https://img.shields.io/badge/Node.js-informational?style=flat&logo=node.js&logoColor=white&color=darkgreen)

- ![](https://img.shields.io/badge/Chart.js-informational?style=flat&logo=Chart.js&logoColor=white&color=important)

&nbsp;

### Performance

&nbsp;

![](/readmeImg/performance.png)

&nbsp;

- The first big performance improvement I made was learning about and utilized memoization (caching the result of a function's output). As each different page load was making another fetch request to my API, my load times were greatly reduced. I implemented this by setting a global context that stored the fetched data. It would only make another fetch request if the page was manually refreshed, not every time internal pages were routed to. You will now notice that when clicking on one of the top 10 coins from the home page, its corresponding chart will load instantly, as well as when you return back to the home page. 

&nbsp;

### What I learned



### Continued development

In the future, I'll publish a live site for this and make it responsive for mobile phones and other screen sizes.

### Useful resources

- [Chart.js](https://www.chartjs.org/docs/latest/) has really great, detailed, and easy to read documentation, and this was one of my best resources.

- [Web Dev Simplified](https://www.youtube.com/c/WebDevSimplified) - Kyle makes incredible tutorials on all things web development. I used his custom React hooks tutorial for this project. 

- [The Net Ninja](https://www.youtube.com/c/TheNetNinja) - Shaun also has some amazing tutorial series on his channel. I used his React series for help setting up my dynamic routes on my site. 

&nbsp;

## Acknowledgments

Thank you to fellow 100 Devs folks, especially GC on Discord for doing a code review with me on my project, and for helping me with a few React challenges I faced. Also, a big thanks to [octoshrimpy](https://github.com/octoshrimpy) for helping me with the site's favicon, and countless random troubleshooting sessions. 