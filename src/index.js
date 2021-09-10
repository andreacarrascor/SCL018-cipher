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

//declaración variables para texto cifrado/descifrado
const firstText = document.getElementById("inputText");
const finalText = document.getElementById("outputText");
//declaración de variable para desplazamiento
const offset = document.getElementById("position");

const encodeButton = document.getElementById("encode");
const decodeButton = document.getElementById("decode")

//escuchador de botón "Cifrar"
encodeButton.addEventListener("click", () => {   
    const entrance = firstText.value;
    const displacement = offset.value;
    finalText.value = cipher.encode(displacement, entrance);
});
//escuchador de botón "Descifrar"
decodeButton.addEventListener("click", () => {   
    const entrance = firstText.value;
    const displacement = offset.value;
    finalText.value = cipher.decode(displacement, entrance);
});

    








import cipher from './cipher.js';

// console.log(cipher);


    