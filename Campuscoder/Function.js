// Function Expression
const hasilPerpangkatan = function (nilai) {
  return nilai * nilai;
};

hasilPerpangkatan();

// Arrow Function
const perpangkatan = (nilai) => {
  return nilai * nilai;
};

console.log(perpangkatan(5));

// Simple Function or Implisit Return
const add = (a, b) => a + b;
console.log(add(5, 10));

const random = () => Math.floor(Math.random() * 1000);
console.log(random);
