window.onload = function()
{
    document.getElementById("sumar").onclick = sumar;
    document.getElementById("restar").onclick = restar;
    document.getElementById("multiplicar").onclick = multiplicar;
    document.getElementById("dividir").onclick = dividir;
}

function sumar ()
{
    var numero1 = Number(document.getElementById("numero1").value);
    var numero2 = Number(document.getElementById("numero2").value);
    var resultado = document.getElementById("resultado");

    resultado.setAttribute ("value", numero1+numero2);
    
}

function restar ()
{
    var numero1 = Number(document.getElementById("numero1").value);
    var numero2 = Number(document.getElementById("numero2").value);
    var resultado = document.getElementById("resultado");

    resultado.setAttribute ("value", numero1-numero2);
    
}

function multiplicar ()
{
    var numero1 = Number(document.getElementById("numero1").value);
    var numero2 = Number(document.getElementById("numero2").value);
    var resultado = document.getElementById("resultado");

    resultado.setAttribute ("value", numero1*numero2);
    
}

function dividir ()
{
    var numero1 = Number(document.getElementById("numero1").value);
    var numero2 = Number(document.getElementById("numero2").value);
    var resultado = document.getElementById("resultado");

    resultado.setAttribute ("value", numero1/numero2);
    
}
