import React, {useState} from 'react';
import {topPicks} from "./data1.js";
import {FaChevronRight, FaHandPointRight} from "react-icons/fa";

function Meals(props) {
    const [food,setFoods] = useState(topPicks)
    const filterFood =(category)=>{
        setFoods(
            topPicks.filter((items)=>{
                return items.title === category;
            })
        )
    }
    return (
        <>
        <div className="max-w-[1520px] m-auto px-2 py-12">
            <h1 className="text-orange-500 font-bold text-2xl text-center py-2">Our Meal</h1>
            <div className="flex flex-col lg:flex-row justify-center">
                <div className="flex justify-center md:justify-center">
                    <button onClick={()=>setFoods(topPicks)} className={"m-1 border-orange-700 text-white bg-orange-700 p-3 rounded-xl hover:bg-white hover:text-orange-700 hover:border-orange-700"}>All</button>
                    <button onClick={()=>filterFood('Pizza')} className={"m-1 border-orange-700 text-white bg-orange-700 p-3 rounded-xl hover:bg-white hover:text-orange-700 hover:border-orange-700"}>Pizza</button>
                    <button onClick={()=>filterFood('Kabab')} className={"m-1 border-orange-700 text-white bg-orange-700 p-3 rounded-xl hover:bg-white hover:text-orange-700 hover:border-orange-700"}>Chicken</button>
                    <button onClick={()=>filterFood('Burger')} className={"m-1 border-orange-700 text-white bg-orange-700 p-3 rounded-xl hover:bg-white hover:text-orange-700 hover:border-orange-700"}>Salad</button>
                </div>
            </div>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-2 ">
                {
                    food.map((item)=>(
                        <div className={"border-none hover:scale-105 duration-300 "} key={item.id}>
                            <img src={item.img} alt={item.title}  className={" rounded-2xl h-3/4 w-3/4 object-cover mt-4  "}/>
                            <div className="flex justify-between py-2 px-4">
                                <p>{item.title}</p>
                                <p className={"bg-orange-700 h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8 font-bold "}>{item.price}</p>
                            </div>
                            <div className="pl-2 py-4 ">
                                <FaChevronRight size={15} className={"inline"} /> <p className={"text-indigo-400 inline"}>View More</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

        </>
    );
}

export default Meals;