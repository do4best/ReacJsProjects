

import React from 'react';
import {topPicks} from "./data1.js";


function SimpleImage() {
    function getImage(name){
        return new URL(`../yumproject/${name}`,import.meta.url).href
    }
    return (
        <>

            {topPicks.map((img)=>{
                return (
                    <img src={getImage(img.img)} alt="Hello" className={"h-[200px] rounded"}/>

                )
            })}


        </>
    );
}

export default SimpleImage;