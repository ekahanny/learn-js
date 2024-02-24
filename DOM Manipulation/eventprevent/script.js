// EVENT BUBBLING
/*
Mencegah agar ketika parent 
element (container) di klik,
maka tidak berpengaruh pada
child elementnya (button).
Intinya apapun yang terjadi 
pada parent, tdk ikut berdampak
bagi child elementnya.

*/
const container = document.getElementById("container");
const button = document.getElementById("changeColor");

button.addEventListener("click", function (e) {
  container.style.backgroundColor = randomColor();
  e.stopPropagation(); // Bubbling
});

container.addEventListener("click", function () {
  container.classList.toggle("hide");
});

const randomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
};
