import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from "react-icons/ai";
import {BsFillCartFill, BsPerson} from "react-icons/bs";
import {useState} from "react";
import {TbTruckReturn} from "react-icons/tb";
import {MdHelp, MdOutlineFavorite} from "react-icons/md";
import {FaGoogleWallet} from "react-icons/fa";


function Headernav() {
    const [sideNav,setSideNave] = useState(false)
    return (
        <>
      <div className="max-w-[1520] mx-auto flex justify-between items-center p-4">
          <div className="flex item-center">
              <div onClick={()=>setSideNave(!sideNav)} className="cursor-pointer">
                  <AiOutlineMenu size={25}/>
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl px-2">Yum <span className={"font-bold"}>Eats</span></div>
              <div className="hidden lg:flex item-center bg-gray-200 rounded-full p-1 text-[14px]">
                  <div className="bg-orange-700 rounded-full text-white p-2 text-bold ">Free</div>
                  <p className={"p-2 text-bold"}>Delivery</p>
              </div>
          </div>
          <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
              <AiOutlineSearch size={25}/>
              <input type="text" className={"bg-transparent p-2 w-full focus:outline-none"} placeholder={"Search Meals"} />
          </div>
          <button className={"bg-orange-700 text-white hidden md:flex items-center py-2 rounded-full"}>
              <BsFillCartFill size={25}/> Cart
          </button>
          {sideNav?(<div className={"bg-black/60 fixed w-full h-screen z-10 top-0 left-0"}></div>):("")}
          <div className={sideNav?" fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-200":" fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-200"}>
              <AiOutlineClose onClick={()=>setSideNave(!sideNav)} size={25} className={'absolute right-4 top-4 cursor-pointer'}/>
              <h2 className="text-2xl p-4">Yum <span className={"text-orange-700 font-bold "}>Eats</span>
              <nav>
                  <ul className="flex flex-col p-4 text-gray900">
                      <li className="text-xl py-4 flex">
                          <BsPerson className={"mr-4 text-white bg-black rounded-full"} size={25}/>My Account
                      </li>
                      <li className="text-xl py-4 flex">
                          <TbTruckReturn className={"mr-4 text-white bg-black rounded-full"} size={25}/>Delivery
                      </li>
                      <li className="text-xl py-4 flex">
                          <MdOutlineFavorite className={"mr-4 text-white bg-black rounded-full"} size={25}/>My Favourite
                      </li>
                      <li className="text-xl py-4 flex">
                          <FaGoogleWallet className={"mr-4 text-white bg-black rounded-full"} size={25}/>My Wallet
                      </li>
                      <li className="text-xl py-4 flex">
                          <MdHelp className={"mr-4 text-white bg-black rounded-full"} size={25}/>Help
                      </li>

                  </ul>
              </nav>
              </h2>
          </div>

      </div>

        </>
    );
}

export default Headernav;