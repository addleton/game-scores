# myGameScores

Welcome to myGameScores, a unique web app designed for scoring video games in a personalized way. With access to thousands of video games, you can rate them on various metrics such as gameplay, narrative, music, art, and personal enjoyment. The final game score is calculated based on these metrics, providing a distinctive approach to evaluating gaming experiences.

The scoring system, utilizing a 'out of 5 stars' framework with support for half stars, aims to offer flexibility and precision. This system allows users to express a nuanced opinion on each aspect of the game. I chose a 5-star scale as it provides granularity while being familiar and user-friendly.

[You can view a live version here.](https://game-scores-d5150.web.app/)

## Tech Stack

* React: Building responsive user interfaces.
* Typescript: Enhancing code readability and maintainability.
* Firebase (Firestore, Auth): Managing user authentication and storing game scores.
* Tailwind CSS with DaisyUI: Crafting a sleek and modern UI effortlessly.
* Vite: Powering fast and efficient development builds.
* RAWG.io API: Accessing a vast database of video games for scoring.

## Setup

Clone the project and install dependencies

`$ git clone https://github.com/addleton/game-scores.git`  
`$ cd game-scores`  
`$ npm install`  

Create an .env file in the root directory and add your Firebase configuration and RAWG API keys.

>VITE_REACT_APP_FIREBASE_KEY=your_firebase_key
>VITE_REACT_APP_AUTH_DOMAIN=your_firebase_auth_domain
>VITE_REACT_APP_PROJECT_ID=your_firebase_project_id
>VITE_REACT_APP_STORAGE_BUCKET=your_firebase_storage_bucket
>VITE_REACT_APP_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
>VITE_REACT_APP_APP_ID=your_firebase_app_id
>VITE_REACT_APP_MEASUREMENT_ID=your_firebase_measurement_id
>VITE_REACT_APP_RAWG_KEY=your_rawg_api_key

Run the app

`npm run dev`  

Feel free to contribute, report issues, or suggest enhancements to make myGameScores even better!