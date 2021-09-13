//declaración de variables para cambiar de página
const firstPage = document.getElementById("page1");
const secondPage = document.getElementById("page2");
//variable botón "Comenzar aquí"
const showPage2 = document.getElementById("showPage2");
//variable botón "Inicio"
const showPage1 = document.getElementById("showPage1")
//escuchador de botón
    showPage2.addEventListener("click", () => {
    firstPage.style.display = "none";
    secondPage.style.display = "block";
});

//escuchador de botón Inicio
showPage1.addEventListener("click", () => {
    firstPage.style.display = "block";
    secondPage.style.display = "none";
});

//declarar variable para limpiar caracteres
const clearText= document.getElementById("clear");

//escuchador de boton limpiar
clearText.addEventListener("click", () => {
    document.getElementById("inputText").value= "";
    document.getElementById("outputText").value= "";
    document.getElementById("position").value= 0;
});

// //declaración variables para texto cifrado/descifrado
// const firstText = document.getElementById("inputText");
const finalText = document.getElementById("outputText");
// //declaración de variable para desplazamiento
// const offset = document.getElementById("position");

const encodeButton = document.getElementById("encode");
const decodeButton = document.getElementById("decode")

//escuchador de botón "Cifrar"
encodeButton.addEventListener("click", () => {   
    const firstText = document.getElementById("inputText").value;
    const offset = document.getElementById("position").value;
    finalText.value = cipher.encode(offset, firstText);
});
//escuchador de botón "Descifrar"
decodeButton.addEventListener("click", () => {   
    const firstText = document.getElementById("inputText").value;
    const offset =  document.getElementById("position").value;
    finalText.value = cipher.decode(offset, firstText);
});

import cipher from './cipher.js';