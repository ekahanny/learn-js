// CALL STACK

/*

Callstack adalah mekanisme interpreter
utk melacak lokasi skrip yg memanggil
banyak fungsi yg sedang dijalankan serta
fungsi apa saja yg ada didlm fungsi tsb.

*/

const perkalian = (x, y) => x * y;
const akar = (x) => perkalian(x, x);
const pythagoras = (a, b, c) => {
  return akar(a) + akar(b) === akar(c);
};

console.log(pythagoras(3, 4, 5));

// SINGLE THREAD

/*

Pada dasarnya, JS bersifat single thread
(single thread adalah program yang hanya
dapat dijalankan pada satu waktu). Untuk 
mengatasi hal tsb, kita bisa menggunakan
prinsip multi-thread yang dikerjakan oleh
browser engine.

*/

console.log("Muncul Pertama");

setTimeout(() => {
  console.log(
    "Ini sudah memasuki memory proses tapi dijalankan setelah 3 detik"
  );
}, 3000);

console.log("Muncul Kedua");
