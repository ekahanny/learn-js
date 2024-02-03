// PROMISE STATIC METHOD

// // promise all -> jika tdk ada error, akan dikembalikan nilainya dalam array baru
// const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000))
// const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000))
// const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000))

// Promise.all([promise1, promise2, promise3]).then((values) => console.log(values))

// // promise all -> jika ada error, hanya akan mengembalikan nilai error
// const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000))
// const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 2000))
// const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000))

// Promise.all([promise1, promise2, promise3])
// .then((values) => console.log(values))
// .catch((err) => err.message)

// Promise race -> mengembalikan value tercepat (baik resolved ataupun rejected)
// const promise1 = new Promise((resolve) => setTimeout(() => resolve('a'), 2000))
// const promise2 = new Promise((resolve) => setTimeout(() => resolve('b'), 1000))
// const promise3 = new Promise((resolve) => setTimeout(() => resolve('c'), 3000))

// Promise.race([promise1, promise2, promise3]).then((values) => console.log(values))

// promise allsettled
// const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000))
// const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups!')), 2000))
// const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000))

// Promise.allSettled([promise1, promise2, promise3])
// .then((values) => console.log(values))
// .catch((error) => console.log(error.message))

// promise any -> mengembalikan value tercepat yang resolved
const promise1 = new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000))
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups!')), 2000))
const promise3 = new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000))


Promise.any([promise1, promise2])
.then((resolve) => console.log(resolve))
.catch((error) => console.log(error.message))