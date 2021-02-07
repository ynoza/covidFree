# Welcome to [covidFree](https://nocovidinthis.space)
## Inspiration

The COVID-19 pandemic and the constant apprehension of contracting the virus. Many people's jobs have a very strong physical element to it, and so, have a higher risk of contracting COVID-19 in their day to day lives.

## What it does

This project will help reduce the mental fear of catching the **worrisome** COVID-19 virus because employers can now monitor the **temperature fluctuations** about a given employee in a given time period and determine if they are fit and safe to work and don't pose a threat to anyone's wellbeing. This is easily integrated into their day to day lives by collecting temperature data in a seamless manner, through devices such as an AirPod, which can track your temperature effortlessly while you're listening to your favorite song. 

## How we built it
We are employing the usage of a **Raspberry Pi** hardware device that is connected to a **temperature sensor** and simulates a **Proof of Concept** hardware for our devices. The **Pi** was able to send the collected data to **Firebase** with the help of a **Python**  script. Firebase's **Firestore** was appropriately organized and populated so our **React Web Application** could able to pull the data according to a specific user in **real-time** and display the temperatures in a distinguishable manner such that an employer could easily notice trends and make decisions regarding whether an employee is at risk of transmitting COVID. 

## Challenges we ran into
We were going to implement a **Convolutional Neural Network** model that is trained on temperatures of people who tested negative for COVID-19 and when given a temperature set is able to categorize whether an individual is at risk of getting COVID-19 accurately. However, we were unable to do so because of time constraints. 

## Accomplishments that we're proud of
Each and every member of the team was able to work on an aspect of **full-stack development** that we were relatively inexperienced in. Some things such as the frontend design looked **very aesthetic and clean** in our opinion as well as being fully dynamic which can update in real-time with **Firebase**. In addition, the hardware component of the project, unlike many others, was actually proven to be possible (by PoC) and would outline details through the **schematic**. 

![Alt text](https://github.com/ynoza/covidFree/raw/main/schematics/UOttaHack-covidFree.png)

## What we learned
Some of the teammates learned **frontend, database development, hardware components, and some learned all three components**. Overall, we learned to push through our **comfort zone** as none of us had ever connected a Raspberry Pi project to a database, let alone be able to present the database in a user-friendly way for current employers.

## What's next for covidFree 2021
Hopefully, nothing, because that means the end of the pandemic! 🙃

## Try it out!

https://nocovidinthis.space/

[Devpost](https://devpost.com/software/covidfree-2021)

https://covidfree-c4429.web.app/
