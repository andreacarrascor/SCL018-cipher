const cipher = {
  
  encode:  (displacement, entrance) => {

    if (displacement === null || displacement === 0 ) {
      throw new TypeError();
    }
  
    displacement = parseInt(displacement);
    // entrance = entrance.toUpperCase();
    let resultEncode = "";
    
    for (let i = 0; i < entrance.length; i++) {
      //Para transformar input en código ASCII//
        let asciiCode = entrance.charCodeAt(i)
    
        if(asciiCode >= 65 && asciiCode <= 90) {
        let newPositionNumber = (asciiCode - 65 + displacement) % 26 + 65;
        resultEncode += String.fromCharCode(newPositionNumber);
        } 
        else if (asciiCode >= 97 && asciiCode <= 122) {
          let minLetter = (asciiCode - 97 + displacement) % 26 + 97;
          resultEncode += String.fromCharCode(minLetter);
      }
        else {
          resultEncode += entrance[i]
        }


    } 
         return resultEncode;
  }, 
  
  decode: (displacement, entrance) => {

    if (displacement === null || displacement === 0 ) {
      throw new TypeError();
    }
    
    displacement = parseInt(displacement);
    // entrance = entrance.toUpperCase();
    let resultDecode = "";
    
    for (let i = 0; i < entrance.length; i++) {
      //Para transformar input en código ASCII//
        let asciiCode = entrance.charCodeAt(i)
    
        if(asciiCode >= 65 && asciiCode <= 90) {
        let newPositionNumber = (asciiCode - 90 - displacement) % 26 + 90;
        resultDecode += String.fromCharCode(newPositionNumber);
        } 
        else if (asciiCode >= 97 && asciiCode <= 122) {
          let minLetter = (asciiCode - 122 - displacement) % 26 + 122;
          resultDecode += String.fromCharCode(minLetter);
      }
        else {
          resultDecode += entrance[i]
        }
    } 
         return resultDecode;
  }
};

export default cipher;



 //document.getElementById("outputText").value = result;
 //this.value = this.value.toUpperCase(); //Para cambiar automáticamente el input a mayúscula 


//llamamos a la variable para obtener codigo ASCII de la letra seleccionada
//alphabet.charCodeAt();
//para convertir de código ASCII a letra 
//String.fromCharCode();
//fórmula cifrado César
//(x-65 + n)% 26 + 65


