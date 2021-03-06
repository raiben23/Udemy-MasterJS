'use strict'


// Añadimos EventListener para que el script se ejecute cuando cargue la pagina
window.addEventListener('load', function(){
    console.log("DOM Cargado.");

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function(){
        
        console.log("Evento submit capturado");
        
        var nombre = document.querySelector("#Nombre").value;
        var apellido = document.querySelector("#Apellidos").value;
        var edad = document.querySelector("#Edad").value;

        box_dashed.style.display = "block";

        var datos_usuario = [nombre, apellido, edad]

        for (var i in datos_usuario) {
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[i]);
            box_dashed.append(parrafo)

        }

        console.log(nombre,apellido,edad);

    });

});