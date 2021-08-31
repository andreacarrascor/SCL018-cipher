import cipher from './cipher.js';

console.log(cipher);
//declaramos las variables para obtener los elementos de paginas 1, 2 y 3
const displayOne=
    document.getElementById("page1");

const displayTwo=
    document.getElementById("page2");

const displayThree=
    document.getElementById("instructions");

//declaramos una variable y función para mostrar la pagina 2, mediante un evento listener
const showPage2=
    document.getElementById("showpage2");
    showPage2.addEventListener("click", () => {
    displayOne.style.display= "none";
    displayTwo.style.display= "block";

})
const showInstructions=
    document.getElementById("showinstructions");
    showInstructions.addEventListener("click", () => {
    displayOne.style.display= "none";
    displayTwo.style.display= "none";
    displayThree.style.display= "block";
})
    