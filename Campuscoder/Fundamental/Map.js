/* 

MAP

Mengembalikan array baru yang telah
dimodifikasi melalui callback function
dari array lain

*/

// Contoh 1
const fruits = ["apel", "pisang", "mangga", "pir"];
const capsFruits = fruits.map(function (el) {
  return el.toUpperCase();
});

console.log(fruits);
console.log(capsFruits);

// Contoh 2
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pangkatDua = angka.map(function (el) {
  return el * el;
});

console.log(angka);
console.log(pangkatDua);

// Contoh 3
const colors = [
  {
    color: "red",
    value: "#f00",
  },
  {
    color: "green",
    value: "#0f0",
  },
  {
    color: "blue",
    value: "#00f",
  },
  {
    color: "cyan",
    value: "#0ff",
  },
  {
    color: "magenta",
    value: "#f0f",
  },
  {
    color: "yellow",
    value: "#ff0",
  },
  {
    color: "black",
    value: "#000",
  },
];

const colorValue = colors.map(function (color) {
  return `the value of ${color.color} is ${color.value}`;
});

console.log(colorValue);
