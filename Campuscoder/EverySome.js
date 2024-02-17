// EVERY

/*
mengembalikan nilai true ketika 
SELURUH nilai yang ada pada suatu 
array memiliki kriteria yang sama 
*/

const kata = ["kita", "kamu", "saya", "aku"];
kata.every((kata) => {
  return kata.length === 4;
});
console.log(kata); // ['kita', 'kamu', 'saya', 'aku'] -> tdk disimpan dlm variabel

const isKata = kata.every((kata) => kata.length === 4);
console.log(isKata); // false -> tdk semua terdiri dari 4 karakter

const examScore = [80, 90, 95, 85, 77, 99];
const isGraduate = examScore.every((score) => score >= 75);
console.log(isGraduate); // true

// SOME

/*
mengembalikan nilai true ketika
SALAH SATU nilai yang ada pada
suatu array memenuhi kriteria
*/

const people = [
  { name: "Chris", age: 23, city: "New York" },
  { name: "Emily", age: 19, city: "Atlanta" },
  { name: "Joe", age: 32, city: "New York" },
  { name: "Kevin", age: 19, city: "Atlanta" },
  { name: "Michelle", age: 27, city: "Los Angeles" },
  { name: "Robert", age: 45, city: "Manhattan" },
  { name: "Sarah", age: 31, city: "New York" },
];

const isLegal = people.some((peoples) => peoples.age >= 20);
console.log(isLegal); // true
