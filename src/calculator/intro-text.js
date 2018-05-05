import React from 'react';

const IntroText = ()=>{
  return [
    <h2 key="head" className="intro-header">Stateful Calculator</h2>,
    <div key="paragraph"  className="intro-wrapper">
      <p className="intro-paragraph">
        This project is made using React with ES6/7. The state is recorded and saved to local storage every time a line is evaluated or clear everthing (CE) is hit. You can go back and forth in the state's history using the Back and Forward buttons. Interaction with the calculator can be done via the buttons or the keyboard.
      </p>
    </div>,
  ];
};

export default IntroText;
