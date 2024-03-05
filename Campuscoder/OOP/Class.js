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
arr2.hello();

// Deklarasikan pada array global
Array.prototype.hello = () => {
  console.log("Hello World!");
};
arr2.hello(); // berhasil
