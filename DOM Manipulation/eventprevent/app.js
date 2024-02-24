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
const lis = document.querySelectorAll("li");

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

// EVENT DELEGATION
/*

Event yang mewakili sebuah element
yang dikenai eventlistener, namun
yang dieksekusi adalah elemen yang lain

*/

/*
Jika menggunakan kode yg dikomen ini,
maka hanya bisa menghapus list yang
ditulis di html saja.. tidak bisa menghapus
list yang ditambahkan oleh user

*/

// for (let li of lis) {
//   li.addEventListener("click", function () {
//     li.remove();
//   });
// }

/*
Untuk mengatasi hal tersebut,
kita gunakan event delegation
untuk menetapkan target yang
mana yg akan dihapus (hanya
akan menghapus list yg diklik)
*/
notes.addEventListener("click", (e) => {
  e.target.nodeName === "LI" && e.target.remove();
});
