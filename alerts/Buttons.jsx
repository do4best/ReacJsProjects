import React from 'react';
import PropTypes from "prop-types";

function Buttons({type,text,onClick}) {
    return (
        <>
        <button className={!type?"btn btn-dark":`btn btn-${type}`} onClick={onClick}>{!text?text:"click Me"}</button>
        </>
    );
}

export default Buttons;

Buttons.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}