console.log("el script esta cargando");
// Seleccionamos el botón usando el ID que le pusimos en el HTML
const boton = document.getElementById('miboton');

// Le decimos que "escuche" cuando alguien haga clic
boton.addEventListener('mouseover', function() {
boton.style.backgroundColor="blue"
boton.style.opacity =0.3

});

boton.addEventListener('mouseout', function() {
boton.style.backgroundColor="red"
boton.style.opacity =1.0
});
