import "../style.css";
import ColorGame from "./ColorGameClass";

const container = document.querySelector(".container");
const mainDisplay = document.querySelector(".container__main-display");
const options = document.querySelectorAll(".container__options");
const optionsArrHardMode = document.querySelectorAll(
  ".container__options--hardmode"
);
const gameSwitchBtn = document.querySelector(".game-switch-btn");

const colorGame = new ColorGame();

function setColor(isHardMode) {
  if (isHardMode) {
    const randomColorArrFour = colorGame.randomColorForDisplayAndOptionsForHardMode();

    options.forEach((option, index) => {
      const colorForOption = randomColorArrFour[index];
      option.setAttribute("data-color", colorForOption);
      option.style.backgroundColor = colorForOption;
    });

    const mainDisplayColorText = colorGame.generateMathRandom(
      randomColorArrFour
    );
    mainDisplay.innerHTML = mainDisplayColorText;
  } else {
    const randomColorArrFour = colorGame.randomColorForDisplayAndOptions();

    options.forEach((option, index) => {
      const colorForOption = randomColorArrFour[index];
      option.setAttribute("data-color", colorForOption);
      option.style.backgroundColor = colorForOption;
    });

    const mainDisplayColorText = colorGame.generateMathRandom(
      randomColorArrFour
    );
    mainDisplay.innerHTML = mainDisplayColorText;
  }
}

// main functionality

options.forEach(option => {
  option.addEventListener("click", function(e) {
    const checkForWinner = colorGame.checkForWin(
      mainDisplay.textContent,
      e.target.dataset.color
    );

    if (checkForWinner === "correct") {
      window.location.href = "/result.html";
      console.log("winner");
    } else {
      e.target.style.backgroundColor = "red";

      setTimeout(() => {
        e.target.style.backgroundColor = e.target.dataset.color;
      }, 1000);
    }
  });
});

setColor(false);

gameSwitchBtn.addEventListener("click", function(e) {
  if (e.target.innerText === "Hard Mode") {
    e.target.innerHTML = "Normal Mode";
    container.classList.remove("container");
    container.classList.add("container__new");

    optionsArrHardMode.forEach(option => {
      option.classList.remove("container__hidden");
    });
    setColor(true);
  } else {
    container.classList.add("container");
    container.classList.remove("container__new");
    e.target.innerHTML = "Hard Mode";
    optionsArrHardMode.forEach(option => {
      option.classList.add("container__hidden");
    });
    setColor(false);
  }
});
