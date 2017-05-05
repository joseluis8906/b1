window.onload = function()
{
    document.getElementById("producto").onchange = autollenar;
    document.getElementById("calcular").onclick = calcular;
}

function calcular ()
{
    var productos = [
        {id:"01", nombre:"pantalon", precio:125000},
        {id:"02", nombre:"camisa", precio:110000},
        {id:"03", nombre:"zapatos", precio:450000},
        {id:"04", nombre:"bolso", precio:320000},
    ];

    var producto = document.getElementById("producto").value;
    var precio = document.getElementById("precio");
    var cantidad = Number(document.getElementById("cantidad").value);
    var iva = document.getElementById("iva").checked;
    var resultado = document.getElementById("resultado");

    for (var i=0; i<productos.length; i++)
    {
        if(producto===productos[i].id)
        {
            precio.setAttribute ("value", productos[i].precio);
            if(iva)
            {
                resultado.setAttribute ("value", (productos[i].precio*0.19)+(productos[i].precio*cantidad));
            }
            else
            {
                resultado.setAttribute ("value", (productos[i].precio*cantidad));
            }
            break;
        }
    }    
}

function autollenar ()
{
    var productos = [
        {id:"01", nombre:"pantalon", precio:125000},
        {id:"02", nombre:"camisa", precio:110000},
        {id:"03", nombre:"zapatos", precio:450000},
        {id:"04", nombre:"bolso", precio:320000},
    ];

    var producto = document.getElementById("producto").value;
    var precio = document.getElementById("precio");

    for (var i=0; i<productos.length; i++)
    {
        if(producto===productos[i].id)
        {
            precio.setAttribute ("value", productos[i].precio);
            break;
        }
    }    
}
