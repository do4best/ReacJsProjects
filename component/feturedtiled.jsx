import {useState} from "react";
import {BsChevronCompactLeft,BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx";
import image1 from './pics/s1.jpg'
import image2 from './pics/s2.jpg'
import image3 from './pics/s3.jpg'


function Feturedtiled() {
    const sliders=[
        {
            url:image1
        },
        {
            url:image2
        },
        {
            url:image3
        },
    ]
    const [currentIndex,setCurrentIndex] = useState(0)
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
            <div className="max-w-[1920px] h-[500px] w-full py-4 px-4 relative ">
                <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500 object-scale-down"
                     style={{background: `url(${sliders[currentIndex].url})`}}></div>
                <div
                    className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700">
                    <BsChevronCompactLeft onClick={prevSlide}/>
                </div>
                <div
                    className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700">
                    <BsChevronCompactRight onClick={nextSlide}/>
                </div>
                <div className="flex top-4 justify-center py-2">
                    {
                        sliders.map((sliderItems,sliderIndex)=>(<div key={sliderIndex} onClick={()=>moveToSlide(sliderIndex)} className={"text-2xl cursor-pointer"}>
                        <RxDotFilled/>
                        </div>))
                    }
                </div>
            </div>

        </>
    );
}

export default Feturedtiled;