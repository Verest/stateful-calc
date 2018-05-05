import React from 'react';
import PropTypes from 'prop-types';

function Screen(props){
  return(
    <div className="screen">
      <p id="sl0" className={"screenLine "+props.textAlign[0]}>{props.display.lineOne}</p>
      <p id="sl1" className={"screenLine "+props.textAlign[1]}>{props.display.lineTwo}</p>
      <p id="sl2" className={"screenLine "+props.textAlign[0]}>{props.display.lineThree}</p>
      <p id="sl3" className={"screenLine "+props.textAlign[1]}>{props.display.lineFour}</p>
      <p id="sl4" className={"screenLine "+props.textAlign[0]}>{props.display.lineFive}</p>
      <p id="sl5" className={"screenLine "+props.textAlign[1]}>{props.display.lineSix}</p>
    </div>
  );
}

Screen.propTypes = {
  display: PropTypes.object.isRequired,
  textAlign: PropTypes.array.isRequired,
}

export default Screen;
