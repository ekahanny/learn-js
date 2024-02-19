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
