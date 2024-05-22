import React from 'react';
import PropTypes from "prop-types";

function Title({text,classes}) {
    return (
        <>

        <h1 className={!classes?"text-center display-1":classes}>{!text?"Title":text}</h1>
        </>
    );
}

export default Title;
Title.propTypes={
    text:PropTypes.any,
    classes:PropTypes.string

}