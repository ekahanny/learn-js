// TO-DO
// Button akan disable jika belum mencapai max point
// Jika ada pemain yang sudah mencapai max point, maka btn tidak bisa diklik lagi
// Baru bisa diupdate ketika max point di update/tombol reset diklik

const homeBtn = document.querySelector("#p1-button");
const guestBtn = document.querySelector("#p2-button");
const resetBtn = document.querySelector("#reset");
const maxScore = document.querySelector("#playto");

const homeDisplay = document.querySelector("#p1-display");
const guestDisplay = document.querySelector("#p2-display");

let homeScore = 0;
let guestScore = 0;
let winnerScore = 0;
let isGameOver = false;

homeBtn.addEventListener("click", () => {
  if (!isGameOver) {
    homeScore++;
    if (homeScore === winnerScore) {
      isGameOver = true;
      homeDisplay.classList.add("text-success");
    }
  }
  homeDisplay.textContent = homeScore;
});

guestBtn.addEventListener("click", () => {
  if (!isGameOver) {
    guestScore++;
    if (guestScore === winnerScore) {
      isGameOver = true;
      guestDisplay.classList.add("text-success");
    }
  }
  guestDisplay.textContent = guestScore;
});

function buttonControl() {
  if (winnerScore === 0) {
    homeBtn.setAttribute("disabled", "");
    guestBtn.setAttribute("disabled", "");
  } else {
    homeBtn.removeAttribute("disabled");
    guestBtn.removeAttribute("disabled");
  }
}

function reset() {
  homeScore = 0;
  guestScore = 0;
  winnerScore = 0;
  isGameOver = false;
  homeDisplay.textContent = 0;
  guestDisplay.textContent = 0;
  homeDisplay.classList.remove("text-success");
  guestDisplay.classList.remove("text-success");
}

maxScore.addEventListener("change", () => {
  winnerScore = parseInt(maxScore.value);
  buttonControl();
  reset();
});

resetBtn.addEventListener("click", () => {
  reset();
});

buttonControl;
