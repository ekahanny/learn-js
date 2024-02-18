// SPREAD OPERATOR

/*

Mengubah suatu array atau object
menjadi deret parameter untuk
sebuah function

*/

const angka = [100, 850, 76, 5, 522, 0, 884];
console.log(...angka);
console.log(Math.max(...angka)); //884

/* Hal ini tidak akan menghasilkan output
apapun sebab parameter yang diterima masih
berbentuk array, method max memerlukan
parameter hasil dari spread operator */
// Math.max(angka)

// Menggabungkan dua array dengan spread operator
const nama = ["Eka", "Hanny", "Oktavia", "Ekuy", "Cici"];
const gabungan = [...angka, ...nama];
console.log(gabungan);

// Menggabungkan dua object dengan spread operator
const user = {
  name: "user",
  email: "useremail@gmail.com",
};

const credential = {
  password: "pass",
  token: "J949384jdsnjsfbUFH",
};

const userFixed = { ...user, ...credential };
console.log(userFixed);

// Rest Param

/*

Digunakan ketika parameter dalam sebuah
function berjumlah banyak atau tak tentu.

*/

const sumAll = (...nums) => {
  let total = 0;
  for (let n of nums) {
    total += n;
  }
  return total;
};

// const sumAll = (...nums) => {
//   return nums.reduce((total, el) => total + el);
// };

console.log(sumAll(1, 90, 3982, 86, 203, 5, 346, 11, 23));
console.log(sumAll(1, 2, 3, 4));

// Contoh Lain
const pemenang = (gold, silver, bronze, ...sisa) => {
  console.log(`Medali emas diraih oleh ${gold}`);
  console.log(`Medali silver diraih oleh ${silver}`);
  console.log(`Medali bronze diraih oleh ${bronze}`);
  console.log(`Peserta Lainnya: ${sisa}`);
};

console.log(pemenang(...nama));
