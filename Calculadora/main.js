//Seleciona el elemento html con la clase pantalla y lo asigna en la variable pantalla
const pantalla = document.querySelector(".pantalla"); //
const botones = document.querySelectorAll(".botones"); //Seleciona todo en la clase botones y lo guarda en variable botones

//realiza iteración en cada elemento o boton en la lista de botones
botones.forEach(boton => {
    boton.addEventListener("click", () => { //Agrega un evento click
        //console.log(botones.textContent);
        //Obtener texto de cada boton y se guardara en una variable 
        const botonApretado = boton.textContent;

        if (boton.id === "c") { //
            pantalla.textContent = "0";
            return; //Se retorna la función
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "error") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1); //slice extrae una porcion de la cadena de texto (indice negativo hace que se cuente de la final de la cadena hacia atras)
            }
            return;
        }
        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
                return;
            } catch {
                pantalla.textContent = "error";
            }
            return
        }
        if (pantalla.textContent === "0" || pantalla.textContent === "error") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }


    })
})














/*   Un NodeList es un tipo de objeto en JavaScript que representa una colección de nodos. Un nodo en este contexto se refiere a un elemento HTML en el DOM (Document Object Model).

Cuando utilizamos métodos como querySelectorAll() para seleccionar elementos en el DOM, el resultado es un NodeList. Aunque se asemeja a un array, no es un array en sí mismo, ya que no tiene todos los métodos y propiedades que normalmente se encuentran en un array. Sin embargo, comparte algunas similitudes y se puede iterar usando métodos como forEach().

Una diferencia importante entre un NodeList y un array es que un NodeList es estático, lo que significa que no se actualiza automáticamente si se modifican los elementos en el DOM después de su creación. En cambio, siempre reflejará los elementos seleccionados en el momento en que se creó.

Si se desea convertir un NodeList en un array para poder utilizar todos los métodos de los arrays, se puede hacer mediante la conversión explícita utilizando el método Array.from() o el operador de propagación (...).

En resumen, un NodeList es una colección de nodos (elementos HTML) devuelta por métodos como querySelectorAll(), que permite acceder y manipular los elementos seleccionados en el DOM.*/