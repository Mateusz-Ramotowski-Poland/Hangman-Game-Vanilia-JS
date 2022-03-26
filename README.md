# Hangman-Game-Vanilia-JS
> You can play the hangman game in the web browser.
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
This project is a browser game. In order to win the game, you have to click on the buttons with letters/space that you think are in the guessing password. I created it to practice my programming skills. In this project, I focused on learning JS and chrome developer tools. That's why it's working the best on laptop/computer screen on Google Chrome browser. It doesn't work in the Firefox browser correctly. In the future, I want to work on this that app would work correctly on other browsers and also on mobiles. 
## Technologies Used
Project is created with:
* HTML5
* CSS3
* JS(ES6+)
* Canvas API

I was using Chrome developer tools for testing my application.

## Features
- The application shows messages for the player: number of lives/score, message about winning and losing.
- When a player clicks a button with a letter/space which is not inside guessing password he: loses a life and part of the gallows or part of the hangman is drawn inside the canvas tag. When a player will have 0 lives he will lose.
- When a player clicks a button with a letter/space which is inside the guessing password: this letter will be shown in the guessing word. When all the letters in the guessing word will show player wins.
- When you click a button with a letter/space, this button becomes inactive. You cannot click the same button twice in the same game.
- The application choose random password for the player to guess. There are 4 password categories in the game, each category has 5 passwords. Password can contain a few words, for example, password Puerto Rico.
- The application saves the top 3 high scores. Score = number of lives. After winning the game, if the player has a high enough score, the application will ask the player to enter his/her name. His name and result are recorded on the list.
- The player can play again if the 'play again' button is pressed. After clicking the button: a new word to guess is chosen, the player has 10 lives again, the drawing inside the canvas is deleted, all letter/space buttons are active again.

## Screenshots
![main view](https://user-images.githubusercontent.com/83215700/159060155-cb9e5ab1-cc34-478c-9198-e8d7bac335e6.PNG)

## Project Status
The project is in progress. All listed features work correctly on laptop/computer screen on Google Chrome browser. It doesn't work in the Firefox browser correctly. In the future, I want to work on this that app would work correctly on other browsers and also on mobiles. When I learn more about APIs I want to download passwords to guess from outer API.

## Acknowledgements
- This project was inspired by https://megoh.github.io/projects/hangman/index.html. Thank you for the idea for the app. I also used your part of the code used for drawing on canvas - I reworked it in my project to draw a similar drawing.
- I am thankful to the members of the polish group "HTML, CSS and JS: pierwsze kroki" ["HTML, CSS and JS: first steps"] on FB, for Your remarks.

## Contact
Created by Mateusz Ramotowski (mateusz.ramotowski.praca@gmail.com) - feel free to contact me!
