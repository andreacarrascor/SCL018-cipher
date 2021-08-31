import cipher from './cipher.js';

console.log(cipher);
//declaramos las variables para obtener los elementos de pagina 1 y pagina 2
const displayOne=
    document.getElementById("page1");

const displayTwo=
    document.getElementById("page2");

//declaramos una variable y función para mostrar la pagina 2, mediante un evento listener
const showPage2=
    document.getElementById("showpage2");
    showPage2.addEventListener("click", () => {
    displayOne.style.display= "none";
    displayTwo.style.display= "block";
})