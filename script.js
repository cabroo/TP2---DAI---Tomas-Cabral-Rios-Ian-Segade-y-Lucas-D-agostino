function iniciarJuego()
{
    var numeroR = Math.floor(Math.random() * 100) + 1
    var intentos = 0
    
}

function comprobar()
{
    intentos++;
    const numeroI = document.getElementById("NumI").value
    if(numeroI < 1 || numeroI > 100)
    {
        alert("Por favor ingrese un número del 1 al 100");
    }
    
    else
    {
        if(numeroR == numeroI)
        {
            alert("Ganaste!");
        }
        else if(numeroI > numeroR)
        {
            if(numeroI - numeroR > 40)
            {
                alert("El numero que ingresaste es mucho mayor");
            }
            else if (numeroI - numeroR > 20)
            {
                alert("El numero que ingresaste es mayor");
            }
            else
            {
                alert("El numero que ingresaste es un poco mayor");
            }
        }
        else
        {
            if(numeroR - numeroI > 40)
            {
                alert("El numero que ingresaste es mucho menor");
            }
            else if (numeroR - numeroI > 20)
            {
                alert("El numero que ingresaste es menor");
            }
            else
            {
                alert("El numero que ingresaste es un poco mnenor");
            }
        }
        document.getElementById("contador").innerHTML = ("Intentos: " + intentos)
    }
}
