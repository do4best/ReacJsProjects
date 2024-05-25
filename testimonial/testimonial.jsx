import React, {useEffect, useState} from 'react';
import Title from "../esignature/title.jsx";
import Button from "./Button.jsx";
import {BsFillFileEarmarkPptFill} from "react-icons/bs";
import {FaUserAlt} from "react-icons/fa";
import {BiCommentDetail} from "react-icons/bi";

function Testimonial(props) {
    const [testtimonial,setTestimonial] = useState("")
    const [item,setItems] = useState("")
    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/${testtimonial}`)
            .then(response => response.json())
            .then(json =>

        setItems(json))
    }, [testtimonial]);
    return (
        <>
        <div className="container m-auto">
            <Title text={"Testimonial"}/>
            <div className="d-flex justify-content-between">
            <Button  text={"Post"} btnClass={"success btn-lg  "} icon={<BsFillFileEarmarkPptFill/>} OnClick={()=>setTestimonial("posts")}/>
            <Button  text={"User"} btnClass={"success btn-lg  "} icon={<FaUserAlt/>} OnClick={()=>setTestimonial("Users")}/>
                <Button  text={"Comments"} btnClass={"success btn-lg  "} icon={<BiCommentDetail/>} OnClick={()=>setTestimonial("comments")}/>


            </div>
            <Title text={!testtimonial?"Select from the Above":testtimonial} classes={"text-primary display-5 mt-10"}/>
            {!item?null:item.map((item,index)=>{
                return <div key={index} className={"card  mb-2"}>{item.name && <h2 className={"card-header bg-primary"}>{item.name}</h2>}
                <div className="card-body">
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                </div>
                    {item.email &&(<small className={"card-footer bg-success"}>{item.email}</small> )}
                </div>

            })}
        </div>

        </>
    );
}

export default Testimonial;