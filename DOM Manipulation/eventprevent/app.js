// EVENT PREVENT

/*

Mencegah behaviour default/kebiasaan 
dari suatu elemen. Contohnya, pada form
digunakan agar halaman tidak berpindah
ketika meng-klik tombol submit, namun
proses pada form tersebut tetap berjalan.

Sangat berguna ketika ingin mengambil data
tanpa perlu memuat ulang lamannya, melainkan
langsung memunculkan data pada elemen yang
diperlukan.

*/

const form = document.querySelector("form");
const input = document.querySelector("input");
const notes = document.querySelector("#notes");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const noteVal = input.value;
  const newList = document.createElement("li");
  newList.innerText = noteVal;
  notes.appendChild(newList);
  input.value = "";
});

// EVENT CHANGE
/*
Akan berubah ketika kita menjalankan
perubahan pada bagian input 
*/
input.addEventListener("change", (e) => {
  console.log("Nilai Berubah");
});

// EVENT INPUT
/*
Akan berubah ketika kita mengetikkan
sesuatu pada bagian input
*/
input.addEventListener("input", (e) => {
  console.log("Input berhasil dimasukkan");
  //   document.querySelector("h1").innerText = input.value;
});

// EVENT BUBBLING
/*

*/
