// *Mendapatkan elemen HTML berdasarkan id
const banner = document.getElementById("banner");

// *Mendapatkan elemen HTML berdasarkan tag & class

/* 
Akan mengembalikan htmlcollections
yang serupa dengan array (namun bukan)
*/
const catImage = document.getElementsByTagName("img");
const catImg = document.getElementsByClassName("square");
// console.dir(catImage[0]);
// console.dir(catImg[1]);

// *Mengganti semua image kucing agar sama dengan image pertama
for (let image of catImg) {
  image.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg";
}

// Mendapatkan element HTML menggunakan query selector

/*
Jika elemen yang diambil lebih dari satu 
namun hanya menggunakan querySelector,
maka yg akan dikembalikan adalah elemen 
pertama dalam class atau tag name tersebut.
*/
const anotherBanner = document.querySelector("#banner"); //by id
const allImage = document.querySelectorAll(".square"); //by class
const images = document.querySelectorAll("img"); //by tag name

// Untuk mengambil elemen secara spesifik, bisa gunakan tag parentnya
const links = document.querySelectorAll("p a");
for (let link of links) {
  // console.log(link.href);
}

// Contoh Lain
const input = document.querySelector('input[type="checkbox"]');

// *Memanipulasi isi dari elemen HTML

// Innerhtml -> mengambil & mengubah tag html suatu elemen
// Innertext -> mengambil & mengubah isi dari sebuah elemen
// textcontent -> mengambil seluruh elemen html (trmsk html & isinya)

const heading = document.querySelector("h1");
heading.innerHTML = "<h3>Cat</h3>";
heading.innerText = "Cats";
const paragraf = document.querySelector("p");
// paragraf.textContent = "Ubah paragraf";

// *Mendapatkan atribut yang dimiliki elemen html
/*
Jika atribut sudah ada & kita hanya ingin mengganti,
panggil saja atributnya lgsg pada elemen. Namun, jika
atribut belum ada, gunakan setAttributes
*/
banner.alt = "Gambar Kucing"; //sudah ada atribut alt sebelumnya
banner.setAttribute("class", "classBanner"); //menambahkan atribut class baru

// * Melakukan styling dengan DOM

/*
Menggunakan keyword style kemudian
diikuti dengan property dari style,
contohnya seperti berikut ini.
*/

for (let link of links) {
  link.style.color = "red";
  link.style.textDecorationColor = "magenta";
  link.style.textDecorationStyle = "wavy";
}

// *Menggunakan classlist untuk styling
/*
Berguna ketika kita ingin menambahkan lebih
dari satu atribut sehingga atribut yang
ditambahkan tsb tdk ter-override
*/
heading.classList.add("bg-info", "border-danger", "text-white");
heading.classList.remove("text-white");
