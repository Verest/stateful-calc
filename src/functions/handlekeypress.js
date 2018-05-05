export const handleKeyPress = (e, typeOfCase) => {
  const handleCase = {
    onKeyDown: () => {
      const backspaceTest = e.key || e.keyCode;  //key has bad support
      if(backspaceTest === "Backspace" || backspaceTest === 8){
        return "<";
      }
    },

    onKeyPress: () => {
      let keyPressed = e.which || e.keyCode;
      let charPressed = String.fromCharCode(keyPressed);
      if(keyPressed === 13){//enter key
        return "=";
      }else{//everything else, filtered in process function
        return charPressed;
      }
    },
  }//end handleCase

  return handleCase[typeOfCase]();
}
