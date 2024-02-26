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

// DESTRUCTING

// array
const [gold, silver, bronze, ...sisaPeserta] = nama;
console.log(gold);
console.log(silver);
console.log(bronze);
console.log(sisaPeserta);

// object

/*
Pada destructing object, kita harus 
memberikan variabel yang sama dengan
nama properti dari object tersebut,
atau bisa juga kita gunakan aliases
seperti contoh dibawah ini
*/

const userData = {
  name: "ekahnny",
  email: "ekahnny@gmail.com",
};

const { name: userName, email } = userData;
console.log(userName);
console.log(email);

// Destructing untuk parameter

/* Destructing juga dapat
digunakan untuk membuat parameter
pada sebuah function, dimana 
parameter tersebut diambil dari 
property dari sebuah object */

const adminData = {
  name: "admin",
  email: "admin@gmail.com",
  isAdmin: true,
};

const adminRole = ({ name: adminName, isAdmin }) => {
  return `${adminName} - ${isAdmin}`;
};

console.log(adminRole(adminData));

// Contoh lain
const peoples = [
  { names: "Chris", age: 23, city: "New York" },
  { names: "Emily", age: 19, city: "Atlanta" },
  { names: "Joe", age: 32, city: "New York" },
  { names: "Kevin", age: 19, city: "Atlanta" },
  { names: "Michelle", age: 27, city: "Los Angeles" },
  { names: "Robert", age: 45, city: "Manhattan" },
  { names: "Sarah", age: 31, city: "New York" },
];

const people = peoples.map(({ names, age, city }) => {
  return `${names} is ${age} years old & lived in ${city}`;
});

console.log(people);
