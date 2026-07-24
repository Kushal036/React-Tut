import React from 'react'
import {useState , useEffect } from 'react'


function useCurrencyinfo(currency) {
    const [data , setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((data)=> data.json())
        .then((data)=> {setData(data[currency])}).catch((e)=> console.log("error" , e))
    } , [currency])
    return data
}

export default useCurrencyinfo
