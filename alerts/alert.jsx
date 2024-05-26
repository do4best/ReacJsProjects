import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import Buttons from "./Buttons.jsx";
import './style.css'
function Alert({type,message,delay=false,delaytime}) {
    const [showAlert,setShowAlert] = React.useState(true);
    const closeAlert = (e) => {
        e.target.parentElement.parentElement.classList.add("fadeAlert");
        setTimeout(()=>{
            setShowAlert(false);
        },400)
    }
    useEffect(() => {
        delay && setTimeout(()=>{
            setShowAlert(false)
        },delaytime)
    }, []);


    return (
        <>
            {showAlert && <div className={`alert alert-${type}`}>
            <div className="alert-close">
                <div className="d-flex justify-content-between">
                <span className={"mr-1"}>{message}</span> <Buttons  type={"close"}  onClick={closeAlert}/>
                </div>
            </div>
        </div>}


        </>
    );
}

export default Alert;
Alert.propTypes = {
    type: PropTypes.string,
    message: PropTypes.string,
    delay: PropTypes.any,
    delayTime: PropTypes.any,
}