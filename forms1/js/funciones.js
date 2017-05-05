window.onload = function()
{
    document.getElementById("sexo").onchange = calculaSexo;
    document.getElementById("edad").onchange = calculaEdad;
}

function calculaEdad ()
{
    var sexo = document.getElementById("sexo").value;
    var edad = document.getElementById("edad").value;

    if (sexo!=="" && edad>=18)
    {
        document.getElementById("mensaje").textContent = "Mayor";
    }
    if (sexo!=="" && edad<18)
    {
        document.getElementById("mensaje").textContent = "Menor";
    }
    if (sexo==="f" && edad>=62)
    {
        document.getElementById("mensaje").textContent = "Adulto mayor";
    }
    if (sexo==="m" && edad<65)
    {
        document.getElementById("mensaje").textContent = "Mayor";
    }
    if (sexo==="m" && edad>=65)
    {
        document.getElementById("mensaje").textContent = "Adulto mayor";
    }
    if (sexo==="" || edad==="")
    {
        document.getElementById("mensaje").textContent = "";
    }
}

function calculaSexo ()
{
    var sexo = document.getElementById("sexo").value;
    var edad = document.getElementById("edad").value;

    if (sexo!=="" && edad>=18)
    {
        document.getElementById("mensaje").textContent = "Mayor";
    }
    if (sexo!=="" && edad<18)
    {
        document.getElementById("mensaje").textContent = "Menor";
    }
    if (sexo==="f" && edad>=62)
    {
        document.getElementById("mensaje").textContent = "Adulto mayor";
    }
    if (sexo==="m" && edad<65)
    {
        document.getElementById("mensaje").textContent = "Mayor";
    }
    if (sexo==="m" && edad>=65)
    {
        document.getElementById("mensaje").textContent = "Adulto mayor";
    }
    if (sexo==="" || edad==="")
    {
        document.getElementById("mensaje").textContent = "";
    }
}