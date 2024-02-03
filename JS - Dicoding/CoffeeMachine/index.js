// import dengan Node.js
// const {coffeeStock, isCoffeeMachineReady} = require('./state');

// import dengan ES6
import { coffeeStock, isCoffeeMachineReady } from './state.js';


const makeCoffee = (type, miligrams) => {
   if (coffeeStock[type] >= miligrams) {
     console.log("Kopi berhasil dibuat!");
   } else {
     console.log("Biji kopi habis!");
   }
}
 
makeCoffee("robusta", 80);
 
/* output
Kopi berhasil dibuat!
*/

console.log(coffeeStock);
console.log(isCoffeeMachineReady);