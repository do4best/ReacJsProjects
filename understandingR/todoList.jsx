'use client'
import React from 'react';
import TodoForm from "@/app/understandingR/todoForm";


function TodoList(props) {
    const handelModifyTodos=(find)=>{
console.log(find)
    }
    return (
        <>
        <TodoForm getNewlyCreated={handelModifyTodos}/></>
    );
}

export default TodoList;