window.onload = function()
{
    window.filas = 0;
    document.getElementById("Trabajador").addEventListener("change", autollenar);
    document.getElementById("Trabajador").addEventListener("change", calcular_extras);

    //mostrar
    document.getElementById("DiurnasSi").onclick = mostrar;
    document.getElementById("NocturnasSi").onclick = mostrar;
    document.getElementById("DominicalesSi").onclick = mostrar;
    document.getElementById("FestivosSi").onclick = mostrar;
    //ocultar
    document.getElementById("DiurnasNo").onclick = ocultar;
    document.getElementById("NocturnasNo").onclick = ocultar;
    document.getElementById("DominicalesNo").onclick = ocultar;
    document.getElementById("FestivosNo").onclick = ocultar;

    //inputs horas
    document.getElementById("NumDiurnas").onkeyup = calcular_extras;
    document.getElementById("NumNocturnas").onkeyup = calcular_extras;
    document.getElementById("NumDominicales").onkeyup = calcular_extras;
    document.getElementById("NumFestivos").onkeyup = calcular_extras;

    //boton Agregar
    document.getElementById("Agregar").onclick = agregar;

    var Monetaries = document.getElementsByClassName("Monetary");
    for (var i=0; i<Monetaries.length; i++)
    {
        Monetaries[i].onkeyup = MonetaryFormat;
    }
}

function autollenar ()
{
    var trabajadores = [
        {id:"01", nombre: "Juan", sueldo: 1000000},
        {id:"02", nombre: "Pedro", sueldo: 1500000},
        {id:"03", nombre: "Lolo", sueldo: 2000000},
    ];

    var trabajador = document.getElementById("Trabajador").value;
    var sueldo = document.getElementById("Sueldo");

    for (var i = 0; i < trabajadores.length; i++)
    {
        if(trabajador===trabajadores[i].id)
        {
            sueldo.setAttribute ("value", TextToMonetary(trabajadores[i].sueldo));
            break;
        }
    }

    if(trabajador==="")
    {
      sueldo.setAttribute ("value", "");
    }
}

function mostrar ()
{
    if(String(this.id).startsWith("Diurnas"))
    {
        document.getElementById("NumDiurnas").style.display = "inline-block";
        document.getElementById("ValorDiurnas").style.display = "inline-block";
    }

    if(String(this.id).startsWith("Nocturnas"))
    {
        document.getElementById("NumNocturnas").style.display = "inline-block";
        document.getElementById("ValorNocturnas").style.display = "inline-block";
    }

    if(String(this.id).startsWith("Dominicales"))
    {
        document.getElementById("NumDominicales").style.display = "inline-block";
        document.getElementById("ValorDominicales").style.display = "inline-block";
    }

    if(String(this.id).startsWith("Festivos"))
    {
        document.getElementById("NumFestivos").style.display = "inline-block";
        document.getElementById("ValorFestivos").style.display = "inline-block";
    }

    mostrar_ocultar_agregar ();
}

function ocultar ()
{
    var element = null;
    if(String(this.id).startsWith("Diurnas"))
    {
        element = document.getElementById("NumDiurnas");
        element.style.display = "none";
        element.value = "";

        element = document.getElementById("ValorDiurnas");
        element.style.display = "none";
        element.textContent = "$";
    }

    if(String(this.id).startsWith("Nocturnas"))
    {
        element = document.getElementById("NumNocturnas");
        element.style.display = "none";
        element.value = "";

        element = document.getElementById("ValorNocturnas");
        element.style.display = "none";
        element.textContent = "$";
    }

    if(String(this.id).startsWith("Dominicales"))
    {
        element = document.getElementById("NumDominicales");
        element.style.display = "none";
        element.value = "";

        element = document.getElementById("ValorDominicales");
        element.style.display = "none";
        element.textContent = "$";
    }

    if(String(this.id).startsWith("Festivos"))
    {
        element = document.getElementById("NumFestivos");
        element.style.display = "none";
        element.value = "";

        element = document.getElementById("ValorFestivos");
        element.style.display = "none";
        element.textContent = "$";
    }

    mostrar_ocultar_agregar ();
}

