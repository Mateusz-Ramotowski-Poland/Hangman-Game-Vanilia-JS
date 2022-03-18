"use strict";
// Hangman: game made by Mateusz Ramotowski in Vanilia JS
// first declarations of all global variables
// then function declarations to draw hangman on canvas
// then other function declarations
// at the end adding eventlisteners and calling functions
const buttonsToPLay = document.querySelectorAll(".letter-space-to-guess");
const LivesArea = document.querySelector(".lives-area");
const informationAreaWonLoose = document.querySelector(".information-area");
const guessWordArea = document.querySelector(".guess-word");
const playAgainButtonArea = document.querySelector(".play-button");
const guessCategoryArea = document.querySelector(".guess-category");
const highScoresArea = document.getElementsByClassName("high-score-area");
const canvas = document.getElementsByTagName("canvas")[0];

let wordToGuess;
let numberOfLives;
let drawingHangmanFunctionsCounter = 0;
const ctx = canvas.getContext("2d");
ctx.strokeStyle = "white";
ctx.lineWidth = 1;
const drawingHangmanFunctions = [
  foundation,
  pile,
  upperBoard,
  rope,
  head,
  stomach,
  leftHand,
  rightHand,
  leftLeg,
  rightLeg,
];

function foundation() {
  ctx.beginPath();
  ctx.moveTo(10, 140);
  ctx.lineTo(70, 140);
  ctx.stroke();
}
function pile() {
  ctx.moveTo(60, 140);
  ctx.lineTo(40, 120);
  ctx.moveTo(40, 140);
  ctx.lineTo(40, 10);
  ctx.stroke();
}
function upperBoard() {
  ctx.moveTo(40, 10);
  ctx.lineTo(110, 10);
  ctx.moveTo(40, 30);
  ctx.lineTo(60, 10);
  ctx.stroke();
}
function rope() {
  ctx.moveTo(110, 10);
  ctx.lineTo(110, 30);
  ctx.stroke();
}
function head() {
  ctx.moveTo(120, 40);
  ctx.arc(110, 40, 10, 0, Math.PI * 2);
  ctx.moveTo(106, 38);
  ctx.arc(105, 38, 1, 0, Math.PI * 2);
  ctx.moveTo(116, 38);
  ctx.arc(115, 38, 1, 0, Math.PI * 2);
  ctx.moveTo(107, 44);
  ctx.lineTo(113, 44);
  ctx.stroke();
}
function stomach() {
  ctx.moveTo(110, 50);
  ctx.lineTo(110, 80);
  ctx.stroke();
}
function leftHand() {
  ctx.moveTo(110, 65);
  ctx.lineTo(90, 50);
  ctx.stroke();
}
function rightHand() {
  ctx.moveTo(110, 65);
  ctx.lineTo(130, 50);
  ctx.stroke();
}
function leftLeg() {
  ctx.moveTo(110, 80);
  ctx.lineTo(90, 100);
  ctx.stroke();
}
function rightLeg() {
  ctx.moveTo(110, 80);
  ctx.lineTo(130, 100);
  ctx.stroke();
}
function returnPseudoRandomNumberFrom0ToHighestNumber(HighestNumber) {
  return Math.floor(Math.random() * (HighestNumber + 1));
}
function returnPseudoRandomWordToGuessAndChangeCategoryInDOM() {
  let pseudoRandomNumber, chosenCategory;
  let wordToGuess = "";
  const categories = {
    categories: ["cities", "countries", "rivers", "languages"],
    cities: ["london", "warsaw", "gizycko", "berlin", "puerto rico"],
    countries: [
      "poland",
      "germany",
      "russia",
      "slovakia",
      "united states of america",
    ],
    rivers: ["wisla", "odra", "motlawa", "nile", "amazon"],
    languages: ["polish", "english", "portuguese", "russian", "french"],
  };

  pseudoRandomNumber = returnPseudoRandomNumberFrom0ToHighestNumber(3);
  chosenCategory = categories.categories[pseudoRandomNumber];
  pseudoRandomNumber = returnPseudoRandomNumberFrom0ToHighestNumber(4);
  wordToGuess = categories[chosenCategory][pseudoRandomNumber];
  guessCategoryArea.textContent = chosenCategory;
  return wordToGuess;
}
function returnDashesWordToGuess(WordToGuess) {
  let createdString = "";
  for (let n = 0; n < WordToGuess.length; n++) {
    createdString += "-";
  }
  return createdString;
}
function returnWhereAndHowManyTimesInWordToGuessExistSameLetterOrSpace(event) {
  let indexOfChar = 0; // where in wordToGuess pushed letter/space exist. at beggining should have value different than -1 (look method indexOf)
  const searchedLetter = {
    indexesArray: [], //where in wordToGuess is letter from clicked button (at  which indexes)
    counterOfRepeatings: 0, // how many same letters exist in wordToGuess
  };
  while (indexOfChar !== -1) {
    if (searchedLetter.counterOfRepeatings === 0) {
      indexOfChar = wordToGuess.indexOf(event.path[0].innerHTML, 0); //event.path[0].innerHTML - string, letter/space(clicked button)
    } else {
      indexOfChar = wordToGuess.indexOf(
        // if it won't find anything indexOf will return -1
        event.path[0].innerHTML,
        indexOfChar + 1
      );
    }
    if (indexOfChar !== -1) {
      searchedLetter.indexesArray.push(indexOfChar);
      searchedLetter.counterOfRepeatings++;
    }
  }
  return searchedLetter;
}
function returnWhichButtonWasClicked(event) {
  let whichButtonWasPushed;
  for (const clickedButton of buttonsToPLay) {
    //this loop do: find html tag with concrete inner text
    if (clickedButton.textContent.includes(event.path[0].innerHTML)) {
      //event.path[0].innerHTML - string, letter/space(clicked button)
      whichButtonWasPushed = clickedButton;
      break;
    }
  }
  return whichButtonWasPushed;
}
function enableClickedButtonInDOM(clickedButton) {
  clickedButton.classList.remove("letter-space-to-guess-clicked");
  clickedButton.classList.add("letter-space-to-guess");
  clickedButton.disabled = false;
}
function disableClickedButtonInDOM(clickedButton) {
  clickedButton.classList.add("letter-space-to-guess-clicked");
  clickedButton.classList.remove("letter-space-to-guess");
  clickedButton.disabled = true;
}
function changeNumberOfLivesAfterClickingWrongLetterOrSpaceVariableAndDOM(
  searchedLetter
) {
  if (searchedLetter.counterOfRepeatings === 0 && numberOfLives > 0) {
    numberOfLives--;
    LivesArea.textContent = numberOfLives.toString();
    drawingHangmanFunctions[drawingHangmanFunctionsCounter]();
    if (drawingHangmanFunctionsCounter < drawingHangmanFunctions.length - 1) {
      drawingHangmanFunctionsCounter++;
    }
  }
}
function changeInformationAreaInDOM(textInInformationArea) {
  informationAreaWonLoose.textContent = textInInformationArea;
}
function deleteAllTextInLivesAreaInDOM() {
  LivesArea.textContent = "";
}
function removeEventListenerFromAllLetterSpaceButtons() {
  for (const button of buttonsToPLay) {
    button.removeEventListener("click", allFunctionalitiesLetterOrSpaceButton);
  }
}
function changeDOMYouLooseFunctionality() {
  if (numberOfLives === 0) {
    changeInformationAreaInDOM("You loose!");
    deleteAllTextInLivesAreaInDOM();
    removeEventListenerFromAllLetterSpaceButtons();
  }
}
function getHighScoreFromDOM(whichHighScore) {
  let highScore;
  let dashPOsition;
  highScore = highScoresArea[whichHighScore - 1].innerText;
  if (highScore.length === 2) {
    highScore = null;
  } else {
    dashPOsition = highScore.indexOf("-");
    highScore = parseInt(highScore.substring(dashPOsition + 2));
  }
  return highScore;
}
function getPlayerNameFromDOM(whichHighScore) {
  let playerName;
  let dashPOsition;
  playerName = highScoresArea[whichHighScore - 1].innerText;
  if (playerName.length === 2) {
    playerName = null;
  } else {
    dashPOsition = playerName.indexOf("-");
    playerName = playerName.substring(3, dashPOsition - 1);
  }
  return playerName;
}
function getNameOfPlayerFromUser() {
  // you must check that you don't have:
  // - dashes in playerName.
  // - empty string
  let doesItHaveDash;
  let playerName;
  do {
    playerName = prompt(
      "Congratulation! You won and you have very high score. What's your name?"
    );
    doesItHaveDash = playerName.indexOf("-");
  } while (!(playerName !== "" && doesItHaveDash === -1));
  return playerName;
}
function saveCurrentScoreInHighScoresInDOM(
  currentScore,
  whichHighScore,
  playerName
) {
  highScoresArea[
    whichHighScore - 1
  ].innerText = `${whichHighScore}: ${playerName} - ${currentScore}`;
}
function highScoreFunctionality(currentScore) {
  const highScores = [];
  const playerNames = [];
  let currentPlayerName;
  // how highScore string is built, example: "3: playerName - score"; after dash is always space, and after that space is always score.
  for (let i = 0; i < highScoresArea.length; i++) {
    highScores[i] = getHighScoreFromDOM(i + 1);
  }
  for (let i = 0; i < highScoresArea.length - 1; i++) {
    // I don't need last player name
    playerNames[i] = getPlayerNameFromDOM(i + 1);
  }
  //below is comparison: where put current score in high scores
  if (highScores[2] === null || currentScore > highScores[2]) {
    currentPlayerName = getNameOfPlayerFromUser();
    if (currentPlayerName !== null) {
      //if the user clicks the Cancel button, prompt function returns null.
      if (currentScore > highScores[1]) {
        if (currentScore > highScores[0]) {
          if (highScores[0] !== null) {
            if (highScores[1] !== null) {
              saveCurrentScoreInHighScoresInDOM(
                highScores[1],
                3,
                playerNames[1]
              );
            }
            saveCurrentScoreInHighScoresInDOM(highScores[0], 2, playerNames[0]);
          }
          saveCurrentScoreInHighScoresInDOM(currentScore, 1, currentPlayerName);
        } else {
          if (highScores[1] !== null) {
            saveCurrentScoreInHighScoresInDOM(highScores[1], 3, playerNames[1]);
          }
          saveCurrentScoreInHighScoresInDOM(currentScore, 2, currentPlayerName);
        }
      } else {
        saveCurrentScoreInHighScoresInDOM(currentScore, 3, currentPlayerName);
      }
    }
  }
}
function changeDOMYouWonFunctionality(returnedStringWordToGuess) {
  const currentScore = numberOfLives;
  if (!returnedStringWordToGuess.includes("-")) {
    changeInformationAreaInDOM("You won!");
    deleteAllTextInLivesAreaInDOM();
    removeEventListenerFromAllLetterSpaceButtons();
    highScoreFunctionality(currentScore);
  }
}
function returnChangedstringWordToGuessSoReplaceDashesWithClickedLetterIfIsGood(
  searchedLetter,
  event
) {
  const stringWordToGuess = guessWordArea.textContent;
  let returnedStringWordToGuess = "";
  let arrayWordToGuess = []; // stringWordToGuess change to array form
  if (searchedLetter.counterOfRepeatings !== 0) {
    for (const sign of stringWordToGuess) {
      arrayWordToGuess.push(sign);
    }
    for (let m = 0; m < searchedLetter.indexesArray.length; m++) {
      arrayWordToGuess[searchedLetter.indexesArray[m]] =
        event.path[0].innerHTML; //event.path[0].innerHTML - string, letter/space(clicked button)
    }
    // above change every "-" with letter
    for (let n = 0; n < arrayWordToGuess.length; n++) {
      returnedStringWordToGuess += arrayWordToGuess[n];
    }
    guessWordArea.textContent = returnedStringWordToGuess;
  } else {
    returnedStringWordToGuess = stringWordToGuess;
  }
  return returnedStringWordToGuess;
}
function allFunctionalitiesLetterOrSpaceButton(event) {
  let whichButtonWasPushed;
  let searchedLetter;
  let returnedStringWordToGuess = ""; //stringWordToGuess changed (dashes replaced with lettters) and returned to DOM
  searchedLetter =
    returnWhereAndHowManyTimesInWordToGuessExistSameLetterOrSpace(event);
  returnedStringWordToGuess =
    returnChangedstringWordToGuessSoReplaceDashesWithClickedLetterIfIsGood(
      searchedLetter,
      event
    );
  changeNumberOfLivesAfterClickingWrongLetterOrSpaceVariableAndDOM(
    searchedLetter
  );
  whichButtonWasPushed = returnWhichButtonWasClicked(event);
  disableClickedButtonInDOM(whichButtonWasPushed);
  changeDOMYouLooseFunctionality();
  changeDOMYouWonFunctionality(returnedStringWordToGuess);
}
function addEventListenerToButtonsToPLay() {
  for (const button of buttonsToPLay) {
    button.addEventListener("click", allFunctionalitiesLetterOrSpaceButton);
  }
}

playAgainButtonArea.addEventListener("click", function () {
  let createdString;
  addEventListenerToButtonsToPLay();
  changeInformationAreaInDOM("Number of lives:");
  numberOfLives = 10;
  LivesArea.textContent = numberOfLives;
  wordToGuess = returnPseudoRandomWordToGuessAndChangeCategoryInDOM();
  createdString = returnDashesWordToGuess(wordToGuess);
  guessWordArea.textContent = createdString;
  for (let button of buttonsToPLay) {
    enableClickedButtonInDOM(button);
  }
  drawingHangmanFunctionsCounter = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
addEventListenerToButtonsToPLay();

wordToGuess = returnPseudoRandomWordToGuessAndChangeCategoryInDOM();
numberOfLives = 10;
LivesArea.textContent = numberOfLives;
guessWordArea.textContent = returnDashesWordToGuess(wordToGuess);

