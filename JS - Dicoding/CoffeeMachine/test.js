// Case 1 
// const json = '{ bad json }';
 
// try {
//   const user = JSON.parse(json);
 
//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

// class ValidationError extends Error{
//   constructor(message){
//     super(message);
//       this.name = ValidationError;
//   }
// }

// // Case 2 - name is undefined
// const json = '{ "name" : "Eka Hanny", "gender" : "Females"}'

// try {
//   const user = JSON.parse(json);
  
//   // errorCode;

//   if (!user.name) {
//     throw new ValidationError("'name' is required!")
//   }

//   if (!user.age){
//     throw new ValidationError("'age' is required!")
//   }

//   if (!user.gender){
//     throw new ValidationError("'gender' is required!")
//   }

//   console.log(user.name);
//   console.log(user.age);
//   console.log(user.gender);

// } catch (error) {
//   if (error instanceof SyntaxError) {
//     console.log(`JSON Error : ${error.message}`)
//   } else if(error instanceof ReferenceError){
//     console.log(error.message)
//   } else if(error instanceof ValidationError){
//     console.log(`Invalid data : ${error.message}`)
//   } else {
//     console.log(error.stack)
//   }
  
// }

// TODO 1
class ValidationError extends Error{
  constructor(message){
    super(message);
      this.name = ValidationError;
  }
}

// TODO 2
const validateNumberInput = (a, b, c) => {
	
  if (typeof a !== 'number'){
    throw new ValidationError('Argumen pertama harus number');
  }
  	
  if (typeof b !== 'number'){
    throw new ValidationError('Argumen kedua harus number');
  }
  
  if (typeof c !== 'number'){
    throw new ValidationError('Argumen ketiga harus number');
  }

}

const detectTriangle = (a, b, c) => {
  // TODO 3
  
  try{
    validateNumberInput(a, b, c)
  } catch(error) {
    return error.message;
  }

  if (a === b && b === c) {
    return 'Segitiga sama sisi';
  }

  if (a === b || a === c || b === c) {
    return 'Segitiga sama kaki';
  }


  return 'Segitiga sembarang';

};



console.log(detectTriangle(1, false, 1));
console.log(detectTriangle('a', 3, 5));
console.log(detectTriangle(12, 2, null));
console.log(detectTriangle(1, 1, 1));
console.log(detectTriangle(4, 4, 2));
console.log(detectTriangle(3, 4, 6));




