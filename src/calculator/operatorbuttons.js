import React from 'react';
import PropTypes from 'prop-types';

function OperatorButtons(props){
  return(
    <div id="opButtons" onClick={props.onClick}>
      <button id="bClr" className="stdButton" type="button">C</button>
      <button id="bClrAll" className="stdButton RHS" type="button">CE</button><br />
      <button id="bPlus" className="stdButton" type="button">+</button>
      <button id="bMin" className="stdButton RHS" type="button">-</button><br />
      <button id="bMult" className="stdButton" type="button">*</button>
      <button id="bDiv" className="stdButton RHS" type="button">/</button><br />
      <button id="bDel" className="stdButton" type="button">&lt;</button>
      <button id="bEq" className="stdButton RHS" type="button">=</button><br />
    </div>
  );
}

OperatorButtons.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default OperatorButtons;
