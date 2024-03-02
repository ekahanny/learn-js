// const contohPromise = () => {
//   return new Promise((resolve, reject) => {
//     resolve(() => {
//       // dijalankan jika proses berhasil
//       "Berhasil!";
//     });
//     reject(() => {
//       // dijalankan jika proses gagal
//       "Gagal!";
//     });
//   });
// };

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

delayedColorChange("red", 1000)
  .then(() => delayedColorChange("yellow", 3000))
  .then(() => delayedColorChange("green", 3000))
  .then(() => delayedColorChange("blue", 3000))
  .then(() => delayedColorChange("orange", 3000));
