# Top Coin

## [API](https://top-coin.herokuapp.com/api/coindata) | [Website](https://top-coin.herokuapp.com/) 

<br/>

![](https://img.shields.io/badge/MongoDB-informational?style=flat&logo=mongodb&logoColor=white&color=green)
<br/>
![](https://img.shields.io/badge/Express-informational?style=flat&logo=express&logoColor=white&color=lightgray)
<br/> ![](https://img.shields.io/badge/React-informational?style=flat&logo=react&logoColor=white&color=informational)
<br/> 
![](https://img.shields.io/badge/Node.js-informational?style=flat&logo=node.js&logoColor=white&color=darkgreen) 
<br/> 
![](https://img.shields.io/badge/Chart.js-informational?style=flat&logo=Chart.js&logoColor=white&color=important)

<br/>

![](/readmeImg/demo-top-coin.gif)

<br/>

This project allowed me to deep-dive into the MERN stack. I focused on adhering to best practices while still striving to achieve the best performance possible. Performance was especially important with this project as the database could grow to a very large size. My initial intention was to spend about 100 hours building this fullstack app, however once I actually began the process of doing so, I discovered more and more features I wanted to implement. Some of these features included the ability to sort coins by different categories and light/dark mode toggle that would save the user’s preference to local storage.

In the end, this project took well over 200 hours from start to finish. The experience presented me with many opportunities to improve my skills and ultimately left me with a better understanding of MongoDB, Express, React, and Node.
 

## Table of contents

- [Overview](#overview)
- [My process](#my-process)
  - [Performance](#performance)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Features](#features)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

<br />

## Overview
Top Coin is a cryptocurrency tracker. At the end of every day (11:59pm MST), the top 10 performing coins – based on their percent growth in the last 24 hours – are added to the database. If one of these top-performing coins hasn't been in the top 10 before, a new document is created for that coin. If the coin has been in the top 10 coins previously, the coin's relevant data is updated.

<br/>

## Features
- Variety of sorting options including ascending or descending order based on 24h change, 7d change, or by price.
- Site-wide dark and light mode.
- Site path /api/coindata route will show all historical collected data in the database.
- Each Top 10 Coin displays a chart with data points that depict all previous dates wherein that coin was among the top 10 coins of the day.
- Dynamic routing; each coin has its own unique route.

<br/>

## My process

Step 1: Planning
  - The first step of my process was finding a project that would align with my goals - to build a website with a lot of dynamic data and get some repetition for my React skills.
  - Cryptocurrency sites, like [CoinMarketCap](https://coinmarketcap.com/) and [CoinGecko](https://www.coingecko.com/) are great examples of websites that display a lot of dynamic data, so I modeled my idea after their sites. I did not want to make a copy that only displays data; I wanted there to be a separate purpose, which is why I came up with the idea to only log the top 10 performing coins of the day.

Step 2: Server setup: 
- I began building the backend of the app and creating the structure for a custom API. With a custom API, I would have all the data I needed ready to use when building the frontend.
- I set up a simple backend server, and connected to my MongoDB cluster. From there, I set up my site routes. I knew I would only need get all data, post, and patch requests, so I did not make a delete route or a get specific id route. Next, I setup a function that would fetch data at whatever interval I specified. For testing, this was set at every 1 - 10 minutes to find bugs, but at the production stage, the database was completely deleted, and the interval was set to once per day. 
- Note, for the first day in production, I set the server to fetch every 30 minutes just to start with a decent amount of starting data. 

Step 3: React:
- After I had the backend working as I wanted, I started laying out how I wanted my site to look in Figma. I only laid out a rough idea, as I intended to change the site as I went, I knew I would have problems/features come up during development that I would want to address.
- As this was my biggest project to date, how my files were set up was not ideal for a project this size. I had to change my entire file structure from how I initially had it laid out, both for future scaling and best practices. 

Step 4: Deployment:
- I chose to deploy my app on Heroku. The main two reasons for this choice were that I had already used Heroku and was familiar with it, and because it was free and performs very well. 


<br/>

### Performance

![](/readmeImg/performance.png)

- The first big performance improvement I made was learning about and utilizing memoization (caching the result of a function's output). As each different page load was making another fetch request to my API, my load times were greatly reduced. I implemented this by setting a global context that stored the fetched data. It would only make another fetch request if the page was manually refreshed, not every time internal pages were routed to. You will now notice that when clicking on one of the top 10 coins from the home page, its corresponding chart will load instantly, as well as when you return back to the home page. 

- Secondly, after running a Lighthouse audit, I noticed that the loading of all of my API data was taking a long time. I implemented compression middleware, and as a result, my time to interactive went from 1.3 seconds down to 0.8 - 0.9 seconds. 

<br/>

### What I learned

I learned a lot throughout this entire process. From small housekeeping lessons to structural changes in how I thought about complex processes, like that splitting my controllers in separate files from my routes for organization and readability. The top three things I learned that made me into a better developer in this project were:

  1. Dealing with dynamic data in all manners, for example, making dynamic routes or making charts that can handle dynamic data.

  2. How crucial organization is from the **very beginning** of the project. Something I will now implement into my planning stage of making a project is laying out my file structure before hand. Trying to imagine and plan for the largest possible size my project could get to, and make the file structure suit that size is one way I will approach this.

  3. React hooks! Before this project, I had heard of React hooks, but I was putting off learning about what they were, as the topic seemed daunting. In this project, thanks to the suggestion from someone on the 100Devs Discord, I spent a few hours diving into React hooks and how to build a custom React hook. I ended up using many built in React hooks, and building a custom hook that I needed for my project (/client/src/hooks/useFetchData.js). By the end of the project, I was very confident with useContext, useState, and useEffect.

<br/>

### Continued development

- Currently, the site is not responsive or mobile friendly. The main purpose of this project was to improve my talents in MERN, so I prioritized that first. In the coming months I plan to have this site fully responsive. 
- Right now, all of the links in the dropdown menus are to external sources. I would like to find a better way to do this, like having internal routes to that information. There is still a lot to plan here and think about, so this improvement might be a ways off.
- The last big piece I see that needs fixing is the individual coin's charts. After around 250 data points are shown on the chart at a time, the chart starts lagging when you move your cursor over it. To solve this, I have the chart limited to 100 of the coin's most recent data points shown at a time. This is not currently a concern, as it is highly unlikely that within a year, a single coin will have accumulated over 100 data points. My solution to fix this is to either: 
  
  1. Display the data similar to how other coin tracker sites work, and have range selectors. If the user selects "all time data," I would have an array that has found the average price of however data points are necessary to keep the total data points on the chart (array length) less than 100.


  2. Make a page system with two clickable arrows which will show 100 data points on each page, or a horizontal scroll bar. This would be idea for getting the exact dates of when the coin was in the top 10 coins of the day. For accuracy, I will most likely chose this option.  

<br/>

### Useful resources

- [Chart.js](https://www.chartjs.org/docs/latest/) has really great, detailed, and easy to read documentation, and this was one of my best resources.

- [Web Dev Simplified](https://www.youtube.com/c/WebDevSimplified) - Kyle makes incredible tutorials on all things web development. I used his custom React hooks tutorial for this project. 

- [The Net Ninja](https://www.youtube.com/c/TheNetNinja) - Shaun also has some amazing tutorial series on his channel. I used his React series for help setting up my dynamic routes on my site. 

<br/>

## Acknowledgments

Thank you to fellow 100 Devs folks, especially GC on Discord for doing a code review with me on my project, and for helping me with a few React challenges I faced. Also, a big thanks to [octoshrimpy](https://github.com/octoshrimpy) for helping me with the site's favicon, and countless random troubleshooting sessions. 
