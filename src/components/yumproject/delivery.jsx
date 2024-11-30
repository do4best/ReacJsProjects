import React from 'react';
import mobile from './mobile.jpg'
function Delivery() {
    return (
        <>
        <div className="w-full bg-white py-16 px-4">
            <h3 className="text-orange-500 font-bold text-2xl text-center">Quick Delivery App</h3>
            <div className="w-[1520px] mx-auto grid md:grid-cols-2 gap-2 mt-20">
                <img src={mobile} alt="the mobile" className={"rounded "}/>
                <div className="flex flex-col justify-center">
                    <p className="text-[#00df9a] font-bold pl-1">Get the App</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 pl-1">Limitless Convenience on Demand.</h1>
                    <p className={"pl-1"}> A aliquid asperiores beatae consectetur, dicta dolores earum eveniet illo itaque, laboriosam laborum magni nesciunt quaerat quia sunt, ut vel. Accusamus adipisci assumenda consequatur distinctio dolorem, doloribus earum eos esse eveniet facere fugiat itaque magni natus nesciunt nisi nobis nostrum obcaecati omnis perspiciatis provident quas quis repellendus sed sint soluta veniam, voluptas voluptatum. Dolore, earum inventore. Alias corporis dolorum eum fugiat iusto magni nostrum officia sint vero voluptas! A ab accusantium dicta dolor dolores eius esse est eveniet fuga id illum impedit incidunt magnam modi nam natus nihil officia omnis p
                    </p> <button className={"text-[#00df9a] bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-4 "}>Get Started</button>
                </div>
            </div>
        </div>

        </>
    );
}

export default Delivery;