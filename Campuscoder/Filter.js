// FILTER

/*

function yg akan mengembalikan
nilai array yg sudah dimanipulasi
berdasarkan kriteria yang ditetapkan

*/

// Contoh 1
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// membuat array baru yg menampilkan bil genap
const genap = angka.filter((n) => {
  return n % 2 === 0;
});

console.log(angka);
console.log(genap);

const people = [
  { name: "Chris", age: 23, city: "New York" },
  { name: "Emily", age: 19, city: "Atlanta" },
  { name: "Joe", age: 32, city: "New York" },
  { name: "Kevin", age: 19, city: "Atlanta" },
  { name: "Michelle", age: 27, city: "Los Angeles" },
  { name: "Robert", age: 45, city: "Manhattan" },
  { name: "Sarah", age: 31, city: "New York" },
];

// Contoh 2
const underTwenty = people.filter((peoples) => {
  if (peoples.age < 20) {
    return people;
  }
});
console.log(underTwenty);

// Untuk mengambil nama yang umurnya dibawah 20 tahun
const underTwenties = people
  .filter((peoples) => peoples.age < 20)
  .map((peoples) => peoples.name);

console.log(underTwenties);

// Contoh 3 -> Singkat
const newYork = people.filter((peoples) => peoples.city === "New York");
console.log(newYork);
