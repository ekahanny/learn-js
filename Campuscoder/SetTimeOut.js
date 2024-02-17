// setTimeout & setInterval

/* 

berfungsi untuk memberi waktu jeda
dan melakukan perulangan setiap 
waktu yang ditentukan 

*/

// SET TIMEOUT -> Program baru akan dieksekusi setelah jeda waktu

// Akan dieksekusi pertama kali
console.log("Hey..");

// Baru akan dieksekusi setelah 5 detik
setTimeout(() => {
  console.log("Are you still there?");
}, 5000);

// Akan dieksekusi bersamaan dengan baris 12
console.log("Good.");

// SET INTERVAL -> Program akan dijalankan berulang setiap jeda waktu

// Menampilkan angka random setiap 2 detik
const interval = setInterval(() => {
  console.log(Math.random());
}, 2000);

// Digunakan untuk memberhentikan perulangan setInterval
clearInterval(interval);
