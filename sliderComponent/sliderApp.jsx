import React, {useState} from 'react';
import Title from "../esignature/title.jsx";
import SliderComponent from "./sliderComponent.jsx";

function SliderApp(props) {
    const [setValue,setSlideValue] = useState(0);
    const sethandelInput =(e)=>{
        setSlideValue(e.target.value)
    }
    let bgColor,txtColor=""
if(setValue<25){
    bgColor = "red"
    txtColor = "red"
}
    if(setValue <25 && setValue<=50){
        bgColor = "blue"
        txtColor = "white"
    }
    if(setValue>51 && setValue <= 75){
        bgColor = "yellow"
        txtColor = "black"
    }
    return (
        <>
            <div className="container text-center"></div>
        <Title text={"Slider App"}/>
            <SliderComponent setValue={setSlideValue} handelInput={sethandelInput} bgColor={bgColor} textColor={txtColor}/>
        </>
    );
}

export default SliderApp;