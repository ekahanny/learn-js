// Async

const { reject } = require("async");

/* 

Fungsi async akan otomatis menjadi promise.
Jika fungsinya punya data, maka resolve akan
mengirim data. Jika didalam fungsi ada object
throw error, maka akan menjalankan reject

*/

const hello = async () => {
  throw "Maaf gak kenal"; // Error -> reject
  //   return "Hello World!"; // Berhasil -> resolve
};

hello()
  .then((res) => {
    console.log("response", res);
  })
  .catch((err) => {
    console.log("error", err);
  });

// Await

/*

Hanya bisa digunakan dalam fungsi dgn async.
Await akan melakukan jeda proses selanjutnya
di dalam function, menunggu promise yang
dijalankan resolve

*/

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

async function changeColor() {
  await delayedColorChange("red", 1000);
  await delayedColorChange("yellow", 1000);
  await delayedColorChange("green", 1000);
  await delayedColorChange("blue", 1000);
  await delayedColorChange("orange", 1000);
  return "All done!";
}

async function printRainbow() {
  await changeColor();
  console.log("All Done! Dari printRainbow");
}

printRainbow();

// changeColor().then((res) => console.log(res));

// Error Handling dengan Async Await
const requestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 2000) {
        reject(`Error: Connection Timeout (${delay}ms)`);
      } else {
        resolve(`Succes: ${url} (${delay}ms)`);
      }
    }, delay);
  });
};

async function requestHandler() {
  try {
    let result = await requestPromise("movie.com");
    console.log(result);
  } catch (error) {
    console.log(error); //tetap dijalankan walaupun connection timeout
  }
}
