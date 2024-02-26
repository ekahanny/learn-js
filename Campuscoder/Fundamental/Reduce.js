// REDUCE

/*

Melakukan proses sebanyaknya
element milik suatu array. Nilai
return-nya adalah single value

*/

const examScore = [80, 90, 95, 85, 77, 99];
const total = examScore.reduce((initialScore, score) => {
  return initialScore + score;
});
console.log(total);

// Mencari data dengan usia tertua
const people = [
  { name: "Chris", age: 23, city: "New York" },
  { name: "Emily", age: 19, city: "Atlanta" },
  { name: "Joe", age: 32, city: "New York" },
  { name: "Kevin", age: 19, city: "Atlanta" },
  { name: "Michelle", age: 27, city: "Los Angeles" },
  { name: "Robert", age: 45, city: "Manhattan" },
  { name: "Sarah", age: 31, city: "New York" },
];

const oldest = people.reduce((initialAge, oldestAge) => {
  if (oldestAge.age > initialAge.age) {
    return oldestAge;
  }
  return initialAge;
});
console.log(oldest);
