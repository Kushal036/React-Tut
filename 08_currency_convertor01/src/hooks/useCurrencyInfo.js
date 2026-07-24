import React from 'react'
import { useState , useEffect } from 'react'


function useCurrencyInfo(currency) {
    const [data , setdata] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((data)=> data.json()).then((value)=> {
            setdata(value[currency])
            // console.log("Value from hook " , value);
            
        })
    } , [currency])
    
    return data
}

export default useCurrencyInfo