function mostrar_ocultar_agregar ()
{
    var inputs = [
        document.getElementById("NumDiurnas"),
        document.getElementById("NumNocturnas"),
        document.getElementById("NumDominicales"),
        document.getElementById("NumFestivos")
    ];

    for (var i=0; i < inputs.length; i++)
    {
        if (inputs[i].style.display === "inline-block")
        {
            document.getElementById("Agregar").style.display = "inline-block";
            return;
        }
    }

    document.getElementById("Agregar").style.display = "none";
}


function calcular_extras ()
{
    var basico = Math.round(Number(MonetaryToText(document.getElementById("Sueldo").value))/240);
    var extras = 0;
    if(String(this.id).endsWith("Diurnas"))
    {
        var extras = Number(document.getElementById("NumDiurnas").value);
        document.getElementById("ValorDiurnas").textContent = TextToMonetary(Math.round(extras*(basico*0.25)));
    }

    if(String(this.id).endsWith("Nocturnas"))
    {
        var extras = Number(document.getElementById("NumNocturnas").value);
        document.getElementById("ValorNocturnas").textContent = TextToMonetary(Math.round(extras*(basico*0.75)));
    }

    if(String(this.id).endsWith("Dominicales"))
    {
        var extras = Number(document.getElementById("NumDominicales").value);
        document.getElementById("ValorDominicales").textContent = TextToMonetary(Math.round(extras*(basico)));
    }

    if(String(this.id).endsWith("Festivos"))
    {
        var extras = Number(document.getElementById("NumFestivos").value);
        document.getElementById("ValorFestivos").textContent = TextToMonetary(Math.round(extras*(basico*1.5)));
    }

    if (String(this.id)==="Trabajador")
    {
        var extras = Number(document.getElementById("NumDiurnas").value);
        document.getElementById("ValorDiurnas").textContent = TextToMonetary(Math.round(extras*(basico*0.25)));

        var extras = Number(document.getElementById("NumNocturnas").value);
        document.getElementById("ValorNocturnas").textContent = TextToMonetary(Math.round(extras*(basico*0.75)));

        var extras = Number(document.getElementById("NumDominicales").value);
        document.getElementById("ValorDominicales").textContent = TextToMonetary(Math.round(extras*(basico)));

        var extras = Number(document.getElementById("NumFestivos").value);
        document.getElementById("ValorFestivos").textContent = TextToMonetary(Math.round(extras*(basico*1.5)));
    }
}

