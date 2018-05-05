import React from 'react';
import PropTypes from 'prop-types';

function HistoryNav (props) {
return(
  <div className="history-nav">
    <button type="button" onClick={props.handleClick}>Back</button>
    <button type="button" onClick={props.handleClick}>Forward</button>
  </div>
  );
}
HistoryNav.propTypes = {
  handleClick: PropTypes.func.isRequired,
}
export default HistoryNav;
