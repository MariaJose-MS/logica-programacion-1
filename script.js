const prompt = require("prompt-sync")();

//Ingreso de datos del usuario
let num1 = parseInt(prompt("Ingresa un 1er número: "));
let num2 = parseInt(prompt("Ingresa un 2do número: "));
let num3 = parseInt(prompt("Ingresa un 3er número: "));

//Si los tres números son iguales
if (num1 === num2 && num2 === num3) {
   console.log("Los números son iguales: " + num1 + ", " + num2 + ", " + num3)
} else {
   // De lo contrario, guardamos los números en un array
   let numbers = [num1, num2, num3]

   // Ordenamos de menor a mayor
   numbers.sort((a, b) => a - b);
    
   // Imprimimos el array de menor a mayor
   console.log("Ordenados de menor a mayor: " + numbers.join(", "));
   
   // Ordenamos de mayor a menor
   numbers.sort((a, b) => b - a);
   
   // Imprimimos el array de mayor a menor
   console.log("Ordenados de mayor a menor: " + numbers.join(", "));
}