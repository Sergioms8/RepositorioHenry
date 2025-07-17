//OPERADORES CONDICIONALES
// Permiten que se cumplan unas u otras instrucciones dependiendo de alguna condicion.

function viajar (destino) {
    if (destino === "brazil") {
        console.log("gire a la Izquierda")
    } else if (destino === "argentina") {
        console.log("gire a la Derecha")
    } else {
        console.log('nos perdimos')
    }
} 
viajar("prueba")

function puedeManejar (edad){
    if(edad >= 18) {
        console.log(true)
    }   else {
        console.log(false)
    }
}
puedeManejar("25")