const cipher = () => {
//const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const offset = document.getElementById("position");
const input = document.getElementById("inputText");
// const output = document.getElementById("outputText");
const encodeButton = document.getElementById("encode");
const decodeButton = document.getElementById("decode");
  let result = "";
    for (let i=0; i < input.lenght; i++) {
      if(input.charCodeAt(i)>= 65 && input.charCodeAt(i)<=90) {
        result+=String.fromCharCode((input.charCodeAt(i) - 65 + offset) % 26 + 65);
      } result+=String.fromCharCode(input.charCodeAt(i));

      } document.getElementById("outputText").value = result;
      
      return result; 
    } 

  
     



//llamamos a la variable para obtener codigo ASCII de la letra seleccionada
//alphabet.charCodeAt();
//para convertir de código ASCII a letra 
//Alphabet.fromCharCode();
//fórmula cifrado César
//(x-65 + n)% 26 + 65

export default cipher;
