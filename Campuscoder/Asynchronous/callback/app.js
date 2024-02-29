/*

Hal ini disebut callback hell
dan sangat dihindari penggunaannya

*/

// callback version -> tidak disarankan
const requestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Error: Connection Timeout");
    } else {
      success(`Success: ${url} (${delay}ms)`);
    }
  }, delay);
};

requestCallback(
  "movie.com",
  function (response) {
    console.log("success", response);
    requestCallback(
      "movie.com",
      function (response) {
        console.log("success", response);
        requestCallback(
          "movie.com",
          function (response) {
            console.log("success", response);
            requestCallback(
              "movie.com",
              function (response) {
                console.log("success", response);
                requestCallback(
                  "movie.com",
                  function (response) {
                    console.log("success", response);
                  },
                  function (error) {
                    console.log("error", error);
                  }
                );
              },
              function (error) {
                console.log("error", error);
              }
            );
          },
          function (error) {
            console.log("error", error);
          }
        );
      },
      function (error) {
        console.log("error", error);
      }
    );
  },
  function (error) {
    console.log("error", error);
  }
);

// Promise

/*

Untuk mengatasi hal diatas, 
kita gunakan promise.

Promise berisi skenario apabila
object berhasil dijalankan atau
tidak berhasil dijalankan. Kemudian
skenario tsb bisa kita isikan proses
lain utk menghandle request yang 
dijalankan.

*/

const requestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Error: Connection Timeout");
      } else {
        resolve(`Success: ${url} (${delay}ms)`);
      }
    }, delay);
  });
};

// jika ada error pada salah satu page, proses berhenti
requestPromise("movie.com")
  .then((result) => {
    console.log("Page 1");
    console.log(result);
    return requestPromise("movie.com");
  })
  .then((result) => {
    console.log("Page 2");
    console.log(result);
    return requestPromise("movie.com");
  })
  .then((result) => {
    console.log("Page 3");
    console.log(result);
    return requestPromise("movie.com");
  })
  .then((result) => {
    console.log("Page 4");
    console.log(result);
    return requestPromise("movie.com");
  })
  .catch((err) => {
    console.log(err);
  });
