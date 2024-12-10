import Topnave from "./components/yumproject/topnave.jsx";
import Featured from "./components/yumproject/featured.jsx";
import Delivery from "./components/yumproject/delivery.jsx";
import TopPics from "./components/yumproject/topPics.jsx";
import SimpleImage from "./components/yumproject/simpleImage.jsx";
import Meals from "./components/yumproject/meals.jsx";
import NewLatter from "./components/yumproject/newLatter.jsx";
import NewLetter from "./components/yumproject/newLetter.jsx";
import Footer from "./components/yumproject/footer.jsx";

export default function App() {
    return (
     <>
     <Topnave/>
         <Featured/>
         <Delivery/>
         <TopPics/>
         <Meals/>

         <NewLetter/>
         <Footer/>

     </>
    )
}