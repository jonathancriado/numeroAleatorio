let numAleatorio = Math.round(Math.random()*100);
let miNum;
let intentos = 0;

let mensaje = document.getElementById("c_mensaje");
let numIntentos = document.getElementById("c_numIntentos");

alert("Se ha creado un numero aleatorio, descubrelo.")
// QUIERO QUE VAYA IMPRIMIENDO ADENTRO DE LOS INPUTS EL MENSAJE CORRESPONDIENTE, PERO SOLAMENTE ME PIDE EL NUMERO ENTRE 0 Y 100 
do {
    miNum = prompt("Introduce un numero entre 0 y 100");
    if (miNum > numAleatorio) {
        mensaje.value = "El numero aleatorio es menor";
        intentos++;
    } else if (miNum < numAleatorio) {
        mensaje.value = "El numero aleatorio es mayor";
        intentos++;
    } else if (miNum == numAleatorio){
        mensaje.value = "Encontraste el numero aleatorio";
    };
    numIntentos.value = "intento numero " + intentos;
} while (miNum != numAleatorio);

document.getElementById("fin").innerHTML = "Encontraste el numero aleatorio " + numAleatorio + ", en " + intentos + " intentos. Felicidades!!";



/** ESTE FUNCIONA
do {
    miNum = prompt("Introduce un numero entre 0 y 100");
    if (miNum > numAleatorio) {
        alert("El numero aleatorio es menor");
        intentos++;
    } else if (miNum < numAleatorio) {
        alert("El numero aleatorio es mayor");
        intentos++;
    } else if (miNum == numAleatorio){
        alert("ACERTASTE EL NUMERO")
    };
    alert("intento numero " + intentos)
} while (miNum != numAleatorio);

document.getElementById("fin").innerHTML = "Encontraste el numero aleatorio " + numAleatorio + ", en " + intentos + " intentos. Felicidades!!";
*/