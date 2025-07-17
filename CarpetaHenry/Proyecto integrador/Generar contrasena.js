function longitudCheck(longitud) {
    if (longitud === "") {
        return "debe ingresar la longitud";
    }
    if (typeof longitud !== "string") {
        return "La longitud recibida no es valida";
    }
    if (longitud < 3) {
        return "La longitud debe ser mayor o igual a 3"
    }
    if (longitud > 10) {
        return "La longitud debe ser menor o igual a 10"
    }
    return longitud
   
}

function generarContrasena(longitud, caracteresEspeciales, Numeros, Mayusculas, Minusculas)
{
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "1234567890";
    const especiales = "!@#$%^&*().,:;";
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let caracteresAsociados = minusculas

    if (caracteresEspeciales === true) {
        caracteresasociados += especiales;

    }
    if (Numeros === true) {
        caracteresasociados += numeros;

    }
    if (Mayusculas === true) {
        caracteresasociados += mayusculas;

    }
    let contrasena = "";

    for ( let i = 0; i <longitud; i++) {
        const resultado = caracteresAsociados.charAt(
            Math.floor(Math.random() * caracteresAsociados.length)
        );
        contrasena += resultado;
    }


    return contrasena;



}