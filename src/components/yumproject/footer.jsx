import React from 'react';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithub,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from "react-icons/fa";

function Footer(props) {
    return (
        <>
        <div className="max-w-[full] m-auto py-2 bg-[#24262b]">
            <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
                <div>
                    <h1 className={"w-full text-3xl bold text-orange-500"}>YumEats</h1>
<p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequuntur doloremque ea est ex illum inventore ipsum laborum modi molestiae non officia officiis perferendis quae quam recusandae saepe, sit vel!</span><span>A ad amet assumenda autem corporis dolores eligendi explicabo fugiat iusto labore molestias necessitatibus nihil odit optio placeat quas quia, quos recusandae repudiandae rerum saepe vel vitae! Dolore, qui, repellat.</span></p>
                <div className="flex justify-between md:w-[75%] my-6">
                    <FaFacebookSquare size={30}/>
                    <FaInstagram size={30}/>
                    <FaTwitterSquare size={30}/>
                    <FaGithubSquare size={30}/>
                    <FaDribbbleSquare size={30}/>

                </div>
                
                </div>
                <div className="lg:col-span-2 flex justify-between mt-6">
                    <div>
                        <h6 className="font-medium text-[#9b9b9b] ">Locations</h6>
                        <ul>
                            <li className={"py-2 text-sm"}>Lahore</li>
                            <li className={"py-2 text-sm"}>Bombai</li>
                            <li className={"py-2 text-sm"}>Beging</li>
                            <li className={"py-2 text-sm"}>Sydney</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-medium text-[#9b9b9b] ">Locations</h6>
                        <ul>
                            <li className={"py-2 text-sm"}>Lahore</li>
                            <li className={"py-2 text-sm"}>Bombai</li>
                            <li className={"py-2 text-sm"}>Beging</li>
                            <li className={"py-2 text-sm"}>Sydney</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-medium text-[#9b9b9b] ">Locations</h6>
                        <ul>
                            <li className={"py-2 text-sm"}>Lahore</li>
                            <li className={"py-2 text-sm"}>Bombai</li>
                            <li className={"py-2 text-sm"}>Beging</li>
                            <li className={"py-2 text-sm"}>Sydney</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-medium text-[#9b9b9b] ">Locations</h6>
                        <ul>
                            <li className={"py-2 text-sm"}>Lahore</li>
                            <li className={"py-2 text-sm"}>Bombai</li>
                            <li className={"py-2 text-sm"}>Beging</li>
                            <li className={"py-2 text-sm"}>Sydney</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
}

export default Footer;