import React from 'react';
import {topPicks} from "./data1.js";
import kabab from './kabab.jpg'
import pizza from './pizza.jpg'
import burger from './burger.jpg'
import buryani from './baryani.jpg'
function TopPics() {
    const getImageUrl=(name)=>{
        return (name.img)
    }
    return (
        <>
        <h1 className={"text-orange-500 font-bold text-2xl text-center py-2 "}>Top Pics</h1>
            <div className="hidden lg:flex max-[1520px] m-auto py-2 px-2">
                {
                    topPicks.map((item)=>{
                        return (
                            <div className={"rounded-3xl relative"} key={item.key} >
                                <div className={"absolute w-full h-full bg-black/50 rounded-3xl text-white"}>
                                    <p className={"px-2"}>{item.title}</p>
                                </div>

                                <img className={"h-[200px] w-full"} src={kabab} alt={item.title}/>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default TopPics;