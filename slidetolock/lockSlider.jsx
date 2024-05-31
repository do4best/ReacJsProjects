
import './lockslider.css'
import PropTypes from "prop-types";
import Title from "../esignature/title.jsx";

function LockSlider({handelInput,sliderValue,width}) { // component lockSlider is initialized with three parameters (fun)handelInput,(value)showing the range (width and make it width.
    let sliderStyle={ // slider style is define
        appearance:"none",
        width:!width?"300px":width,
        height:"50px",
        background : "rgba(188,190,188,0.5)",
        outline:"none",
        WebkitAppearance:"none"
    }
    return (
        <>
            <input type="range" style={sliderStyle} className={"slider mb-2 border-5"} onInput={handelInput} value={sliderValue}/>
        </>
    );
}

export default LockSlider;
LockSlider.propTypes={
    handelInput:PropTypes.any,
    sliderValue:PropTypes.string,
    width:PropTypes.string

}
