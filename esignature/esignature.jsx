
import 'bootstrap/dist/css/bootstrap.css'
import Title from "./title.jsx";
import 'bootstrap/dist/css/bootstrap.css'
import {useState} from "react";
function Esignature() {
    const [name,setName] = useState("")
    const [date,setDate] = useState("")
    const handelState =(e)=>{
        setName(e.target.value)
    }
    const handelDate = (e)=>{
        setDate(e.target.value)
    }
    const inputStyle={
        border:"none",
        borderBottom:"2px dotted",
        outline:"none",
        padding:".35rem 0",
        position:"relative",
        top:"40vh"

    }
    document.body.style.background="#eee"
    return (
        <>
        <h1 className={"text-center"}>ESignature Example</h1>
            <Title text={name}/>
            <Title classes={"mt-10 text-center display-3"} text={date}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque blanditiis commodi corporis, deleniti dolorem doloremque doloribus eaque excepturi exercitationem fugit hic id illo laudantium maxime, minima minus molestias mollitia nihil nostrum nulla pariatur possimus quas qui quia recusandae sapiente sed soluta, tenetur totam ullam ut veritatis voluptatum! Accusantium assumenda aut autem cum dicta dolorum, ducimus iusto odit pariatur possimus quod repudiandae soluta tempora temporibus voluptas voluptate voluptatum! Aliquid consequuntur culpa iste neque nobis quos.</p>
            <footer className={"d-flex justify-content-around"} >
            <input type="date" value={date} style={inputStyle} onChange={handelDate} />
            <input type="text" value={name} style={inputStyle} onChange={handelState} />
            </footer>
        </>
    );
}

export default Esignature;