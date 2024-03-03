// Request

/*

Request sering disebut AJAX (Axios, JS, and XML) 
berfungsi untuk mengambil data dari sisi programming
(bukan inputan user). 

*/

// API -> Application Programming Interface
const data1 = `{
    "ticker" : {
        "base": "BTC",
        "target" : "IDR",
        "price" : "345001000.00000000",
        "volume" : "28.02287745",
        "change" : "-430000.00000000"
    },
    "timestamp" : 1674472505,
    "success" : true,
    "error" : ""
}`;

// JSON.parse()

/*

Mengubah string JSON menjadi objek JS.
Diubah jika JSON ini didapatkan dari server

*/

const res1 = JSON.parse(data1);
console.log(res1);

const data2 = {
  ticker: {
    base: "BTC",
    target: "IDR",
    price: "345001000.00000000",
    volume: "28.02287745",
    change: "-430000.00000000",
  },
  timestamp: 1674472505,
  success: true,
  error: "",
};

// JSON.stringify()

/*

Mengubah objek JS menjadi string JSON.
Diubah jika ingin mengirim data JSON
ke server.

*/

const res2 = JSON.stringify(data2);
console.log(res2);
