const button = document.querySelector("#clickme");

button.onclick = function () {
  console.log("Thank you for clicking!");
};

const scream = () => {
  console.log("Dont touch me!");
};
button.onmouseover = scream;

const eventBtn = document.querySelector("#eventbtn");
// eventBtn.addEventListener("click", () => {
//   alert("clicked!");
// });

const stepSatu = () => {
  console.log("Step satu");
};

const stepDua = () => {
  console.log("Step dua");
};

/* Dengan menggunakan addEventListener,
bisa menjalankan callback function
yang berbeda tanpa ter-override */
eventBtn.addEventListener("click", stepSatu);
eventBtn.addEventListener("click", stepDua);
