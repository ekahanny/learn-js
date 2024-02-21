const buttons = document.querySelectorAll("button");
const headings = document.querySelectorAll("h1");

const randomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
};

for (const button of buttons) {
  button.addEventListener("click", colorize);
}

for (const heading of headings) {
  heading.addEventListener("click", colorize);
}

/**
 * Gunakan keyword this agar
 * fungsi ini bisa digunakan
 * pada object yang berbeda
 * (pada button & heading)
 */
function colorize() {
  this.style.backgroundColor = randomColor();
  this.style.color = randomColor();
}
