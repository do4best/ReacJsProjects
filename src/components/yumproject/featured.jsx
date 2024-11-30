import React, {useState} from 'react';
import imag1 from "./1.jpg";
import imag2 from "./2.jpg";
import imag3 from "./3.jpg";
import black from "./black.jpg";
import {BsChevronCompactLeft,BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx";


function Featured() {
    const sliders=[
        {url:black},
        {url:imag2},
        {url:imag3}
    ];
    const [currentIndex,setCurrentIndex] = useState(0);
    const prevSlide=()=>{
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide?sliders.length-1:currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const nextSlide=()=>{
        const isLastSlide = currentIndex === sliders.length-1
        const newIndex = isLastSlide?0:currentIndex+1;
        setCurrentIndex(newIndex)
    }
    const moveToSlide =(slideIndex)=>{
        setCurrentIndex(slideIndex)
    }
    
    return (
        <>
            <div className="max-w-[1520px] h-[500px] w-full py-4 px-4 relative  group">
                <div className="w-full h-full rounded-2xl bg-center bg-auto duration-500"
                     style={{background: `url(${sliders[currentIndex].url})`}}></div>
                <div
                    className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700">
                    <BsChevronCompactLeft onClick={prevSlide}/>
                </div>
                <div
                    className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700">
                    <BsChevronCompactRight onClick={nextSlide}/>
                </div>
                <div className="flex top-4 justify-center py-2">
                    {
                        sliders.map((sliderItems, sliderIndex) => (
                            <div key={sliderIndex} onClick={() => moveToSlide(sliderIndex)}
                                 className={"text-2xl cursor-pointer"}>
                                <RxDotFilled onClick={moveToSlide}/>
                            </div>))
                    }
                </div>
            </div>


        </>
    );
}

export default Featured;