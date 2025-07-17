console.log(4 < 7);
console.log(4 < 1);
console.log(4 > 4);
console.log(4 == 7);

// Solo verifica si es el mismo valor
3 == 3;

// verifica el valor y el tipo de dato
3 === 3;

//Igualdad vs igualdad estricta 
console.log (3 == 3); 
console.log (3 === 3); 
console.log (3 == "3"); 
console.log (3 === "3");
console.log (7 == "7");
console.log (7 === "7");

//asociatividad

var a = 1;
var b = 2;
var c = (a = b);

console.log(a); //2
console.log(b); //2
console.log(c); //2