window.onload = function()
{
    //document.getElementById("trabajador").onchange = autollenar;
    
}

function autollenar ()
{
    var trabajadores = [
        {id:"01", nombre: "Pedro", sueldo: 1000000},
        {id:"01", nombre: "Juan", sueldo: 1500000},
        {id:"01", nombre: "Lolo", sueldo: 2000000},
    ];

    var trabajador = document.getElementById("trabajador").value;
    var precio = document.getElementById("sueldo");

    for (var i = 0; i < trabajadores.length; i++)
    {
        if(trabajador===trabajadores[i].id)
        {
            sueldo.setAttribute ("value", trabajadores[i].sueldo);
            break;
        }
    }    
}
