import React, {useState} from 'react';
import Title from "../esignature/title.jsx";
import SliderComponent from "./sliderComponent.jsx";
/* There is two components 1- sliderComponent 2-sliderApp
* Slider App is responsible to be displayed in the main App
* Slider App is using useState & also has sethandelInput function
* */
function SliderApp(props) {     {/* */}
    const [slideValue,setSlideValue] = useState(0); {/* <--- this is useState Example*/}
    const sethandelInput =(e)=>{       {/* <--- this handelInput function is responsible for the ranger to be set*/}
        setSlideValue(e.target.value)
    }
    let bgColor,txtColor=""; {/* bg color and text color is defined.*/}
if(slideValue<25){  {/*  if slide value is less then 25 then */}
    bgColor = "red"
    txtColor = "white"
}
    if(slideValue <25 && slideValue<=50){ {/* if it is between 25 and 50 its value should be blue and white */}
        bgColor = "blue"
        txtColor = "white"
    }
    if(slideValue>51 && slideValue <= 75){    {/* if 51 and 75 is also  */}
        bgColor = "yellow"
        txtColor = "black"
    }
    if(slideValue == 100){      {/* if slide value is 100 */}
        bgColor = "red"
    }
    return (
        <>
            <div className="container text-center"></div>
        <Title text={"Slider App"}/>
            <SliderComponent setValue={slideValue} handelInput={sethandelInput} bgColor={bgColor} textColor={txtColor}/>
        </>
    );
}

export default SliderApp;