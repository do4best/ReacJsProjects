import React, {useEffect, useRef, useState} from 'react';
import {BsSearch} from "react-icons/bs";

function HiddenSearch(props) {
    const [uiPros,setUiPros] = useState({
        bg:"purple",
        shadow:"",
        transition:"all .3s ease",
        opacity:0,
        showSearchIcon:true,
        shadowSearchBar:false
    })

    let bsSearchStyle={
        fontsize:50,
        cursor:"pointer",
        position:"absolute",
        top:20,
        right:20,
        padding:"1rem .3rem",
        border:"none",
        outline:"none",
        background:"transparent",
        borderBottom:"1px solid #333",
        fontSize:"1.3rem",
        color: "#eee",
        boxShadow:"0px 55px 60px -15px rgba(0,0,0,.75)",
        opacity:uiPros.opacity,
        transition:"all .3s ease"
    }
    let inputStyle={
        color:"#fff",
 margin:"10vh",
        height:"30px",
        width:"20vh"
    }
    useEffect(() => {
        document.body.style.background = uiPros.bg;
        document.body.style.boxShadow = uiPros.shadow;
        document.body.style.transition = uiPros.transition;

    }, [uiPros.shadow]);
    const showSearch = ()  =>{
        setUiPros({
            opacity: 1,
            showSearch: false
        })
    }
    const inputEle = useRef(null)
    const handelSearchBlur=(e)=>{
        setUiPros({
            shadow: "none",
            opacity: 0,
            borderBottomColor:"#fff",
            showSearchIcon: true
        })
    }
    const handelSearchFocus=()=>{
        setUiPros({
            shadow: "insect 0 -60vh 30vw 200px rgba(0,0,0,0.8)",
            borderBottomColor:"green",

        })
        inputEle.current.focus()
    }

    return (
        <>
        <div className="container" style={{height:"100vh"}}>

            {uiPros.showSearchIcon ? (<BsSearch style={bsSearchStyle} onClick={showSearch}/>) :
                <input type="text" placeholder={"search"} style={inputStyle} onFocus={handelSearchFocus} ref={inputEle}
                       onBlur={handelSearchBlur}/>}
        </div>

        </>
    );
}

export default HiddenSearch;