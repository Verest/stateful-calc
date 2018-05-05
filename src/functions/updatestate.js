import {evaluate} from './evaluate';

export const returnUpdatedState = (stateCopy, action, charSubmitted) => {
  //repeat values used below
  let currentFocus = stateCopy.current.focus;
  let currentLine = stateCopy.current[currentFocus];

  //various actions to update state
  const updateState = {
    clearLine: () => {
        stateCopy.current[currentFocus]="";
    },//end clearLine
    clearAll: () => {
      stateCopy.current = {
        lineOne: "", lineTwo: "", lineThree: "",
        lineFour: "", lineFive: "", lineSix: "",
        focus: "lineOne",
      };
      stateCopy.currentHistoryFocus+=1;
      updateHistory(stateCopy); //saves out history after clearing
      stateCopy.history.push(stateCopy.current) //adds new entry to match the current
    },//end clearAll
    backspace: () => {
      //if there is something to delete on the current line
      if(stateCopy.current[currentFocus].length>0){
          stateCopy.current[currentFocus]=currentLine.slice(0,currentLine.length-1);
      }
    },//end backspace
    shiftLineUp: () => {
      stateCopy.current = {
        lineOne: stateCopy.current.lineTwo, lineTwo: stateCopy.current.lineThree,
        lineThree: stateCopy.current.lineFour, lineFour: stateCopy.current.lineFive,
        lineFive: stateCopy.current.lineSix, lineSix: "",
        focus: "lineSix",
      };
    },//end shiftLineUp
    solveLine: () => {
      if(currentLine && currentLine.length>0){ //first part to check if it is undefined (line seven & empty)
        let result = evaluate(currentLine);
        if(currentFocus === "lineSix"){//shift up if needed, otherwise update focus
          const swapTextAlign= stateCopy.textAlign[0];
          stateCopy.textAlign[0]=stateCopy.textAlign[1];
          stateCopy.textAlign[1]=swapTextAlign;
          stateCopy.current = shiftLineUp(stateCopy.current);
        }else{//next line becomes current focus
          stateCopy.current.focus = updateFocusKey[currentFocus]
          currentFocus = updateFocusKey[currentFocus];
        }//end if

        //update currentvalue
        stateCopy.current[currentFocus] = result;
        //update focus to be +1 for next line of typing
        stateCopy.current.focus = updateFocusKey[currentFocus];
        //update history
        stateCopy.currentHistoryFocus+=1;
        updateHistory(stateCopy); //saves out history after evauluate
        stateCopy.history.push(stateCopy.current) //adds new entry to match the current
      }//end if
    }, //end solveLine
    addToDisplay: () => {
      //check if focus is lineSeven and move up if so
      if(currentFocus==="lineSeven"){
        const swapTextAlign= stateCopy.textAlign[0];
        stateCopy.textAlign[0]=stateCopy.textAlign[1];
        stateCopy.textAlign[1]=swapTextAlign;
        stateCopy.current = shiftLineUp(stateCopy.current);
        currentFocus="lineSix";
      }
      stateCopy.current[currentFocus]+=charSubmitted;//update display
      updateHistory(stateCopy);
    },
    back: () => {
      stateCopy.currentHistoryFocus-=1;
      stateCopy.current = stateCopy.history[stateCopy.currentHistoryFocus];
    },
    forward: () => {
      stateCopy.currentHistoryFocus+=1;
      stateCopy.current = stateCopy.history[stateCopy.currentHistoryFocus];
    },
  }

  //returns appropriate modifications
  updateState[action]();
  return stateCopy;
};

//updates history and currentHistoryFocus in the case the current focus is not the most recent
const updateHistory = (stateCopy)=>{
  //delete any more recent versions
  stateCopy.history = stateCopy.history.slice(0,stateCopy.currentHistoryFocus+1)
  //make last value the current value
  stateCopy.history[stateCopy.history.length-1]=stateCopy.current;
};

//shift up lines by 1, input is of the "current" portion of the stateCopy
//only happens for overflow or when eval is hit @ focus on lineSix
//might not implement overflow, and instead just use a scroll bar...
const shiftLineUp = (current)=>{
    current = {
      lineOne: current.lineTwo, lineTwo: current.lineThree,
      lineThree: current.lineFour, lineFour: current.lineFive,
      lineFive: current.lineSix, lineSix: "",
      focus: "lineSix",
    };
    return current;
};

//key for determining next focus line
const updateFocusKey =  {
    lineOne: "lineTwo", lineTwo: "lineThree", lineThree: "lineFour",
    lineFour: "lineFive", lineFive: "lineSix", lineSix: "lineSeven",
  };
