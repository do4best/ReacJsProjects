import React from 'react';
import PropTypes from "prop-types";

function SliderComponent({setValue,handelInput,bgColor,textColor}) {
    return (
        
        <>
        <div className=" container text-center d-flex flex-column justify-content-center align-items-center" style={{gap:100}}>
            <input type="range" min={0} max={100} value={setValue} onInput={handelInput}/>
            <div style={{

                color:!textColor?"black":textColor,
                background:!bgColor?"lightgray":bgColor,
                height:`${setValue*3}px`,
                width:`${setValue*3}x`,
                fontWeight:600,
                borderRadius:"50%",
                display:"flex",
                justifyContent:"center",
                alignContent:"center"
            }} className={" "}>
                <span>{setValue}</span>
            </div>
        </div>
        </>
    );
}

export default SliderComponent;
SliderComponent.propTypes={
    setValue:PropTypes.any,
    handelInput:PropTypes.any,
    bgColor:PropTypes.any,
    textColor:PropTypes.any
}