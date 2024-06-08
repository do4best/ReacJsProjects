import React from 'react';
import PropTypes from "prop-types";

function SliderComponent({setValue,handelInput,bgColor,textColor}) {
    return (
        
        <>
        <div className=" container text-center d-flex flex-column " style={{gap:100}}>
            <input type="range" min={0} max={100} value={setValue} className={"form-range"} onInput={handelInput} style={{width:700,marginLeft:300}}/>
            <div style={{

                color:!textColor?"black":textColor,
                background:!bgColor?"lightgray":bgColor,
                height:`${setValue*3}px`,
                width:`${setValue*3}px`,
                fontWeight:600,
                borderRadius:"50%",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                marginLeft:550
            }} className={" "}>
                <span >{setValue}</span>
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