function agregar ()
{
    var Trabajador = document.getElementById("Trabajador").value;
    var trabajadores = [
        {id:"01", nombre: "Juan", sueldo: 1000000},
        {id:"02", nombre: "Pedro", sueldo: 1500000},
        {id:"03", nombre: "Lolo", sueldo: 2000000},
    ];

    for (var i=0; i<trabajadores.length; i++)
    {
        if (Trabajador===trabajadores[i].id)
        {
            Trabajador = trabajadores[i].nombre;
            break;
        }
    }

    var fila_actual = document.getElementById("fila_%s0".replace("%s0", Trabajador));
    if (fila_actual !== null)
    {
        document.getElementById("detalles").removeChild(fila_actual);
    }


    var Basico = Number(MonetaryToText(document.getElementById("Sueldo").value));
    var Diurnas = Number(MonetaryToText(document.getElementById("ValorDiurnas").textContent));
    var Nocturnas = Number(MonetaryToText(document.getElementById("ValorNocturnas").textContent));
    var Dominicales = Number(MonetaryToText(document.getElementById("ValorDominicales").textContent));
    var Festivos = Number(MonetaryToText(document.getElementById("ValorFestivos").textContent));
    var totalrecargos = Diurnas+Nocturnas+Dominicales+Festivos;

    var fila = document.createElement ("div");
    fila.setAttribute ("id", "fila_"+Trabajador);
    fila.setAttribute ("class", "row fila");

    var trabajador = document.createElement ("div");
    trabajador.setAttribute ("class", "cell md-2 coll");
    trabajador.setAttribute ("id", "fila_%s0".replace ("%s0", Trabajador));
    trabajador.style.textAlign = "center";
    trabajador.innerHTML = "<span>%s0</span>".replace("%s0", Trabajador);

    fila.appendChild (trabajador);

    var basico = document.createElement ("div");
    basico.setAttribute ("class", "cell md-2 coll");
    basico.style.textAlign = "right";
    basico.innerHTML = "<span>%s0</span>".replace("%s0", TextToMonetary(Basico));

    fila.appendChild (basico);

    var recargo = document.createElement ("div");
    recargo.setAttribute ("class", "cell md-3 coll");
    recargo.style.textAlign = "right";
    recargo.innerHTML = "<span>%s0, %s1, %s2, %s3</span>"
        .replace("%s0", TextToMonetary(Diurnas))
        .replace("%s1", TextToMonetary(Nocturnas))
        .replace("%s2", TextToMonetary(Dominicales))
        .replace("%s3", TextToMonetary(Festivos));

    fila.appendChild (recargo);

    var total_recargos = document.createElement ("div");
    total_recargos.setAttribute ("class", "cell md-2 coll");
    total_recargos.style.textAlign = "right";
    total_recargos.innerHTML = "<span>%s0</span>".replace("%s0", TextToMonetary(totalrecargos));

    fila.appendChild (total_recargos);

    var totales = document.createElement ("div");
    totales.setAttribute ("class", "cell md-2 coll");
    totales.style.textAlign = "right";
    totales.innerHTML = "<span class=\"subtotal\">%s0</span>".replace("%s0", TextToMonetary(Basico+totalrecargos));

    fila.appendChild (totales);

    var eliminar = document.createElement ("div");
    eliminar.setAttribute ("class", "cell md-1 coll");
    eliminar.style.height = "22px";
    eliminar.style.textAlign = "center";

    var img = document.createElement ("img");
    img.setAttribute ("id",  "eliminar_"+Trabajador);
    img.setAttribute ("src", "./imagenes/appbar.section.collapse.svg");
    img.style.width = "16px";
    img.style.marginTop = "3px";
    img.addEventListener ("click", eliminar_fila);

    eliminar.appendChild (img);

    fila.appendChild (eliminar);

    document.getElementById("detalles").appendChild (fila);

    calcular_total ();

    reset ();
}

function eliminar_fila ()
{
    document.getElementById("detalles").removeChild(document.getElementById("fila_"+(this.id.split("_")[1])));
    calcular_total ();
}

function calcular_total ()
{
    var subtotales = document.getElementsByClassName ("subtotal");
    var total = 0;

    for (var i = 0; i < subtotales.length; i++)
    {
        total += Number(MonetaryToText(subtotales[i].textContent));
    }

    document.getElementById("grantotal").textContent = TextToMonetary(total);
}

function reset ()
{
    document.getElementById("Trabajador").selectedIndex=0;
    document.getElementById("Sueldo").setAttribute ("value", "");

    var radios = [
        document.getElementById("DiurnasSi"),
        document.getElementById("NocturnasSi"),
        document.getElementById("DominicalesSi"),
        document.getElementById("FestivosSi")
    ];

    for (var i=0; i<radios.length; i++)
    {
        radios[i].checked = false;
    }

    var inputs = [
        document.getElementById("NumDiurnas"),
        document.getElementById("NumNocturnas"),
        document.getElementById("NumDominicales"),
        document.getElementById("NumFestivos")
    ];

    for (var i=0; i<inputs.length; i++)
    {
        inputs[i].style.display = "none";
        inputs[i].value = "";
    }

    var spans = [
        document.getElementById("ValorDiurnas"),
        document.getElementById("ValorNocturnas"),
        document.getElementById("ValorDominicales"),
        document.getElementById("ValorFestivos")
    ];

    for (var i=0; i<spans.length; i++)
    {
        spans[i].style.display = "none";
        spans[i].textContent = "$";
    }

    document.getElementById("Agregar").style.display = "none";
}