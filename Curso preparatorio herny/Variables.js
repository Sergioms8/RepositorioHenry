var cajon;


//Ejemplos de clases de variable//

// String
var bootcamp = 'Henry';

// Números
var numeroEntero = 17;
var numeroNegativo = -4;
var numeroDecimal = 11.75;

// Booleanos
var estoyEntendiendo = true;
var estoyAburrido = false;

// Undefined
var cajon1;
console.log(cajon1);

// Null
var sinNada = null;


//Ejemplo de typeoff//

let nombre = "Juan"; // Cadena
let edad = 25;       // Número
let esActivo = true; // Booleano

console.log(typeof nombre); // "string"
console.log(typeof edad);   // "number"
console.log(typeof esActivo); // "boolean"

    //Ejemplo de charAt()//

    //Sintaxis: cadena.charAt(posicion);

//El parámetro es posicion --> Índice del carácter que quieres obtener (comienza en 0).

//Con ello, retorna el carácter en esa posicion . Si el índice está 
// fuera del rango, retorna una cadena vacía ("").

 let palabra = "HENRY";

// Obtener el primer carácter
console.log(palabra.charAt(0)); // "H"

// Obtener el tercer carácter
console.log(palabra.charAt(2)); // "N"

// Intentar acceder a un índice fuera del rango
console.log(palabra.charAt(10)); // ""   