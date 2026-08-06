import { useEffect, useState } from "react"

export const githubData = (username)=>{
    const [data , setData] = useState({})
    useEffect(()=>{

        fetch(`https://api.github.com/users/${username}`)
        .then((data)=>data.json())
        .then((data)=> {setData(data)}) 
        
    },[username])
      
      return data;
}
