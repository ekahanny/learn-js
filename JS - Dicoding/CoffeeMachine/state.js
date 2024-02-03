const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
  }

const isCoffeeMachineReady = true;

   
// export dengan Node.js
// module.exports = {coffeeStock, isCoffeeMachineReady};

// export dengan ES6
// export default coffeeStock; -> hanya satu yang diexport
export {coffeeStock, isCoffeeMachineReady}

