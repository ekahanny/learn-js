// Request dengan XMLHttpRequest
const req = new XMLHttpRequest();
let data;

req.onload = function () {
  data = JSON.parse(this.response);
  console.log(data);
};

req.onerror = function () {
  console.log("Error", this);
};

req.open("GET", "https://swapi.dev/api/people/1");
req.send();

// Request dengan Fetch
fetch("https://swapi.dev/api/people/1")
  .then((res) => {
    if (!res.ok) {
      throw Error("Could not fetch the data for the resource");
    }
    console.log(res);
    return res.json(); //response dari then pertama tidak semuanya digunakan, makanya diubah menjadi json
  })
  .then((data) => {
    console.log("json", data); //menampilkan response dalam bentuk json dari then sebelumnya
  })
  .catch((err) => {
    console.log("error", err);
  });

// Request dengan Fetch (Async Await)
const loadPeople = async () => {
  try {
    const res1 = await fetch("https://swapi.dev/api/people/1");
    const data1 = await res1.json();
    console.log(data1);
    const res2 = await fetch("https://swapi.dev/api/people/2");
    const data2 = await res2.json();
    console.log(data2);
  } catch (error) {
    console.log("Error: ", error);
  }
};

loadPeople();
