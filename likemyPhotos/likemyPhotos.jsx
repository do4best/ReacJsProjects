import React, {useState} from 'react';
import Title from "../esignature/title.jsx";
import pic1 from './pic8.jpg'
import {AiFillHeart, AiFillSmile, AiOutlineComment, AiOutlineHeart} from "react-icons/ai";

function LikemyPhotos(props) {
    const [like,setlike] = useState(false)
    const toggleLike=()=>{
        if(!like){
            setlike(true)
        }else {setlike(false)}

    }
    return (
        <>
        <Title text={"Like My Photo"}/>

            <Title text={"likes"} classes={"mt-10 display-3 text-center"}/>
            <div className="card card-mark m-auto" style={{width: 300, cursor: "pointer"}}>

                <div className="card-header fs-xl">
                    <div className="d-flex align-content-lg-between">
                    <AiFillSmile className={"mr-2"} /><small className={"text-center h6"}>Bonito el Mujer</small></div></div>
                <img src={pic1} alt="Img"/>
                <div className="card-footer fs-xl d-flex" style={{justifyContent:"space-between"}}>
                    <AiOutlineComment/>{like?(<AiFillHeart className={"text-danger"} onClick={toggleLike}/>):(<AiOutlineHeart onClick={toggleLike}/>)}
                </div>
            </div>


        </>
    );
}

export default LikemyPhotos;