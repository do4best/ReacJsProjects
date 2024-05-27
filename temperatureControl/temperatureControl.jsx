import React, {useState} from 'react';
import Title from "../esignature/title.jsx";
import Button from "../testimonial/Button.jsx";

function TemperatureControl() {
    const [temperature,setTemperature] = useState(0)
    return (
        <>
<div className="container mt-3 text-center "> {/* this is main container settings*/}
    <div className="card bg-light m-auto w-40 h-60 mt-5"> {/* this is box container*/}
        <div className={`text-light card rounded-circle m-auto ${temperature>0?"bg-danger":"bg-info"} `} style={{width:150,height:150}}> {/* this is circle container*/}
        <h1 className={`text-black text-center mt-5 ${temperature>0?"text-primary":"text-success"}`}>{temperature} °C</h1></div> {/*This is responsible for the text written*/}
        <div className="d-flex my-2 justify-content-sm-around"> {/* this division is responsible for both buttons*/}
            <Button text={"-"} btnClass={""} OnClick={()=>setTemperature(temperature-1)}/><Button text={"+"} btnClass={""} OnClick={()=>setTemperature(temperature+1)}/>
        </div>

    </div>
</div>
        </>
    );
}

export default TemperatureControl;