document.addEventListener("DOMContentLoaded", () => {
  const dice1 = document.querySelector(".img1");
  const dice2 = document.querySelector(".img2");
  const heading = document.querySelector("h1");

  const buttonClick = () => {
    const number1 = randomNumber();
    switch (number1) {
      case 1:
        dice1.setAttribute("src", "images/dice1.png");
        break;
      case 2:
        dice1.setAttribute("src", "images/dice2.png");
        break;
      case 3:
        dice1.setAttribute("src", "images/dice3.png");
        break;
      case 4:
        dice1.setAttribute("src", "images/dice4.png");
        break;
      case 5:
        dice1.setAttribute("src", "images/dice5.png");
        break;
      case 6:
        dice1.setAttribute("src", "images/dice6.png");
        break;
    }

    const number2 = randomNumber();
    switch (number2) {
      case 1:
        dice2.setAttribute("src", "images/dice2.png");
        break;
      case 2:
        dice2.setAttribute("src", "images/dice2.png");
        break;
      case 3:
        dice2.setAttribute("src", "images/dice3.png");
        break;
      case 4:
        dice2.setAttribute("src", "images/dice4.png");
        break;
      case 5:
        dice2.setAttribute("src", "images/dice5.png");
        break;
      case 6:
        dice2.setAttribute("src", "images/dice6.png");
        break;
    }
    heading.style.fontSize = "5.5rem";

    if (number1 > number2) {
      heading.textContent = "🚩 Player 1 Wins!";
    } else if (number1 < number2) {
      heading.textContent = "Player 2 Wins! 🚩";
    } else if (number1 === number2) {
      heading.textContent = "Draw!";
    }
  };

  dice1.addEventListener("click", buttonClick);
  dice2.addEventListener("click", buttonClick);
});

const randomNumber = () => {
  return Math.floor(Math.random() * 6) + 1;
};
