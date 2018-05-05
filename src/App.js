import React, { Component } from 'react';
import './App.css';
import Calculator from './calculator/calcbase';
import HistoryNav from './historynav/historynav';
import { returnUpdatedState } from './functions/updatestate';
import { handleKeyPress } from "./functions/handlekeypress";
import Footer from "./footer/Footer";
import Header from "./header/Header"
import IntroText from "./calculator/intro-text";

class App extends Component {
  //state init going here. doing via prop initializers was overiding local storage
  constructor(){
    super();
    if(window.localStorage && JSON.parse(localStorage.getItem('state'))) {
      this.state = JSON.parse(localStorage.getItem('state'));
    }else{
      this.state = {
        history: [{
          lineOne: "", lineTwo: "", lineThree: "", lineFour: "", lineFive: "", lineSix: "",
          focus: "lineOne",
        },{}],
        current: {
          lineOne: "", lineTwo: "", lineThree: "", lineFour: "", lineFive: "", lineSix: "",
          focus: "lineOne",
        },
        currentHistoryFocus: 1, //0 is the blank slate given in history above
        textAlign:["align-left", "align-right"], //1st is lineOne, 2nd is lineTwo
      };
    }
  }

  //add event listener for keypresses on mount
  componentDidMount(){
    document.onkeydown = (e) => {
      this.processUserInput(handleKeyPress(e,"onKeyDown"));
    };

    document.onkeypress = (e) => {
      this.processUserInput(handleKeyPress(e,"onKeyPress"));
    };
  }

  //updates states for various reasons
  updateState = (actionToTake, charSubmitted = null)=>{
    this.setState((prevState, props) => {
      let stateCopy = JSON.parse(JSON.stringify(prevState));
      const toReturn = returnUpdatedState(stateCopy, actionToTake, charSubmitted);

      //saved out history here due to this.state being out of date (async reasons)
      if(actionToTake==="solveLine"|| actionToTake==="clearAll"){
        localStorage.setItem('state',JSON.stringify(stateCopy));
      }

      return toReturn;
    });

  };

  //function that interprets keystrokes or button presses (send in character)
  processUserInput = (charSubmitted) => {
    if( charSubmitted === "=" ) {
      this.updateState("solveLine");
    }else if( charSubmitted==="C" ){
      this.updateState("clearLine");
    }else if( charSubmitted==="CE" ){
      this.updateState("clearAll");
    }else if( charSubmitted==="<" ){
      this.updateState("backspace");
    }else if( /^[-+*/0123456789.]{1}$/.test(charSubmitted) ){
      this.updateState("addToDisplay", charSubmitted);
    }
  };

  //event for all button clicks
  onCalcButtonClick = (e) => {
    this.processUserInput(e.target.textContent);
    e.target.blur(); //remove focus in case user using enter key
  };

  //event on clicking buttons to cycle between history
  onHistoryChangeClick = (e) => {
    const action = e.target.textContent.toLowerCase();
    const currentHistoryView = this.state.currentHistoryFocus+1;
    const historyLength = this.state.history.length;
    if( (action === "forward" && currentHistoryView !== historyLength) ||
        (action === "back" && currentHistoryView !== 1)){
      this.updateState(action);
    }
  };

  render() {
    return [
      <div key="header" className="stickyFooter">
        <Header />
        <div className="container">
          <IntroText />
          <div className="calc-n-history">
            <HistoryNav handleClick={this.onHistoryChangeClick}/>
            <Calculator display={this.state.current} handleClick={this.onCalcButtonClick} textAlign={this.state.textAlign}/>
          </div>
        </div>
      </div>,
      <Footer key="footer"/>
    ];
  }//end render
}//end App

export default App;
