// Inicializar la variable para el # de intentos
let intentos = 0;

function checkGuess(){

    // Verificar si se han alcanzado los 3 intentos
    if(intentos >= 3) {
        Swal.fire({
            icon: 'info',
            title: 'Fin de intentos',
            text: 'Has agotado tus 3 intentos. El número adivinar era ' + numeroAleatorio + '.'
        });

        // Reiniciar el numero de intentos
        intentos = 0;
        return;
    }
    // Incrementamos el número de intentos
    intentos++;
    // Generar un número aleatorio entre 1 y 10
    numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    console.log(numeroAleatorio);
    
    // Obtener el valor ingresado por el usuario
    const numeroaAdivinar = parseInt(document.getElementById("guess").value);

    // Selecciona el input por su id
    var input = document.getElementById("guess");

    // Limpia el valor del input
    input.value = "";


    // Comprobar si el número ingresado es igual al numero aleatorio
    if(numeroaAdivinar === numeroAleatorio) {
        Swal.fire({
            icon: 'success',
            title: 'Felicidades',
            text: `Adivinaste el número en ${intentos} intentos.`
        });
        // Reiniciar el contador de intentos
        intentos = 0;
    } else {
        let mensaje = "No adivinaste el número.";
        // Comprobar si el número adivinar es mayor o menor al numero que se genero aleatoriamente
        if(numeroaAdivinar > numeroAleatorio) {
            mensaje += " El número a adivinar es menor"
        } else {
            mensaje += " El número a adivinar es mayor"
        }
        Swal.fire({
            icon: 'error',
            title: '¡Oops!',
            text: `${mensaje} Llevas ${intentos} de 3 permitidos, perdiste !!`
        });
    }
}