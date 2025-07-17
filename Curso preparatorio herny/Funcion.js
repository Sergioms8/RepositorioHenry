function sumatres(x) {
    console.log(x + 3);
}
sumatres(5);

// Primero
function sumaTres(x) {
    return x + 3;
}

//Segundo

var sumaTres = function (x) {
    return x = 3;
}

//Tercero

var sumaTres = (x) => {
    return x + 3;
}

// Console.log: Nos permite visualizar el valor de una variable 
// o el valor que devuelve una linea de codigo

var animal = "Caballo"
console.log(animal);

// Return: Palabra reservada fundamental para toda funcion ya que 
// es la instruccion que va a indicar que valor nos debe devolver

function cuidadoconelconsolelog(nombre) {
    console.log(nombre);
    return nombre
}
function otrafuncion() {
    return (
        "el nombre retornado por la funcion 'ciudadoconelconsolelog' es: " +
         cuidadoconelconsolelog('Sergio')
    );
}
function cuidadoconelreturn(nombre) {
        return nombre
        console.log(nombre);
}


//nomeclatura

//camelCase
//holaMundo / funcionEdadAños

//PascalCase
// HolaMundo / FuncionEdadAños

//snake_case
//hola_mundo / funcion_edad_años