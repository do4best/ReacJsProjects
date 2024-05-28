
import Blog from "./blog.jsx";
import {useEffect, useState} from "react";
import {ThemeContext,themes} from "./theme-context.jsx";
function BlogDark() {
    const [theme,setTheme] = useState(themes.light)
    function changeTheme(){

        theme === themes.light?setTheme(themes.dark):setTheme(themes.light)
    }
let docBody = document.body;
    useEffect(() => {
        switch (theme){
            case themes.light:
                docBody.classList.remove("bg-dark")
                docBody.classList.remove("text-light")
                docBody.classList.add("bg-light")
                docBody.classList.add("text-dark")
                break;
            case themes.dark:
                docBody.classList.remove("bg-light")
                docBody.classList.remove("text-dark")
                docBody.classList.add("bg-dark")
                docBody.classList.add("text-light")
        }
    }, [theme]);
    return (
        <>
            <ThemeContext.Provider value={{theme,changeTheme}}>
        <Blog/>
            </ThemeContext.Provider>
        </>
    );
}

export default BlogDark;