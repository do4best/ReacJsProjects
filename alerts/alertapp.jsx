import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Alert from "./alert.jsx";
function Alertapp(props) {
    return (
        <>
        <div className="container m-auto p-3">

            <Alert type={"success"} message={"success Message log in"}/>
            <Alert type={"info"} message={"find us soon"} delay={true} delaytime={5000}/>

        </div>
        </>
    );
}

export default Alertapp;