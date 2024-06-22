'use client'
import React, {useEffect, useState} from 'react';
 import './style.css';
function TodoForm(props) {
    const {getNewlyCreated} = props;
    const [inputValue,setInputValue] = useState('')
    const handelSubmit=(event)=>{
        event.preventDefault()

        const newlyCreatedtodo = {
            id:Math.floor(Math.random()*1000),
            text:inputValue
        }
        getNewlyCreated(newlyCreatedtodo)


    }
    const handelInputChange=(event)=>{
        const {value} = event.target;
        setInputValue(value)


    }
    return (
        <>
            <form className={"to-form"} onSubmit={handelSubmit}>
                <input type="text" value={inputValue} className={"to-input"} name={"input"} onChange={handelInputChange} placeholder={"Please Enter the todo list"}/>
                <button type={"submit"} className={"todo-button"}>Add to do</button>
            </form>
        </>
    );
}

export default TodoForm;