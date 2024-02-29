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
