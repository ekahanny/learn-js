// Cara Biasa
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function print(element) {
  console.log(element);
}

// print(angka[0]);
// print(angka[1]);
// print(angka[2]);

// For Each
angka.forEach(function (el) {
  if (el % 2 === 0) {
    console.log(el);
  }
});

// Contoh Lain For Each
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

colors.forEach(function (color) {
  console.log(`the color of ${color.color} has the value of ${color.value}`);
});
