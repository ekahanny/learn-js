// EVENT
/*
Menindaklanjuti inputan
atau perintah dari user
*/

const button = document.querySelector("button");
button.addEventListener("click", (event) => {
  console.log(event);
});

const input = document.querySelector("input");

// * Mendapatkan object dari keyboard/mouse

// keydown -> dijalankan ketika menekan tombol apapun
input.addEventListener("keydown", () => {
  console.log("Tombol ditekan");
});

// keyup -> dijalankan ketika melepas tombol
input.addEventListener("keyup", () => {
  console.log("Tombol dilepas");
});

// * Mendapatkan object dari input
input.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      console.log("Tombol Arah Atas");
      break;
    case "ArrowDown":
      console.log("Tombol Arah Bawah");
      break;
    case "ArrowLeft":
      console.log("Tombol Arah Kiri");
      break;
    case "ArrowRight":
      console.log("Tombol Arah Kanan");
      break;
    default:
      console.log("Tidak Tersedia");
      break;
  }
});
