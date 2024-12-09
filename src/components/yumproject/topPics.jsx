import React from 'react';
import {topPicks} from "./data1.js";
import kabab from '/public/fastfood/kabab.jpg'
import pizza from '/public/fastfood/pizza.jpg'
import burger from '/public/fastfood/burger.jpg'
import buryani from '/public/fastfood/baryani.jpg'
import {Splide, SplideSlide} from "@splidejs/react-splide";
function TopPics() {
const splideOption={
    type:"loop",
    perPage:4,
    perMove:2,
    direction:"rtl",
    arrows:false,
    padding:"2rem",
    breakpoints:{
        200:{
            perPage: 4,
            gap:"0.5rem"
        },
        300:{
            perPage: 4,
            gap:"0.5rem"
        }
    }

}

    return (
        <>
                 <h1 className={"text-orange-500 font-bold text-2xl text-center py-2 "}>Top Pics</h1>
            <div className="hidden lg:flex  w-[1520px] m-auto py-2 px-2 ">

                {
                      topPicks.map((item) => {
                                return (
<Splide options={{arrows:false}} key={item.id}>
                                        <SplideSlide>
                                    <div className={"rounded-3xl relative"} key={item.key}>
                                        <div className={"absolute w-full h-full bg-black/50 rounded-3xl text-white"}>
                                            <p className={"px-2 font-bold text-2xl pt-4"}>{item.title}</p>
                                            <p className={"px-2"}>{item.price}</p>
                                            <button
                                                className="border-white border-dotted text-white absolute bottom-4 ml-2">Add
                                                To Cart
                                            </button>
                                        </div>

                                        <img
                                            className={"h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-500"}
                                            src={item.img} alt={item.title}/>
                                    </div>

                                        </SplideSlide>    </Splide>)

                            })
                        }

                    </div>


                </>
                );
                }

                export default TopPics;
