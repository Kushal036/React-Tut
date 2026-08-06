import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id : Date.now(),
            todo : "Message",
            editable : true 
        }
    ],
    addTodo : (todo)=>{},
    updateTodo : (id , todo) =>{},
    deleteTodo : (id) =>{},
    isEditable : (id)=>{}
});


export const TodoProvider = TodoContext.Provider