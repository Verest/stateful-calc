import React from 'react';
import PropTypes from 'prop-types';

function NumericButtons(props){
  return(
    <div id="numButtons" onClick={props.onClick}>
      <button id="b7" className="stdButton LHS" type="button">7</button>
      <button id="b8" className="stdButton" type="button">8</button>
      <button id="b9" className="stdButton" type="button">9</button><br />
      <button id="b4" className="stdButton LHS" type="button">4</button>
      <button id="b5" className="stdButton" type="button">5</button>
      <button id="b6" className="stdButton" type="button">6</button><br />
      <button id="b1" className="stdButton LHS" type="button">1</button>
      <button id="b2" className="stdButton" type="button">2</button>
      <button id="b3" className="stdButton" type="button">3</button><br />
      <button id="b0" className="stdButton LHS" type="button">0</button>
      <button id="bDot" className="wideButton" type="button">.</button>
    </div>
  );
}

NumericButtons.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NumericButtons;
