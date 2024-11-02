function cambiarColor(element) {
    element.style.backgroundColor = 'black';
}

document.getElementById("azul").addEventListener("click", function() {
    cambiarColor(document.getElementById("azul"));
});

document.getElementById("rojo").addEventListener("click", function() {
    cambiarColor(document.getElementById("rojo"));
});

document.getElementById("verde").addEventListener("click", function() {
    cambiarColor(document.getElementById("verde"));
});

document.getElementById("amarillo").addEventListener("click", function() {
    cambiarColor(document.getElementById("amarillo"));
});

console.log('Script cargado');
