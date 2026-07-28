import { createContext } from "react";

export const TodoContext = createContext({
    todos :[
        {
            id:1,
            todo : "todo message",
            completed :false
        }
    ],
    addTodo : (todo)=>{},
    updateTodo : (id,todo)=>{},
    deleteTodo : (id)=>{},
    toggleTodo : (id)=>{}

})

export const TodoProvider = TodoContext.Provider 