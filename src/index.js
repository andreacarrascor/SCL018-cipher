//declaración de variables para cambiar de página
const firstPage = document.getElementById("page1");
const secondPage = document.getElementById("page2");
//variable botón "Comenzar aquí"
const showPage2 = document.getElementById("showPage2");
//escuchador de botón
    showPage2.addEventListener("click", () => {
    firstPage.style.display = "none";
    secondPage.style.display = "block";
});

//declaración variables para texto cifrado/descifrado
const firstText = document.getElementById("inputText").value;
const finalText = document.getElementById("outputText").value;
//declaración de variable para desplazamiento
const offset = document.getElementById("position").value;

const encodeButton = document.getElementById("encode");
//const decodeButton = document.getElementById("decode")

//escuchador de botón "Cifrar"
encodeButton.addEventListener("click", () => {   
   firstText.value;
   offset.value;
    finalText.value = cipher.encode(offset, firstText);
});



    








import cipher from './cipher.js';

// console.log(cipher);


    