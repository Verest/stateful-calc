import React from 'react';
import Screen from './screen';
import NumericButtons from './numericbuttons';
import OperatorButtons from './operatorbuttons'
import PropTypes from 'prop-types';

function Calculator (props) {
return(
  <div className="calc-container">
    {/*<div className="calc-header"><h3 className="text">Calculator</h3></div>*/}
    <Screen display={props.display} textAlign={props.textAlign}/>
    <div className="buttons">
      <NumericButtons onClick={props.handleClick}/>
      <OperatorButtons onClick={props.handleClick}/>
    </div>
  </div>
  );
}
Calculator.propTypes = {
  handleClick: PropTypes.func.isRequired,
  display: PropTypes.object.isRequired,
  textAlign: PropTypes.array.isRequired,
}
export default Calculator;
