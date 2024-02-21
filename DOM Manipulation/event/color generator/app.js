const title = document.querySelector("h1");
const generatorBtn = document.querySelector("#generate");

generatorBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = randomColor();
  title.innerText = randomColor();
});

const randomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
};
