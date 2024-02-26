# myGameScores

Welcome to myGameScores, a web app created for a unique way to score video games. The app has access to thousands of video games which you can score out of 5 on metrics such as gameplay, narrative, music, art and personal enjoyment. The final score for the game is then calculated from these metrics. The scoring system is not flawless, nor is it meant to be, just different.

The scoring uses an 'out of 5 stars' system and allows for half stars. I went with a 5 star system as I personally find it easier to be more critical of a game ('3/5 sounds less critical than 6/10').

You can view a live version here.

## Stack

* React
* Typescript
* Firebase (Firestore, Auth)
* Tailwind CSS with DaisyUI
* Vite
* RAWG.io API

## Setup

Clone the project and install dependencies

`$ git clone https://github.com/addleton/game-scores.git`
`$ cd game-scores`
`$ npm install`

Create an .env file and add Firebase config and RAWG api keys to the file.