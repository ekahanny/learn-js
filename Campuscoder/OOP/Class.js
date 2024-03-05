// Class

/*
Konsep dimana javascript bisa
menurunkan property/method yang
dimiliki oleh suatu object kedalam
object lain yang kita buat.
*/

const arr = [1, 2, 3];
arr.hello = () => {
  console.log("hello world!");
};

arr.hello();

const arr2 = [4, 5, 6];
/*
akan menghasilkan error krn
func hello hanya dideklarasikan
untuk variabel arr
*/
// arr2.hello();

// Deklarasikan pada array global
Array.prototype.hello = () => {
  console.log("Hello World!");
};
arr2.hello(); // berhasil

// Factory Function
function convertColor(r, g, b) {
  // property
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;

  // method
  color.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  };

  // method
  color.hex = function () {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  return color;
}

const colour = convertColor(123, 123, 123);
console.log(colour.rgb());
console.log(colour.hex());
