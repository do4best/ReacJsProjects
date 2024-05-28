import React, {useContext, useState} from 'react';
import Title from "../esignature/title.jsx";
import PropTypes from "prop-types";
import Button from "../testimonial/Button.jsx";
import {ThemeContext} from "./theme-context.jsx";

function Blog() {
const {theme,changeTheme} = useContext(ThemeContext)

    return (
        <>
        <div className="container m-1">
            <Title text={`My Blog with ${theme} Theme`}/>
            <span style={{position:"absolute",top:10,right:10}}>
                <Button text={theme === "Dark"?"Dark":"Light"} OnClick={changeTheme} btnClass={`{theme === "dark"?"dark":"light"}`}/>
            </span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ex, magnam minus nam necessitatibus nesciunt voluptas. Aut autem consequatur est eveniet, hic in inventore provident reiciendis, rerum sapiente tenetur unde vel! Corporis deserunt ipsam labore laudantium nam quasi. Beatae cupiditate facere itaque porro repellat. Cumque incidunt nostrum similique sint vel.</p>
        </div>
        </>
    );
}

export default Blog;
Blog.propTypes={
    theme:PropTypes.string,


}