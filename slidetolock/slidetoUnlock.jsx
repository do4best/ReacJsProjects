import React, {useState} from 'react';
import LockSlider from "./lockSlider.jsx";
import {AiFillUnlock} from "react-icons/ai";
import Title from "../esignature/title.jsx";
import bgImage from './one.jpg';
function SlidetoUnlock() {
    const [uiPros,setUipro] = useState({
        uiText:"Unlock Screen",
        uiColor:"#eee",
        uiBg:`url(${bgImage}) center/cover no-repeat`
    })
    const [lockSlider,setLockSlider] = useState(true)
    const [lockSliderValue,setLockSliderValue] = useState(0)
    const handelLockSlider =(e)=>{
        setLockSliderValue(e.target.value)
        // setLockSlider(false)
    }
    return (
        <>
            <div className="container text-center d-flex flex-column border-20 shadow-md" style={
                {
                    height:"80vh",
                    marginTop:"15vh",
                    width:340,
                    border:"4px solid #000",
                    background:uiPros.uiBg
                }
            }>

<div style={{marginTop:"300px "}}>
            <h1 style={{color:uiPros.uiColor}}><span className={"display-5 text-primary m-3"}> {uiPros.uiText}</span></h1>
    {lockSlider?(<LockSlider handelInput={handelLockSlider} sliderValue={lockSliderValue}/>):(<AiFillUnlock className={"unlockIcon"}/>)}


            </div>
            </div>
        </>
    );
}

export default SlidetoUnlock;