# 🪐 Spacestagram 🚀

## 📖 Introduction

Spacestagram app is a responsive front-end app which allows users to view and share photos and videos from the NASA Astronomy Picture of the Day API.

[>>> View my app here <<< ](https://spacestagram-ruowent.netlify.app/)

## 🖥 Tech Stack
<b>Development</b>: ReactJS, Material-UI, Virtual-scroll<br />
<b>Tools & Testing</b>: Jest<br />

## 🌟 Features
- Infinite scroll
- Like / Unlike a post
- Share link for image/video
- Loading state while fetching data from NASA API
- Photo search via date picker
- Scroll to top button
- Accessibility

## 🎥 Demo

### 💻 Desktop View
![DesktopView](https://github.com/ruowent/spacestagram/blob/main/public/desktopview.gif?raw=true)

### 📱 Mobile View
![MobileView](https://github.com/ruowent/spacestagram/blob/main/public/mobileview.gif?raw=true)

### 📲 Responsive
![Responsive](https://github.com/ruowent/spacestagram/blob/main/public/responsive.gif?raw=true)


## 🛠 Setup
This app is deployed [here](https://spacestagram-ruowent.netlify.app/), however if you prefer to setup a local copy, please follow the stpes below: 

1. Fork or download this repository

2. Get a free API key from https://api.nasa.gov

3. Create .env file in the root folder with the API key value like below

```sh
    REACT_APP_APIKEY=yourAPIKey
```

4. Fork or download this repository

5. Install dependencies with 

```sh
yarn install
```

6. Running Webpack Development Server

```sh
yarn start
```
## ✅ Tools & Testing (Jest)

### Running Jest Test Framework

```sh
yarn test
```
