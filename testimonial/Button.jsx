
import PropTypes from "prop-types";


function Button({text,btnClass,icon,OnClick}) {
    return (
        <>
            <button className={!btnClass?`btn btn-dark`:`btn btn-${btnClass}`} onClick={OnClick}><span style={{display:"flex",justifyContent:"center"}}>{icon}{!text?"click":text}</span></button>

        </>
    );
}

export default Button;
Button.propTypes={
    text:PropTypes.any,
    btnClass:PropTypes.any,
    icon:PropTypes.any,
    OnClick:PropTypes.any

}