const leer = require("prompt-sync")();
const RANGO_MINIMO = 3;
const RANGO_MAXIMO = 10;
/*
const NUMERO_A_ADIVINAR = 10;
const RANGO_MAXIMO = 3;*/


/*
for (let i = 0; i < 3; i++) {
    console.log("Ingrese el numero a adivinar:");
    let numeroUsuario = leer();
    if (numeroUsuario == NUMERO_A_ADIVINAR) {
        console.log("El numero es el correcto!");
        i=3;
    }else{   
        console.log("No es el numero");
    }   
}*/
/*
let intentosUsuario = 0;
while (intentosUsuario < RANGO_MAXIMO) {    
    console.log("Ingrese el numero a adivinar:");
    let numeroUsuario = leer();
    if (numeroUsuario == NUMERO_A_ADIVINAR) {
        console.log("El numero es el correcto!");
        break;
    }else{   
        console.log("No es el numero");
        intentosUsuario++;
    }   
    
}
*Crear un juego para adivinar el número secreto generado aleatoriamente en un rango del cero al doble de la cantidad de intentos que desea tener el usuario, considerar que la cantidad mínima de intentos es 3 por ende el rango mínimo del número secreto es de 0 a 6*/

let numeroUsuario = leer();
let cantIntentos = 0;
console.log("Cuantos intentos quieres del 3 al 10?");
cantIntentos = leer();
if (cantIntentos < RANGO_MINIMO) {
    console.log("No es valido, el rango de intentos es de 3 al 10");
} else if (cantIntentos > RANGO_MAXIMO) {
    console.log("No es valido, el rango de intentos es de 3 al 10");
} else {
    let numeroSecreto = Math.floor(Math.random() * (cantIntentos * 2)) + 1;
    console.log("El numero secreto es: ", numeroSecreto);
    for (let i = 0; i < cantIntentos; i++) {
        console.log("Ingrese el numero a adivinar:");
        numeroUsuario = leer();
        if (numeroUsuario == numeroSecreto) {
            console.log("El numero es el correcto!");
            break;
        } else {
            console.log("No es el numero");
        }
    }
}
