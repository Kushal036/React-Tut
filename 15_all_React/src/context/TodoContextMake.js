import { createContext, useContext } from "react";

export const TodoContextMake = createContext({
    todos: [
        {
            id : Date.now(),
            todo : "Message",
            editable : false 
        }
    ],
    addTodo : (todo)=>{},
    updateTodo : (id , todo) =>{},
    deleteTodo : (id) =>{},
    isEditable : (id)=>{}
});


export const TodoProvider = TodoContextMake.Provider