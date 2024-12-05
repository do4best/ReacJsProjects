import React from 'react';
import {topPicks} from "./data1.js";

function TopPics() {
    return (
        <>
        <h1 className={"text-orange-500 font-bold text-2xl text-center py-2 "}>Top Pics</h1>
            <div className="hidden lg:flex max-[1520px] m-auto py-2 px-2">
                {
                    topPicks.map((id)=>{
                        return (
                            <div className={"rounded-3xl relative"} >
                                <div className={"absolute w-full h-full bg-black/50 rounded-3xl text-white"}>
                                    <p className={"px-2"}>{id.title}</p>
                                </div>

                                <img className={"h-[200px] w-full"} src={id.img} alt={id.title}/>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default TopPics;