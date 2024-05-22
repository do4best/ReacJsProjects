import React, {useState} from 'react';
import Title from "../esignature/title.jsx";

function RandomColor(props) {
    const [color,setColor] = useState("")

    const getColor=()=>{
        let letters="0123456789ABCDEF"
        let color="#"
        for(let i=0; i<6; i++){
            color += letters[Math.floor(Math.random()*16)]

        }
        return color;
    }
    const handelColor=(e)=>{
        console.log(getColor())
        let body=document.querySelector("body")
        body.style.background = getColor()
    }
    return (
        <>
            <Title text={"Random Color Example"}/>
            <div className=" d-flex flex-row justify-content-around align-item-center mt-50">

            <button onClick={handelColor} className={"btn btn-danger"}>Click Me</button>
            <button onClick={handelColor} className={"btn btn-success"}>Click Me</button>
            <button onClick={handelColor} className={"btn btn-primary"}>Click Me</button>
            <button onClick={handelColor} className={"btn btn-warning"}>Click Me</button>
            </div></>
    );
}

export default RandomColor;