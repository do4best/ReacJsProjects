import kabab from './kabab.jpg'
import pizza from './pizza.jpg'
import burger from './burger.jpg'
import buryani from './baryani.jpg'

const getImage1=()=>{
    return new URL(`./{kabab}`,import.meta.url).href
}
export const topPicks=[
    {
        id:1,
        title:'Kabab',
        price:"500Rs",
        img: {kabab}
        
    },
    {
        id:2,
        title:'Pizza',
        price:"1500Rs",
        img: {pizza}

    },
    {
        id:3,
        title:'Burger',
        price:"150Rs",
        img: {burger}

    },
    {
        id:4,
        title:'Baryani',
        price:"750Rs",
        img: {buryani}

    },
]