# Hangman-Game-Vanilia-JS
> You can play hangman game in web browser.
> Live demo [_here_](https://mateusz-ramotowski-poland.github.io/Hangman-Game-Vanilia-JS/). 

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Project Status](#project-status)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [License](#license) -->


## General Information
This project is web browser game. I made to le
Your goal is to guess the word from random category

<!-- You don't have to answer all the questions - just the ones relevant to your project. -->
## Technologies Used
Project is created with:
* HTML5
* CSS3
* JS(ES6+)
* Canvas API

## Features
- The application shows messages for the player: number of lives/score, message about winning and losing.
- When a player loses a life, part of the gallows or part of the hangman is drawn inside the canvas tag.
- When you click a button with a letter/space, this button becomes inactive. You cannot click the same button twice in the same game.
- The application randomizes the word for the player to guess. There are 4 word categories in the game, each category has 5 words.
- The application saves the top 3 high scores. Score = number of lives. After winning the game, if the player has a high enough score, the application will ask the player to enter his/her name. His name and result are recorded on the list.
- The player can play again if the 'play again' button is pressed. After clicking the button: a new word to guess is chosen, the player has 10 lives again, the drawing inside the canvas is deleted, all letter/space buttons are active again.

## Screenshots
![main view](https://user-images.githubusercontent.com/83215700/159060155-cb9e5ab1-cc34-478c-9198-e8d7bac335e6.PNG)

## Project Status
Project is complete.

## Acknowledgements
This project was inspired by https://megoh.github.io/projects/hangman/index.html. Thank you for the idea for the app. I also used the hangman drawing part of the code of this project - I reworked it in my project to draw a similar drawing.

## Contact
Created by Mateusz Ramotowski (mateusz.ramotowski.praca@gmail.com) - feel free to contact me!
