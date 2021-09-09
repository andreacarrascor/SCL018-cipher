const cipher = {
  
  encode:  (offset, firstText) => {
    //offset = parseInt(offset); no es necesario, porque el input de nuestro offset ya lleva type=number
    firstText = firstText.toUpperCase();
    let resultEncode = "";
    
    for (let i = 0; i < firstText.length; i++) {
      //Para transformar input en código ASCII//
        let asciiCode = firstText.charCodeAt(i)
    
        if(asciiCode >= 65 && asciiCode <= 90) {
        let newPositionNumber = (asciiCode - 65 + offset) % 26 + 65;
        resultEncode += String.fromCharCode(newPositionNumber);
        } 
    } 
         return resultEncode;
  } 
};
  



 //document.getElementById("outputText").value = result;
 //this.value = this.value.toUpperCase(); //Para cambiar automáticamente el input a mayúscula 


//llamamos a la variable para obtener codigo ASCII de la letra seleccionada
//alphabet.charCodeAt();
//para convertir de código ASCII a letra 
//String.fromCharCode();
//fórmula cifrado César
//(x-65 + n)% 26 + 65

export default cipher;
