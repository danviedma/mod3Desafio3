
var colorSeleccionado = "white";

function cambiarColor(color){
    colorSeleccionado = color;
    document.getElementById("key").style.backgroundColor = colorSeleccionado;
}

document.addEventListener('keydown', function (event) { 
    if (event.key === 'a') {
        cambiarColor("pink");
    }else if (event.key === 's') {
        cambiarColor("orange");
    }else if (event.key === 'd') {
        cambiarColor("lightblue");
    }
})

function crearDiv(color){
    let div = document.createElement("div");

    div.style.width = "200px";
    div.style.height = "200px";
    div.style.backgroundColor = color;
    div.style.margin = "10px";
    div.style.border = "1px solid black";
    div.style.display = "inline-block";

    document.body.appendChild(div);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'q') {
        crearDiv("purple");
    }else if (event.key === 'w') {
        crearDiv("grey");
    }else if (event.key === 'e') {
        crearDiv("brown");
    }   
} )