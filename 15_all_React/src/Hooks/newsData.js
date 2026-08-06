import { useEffect, useState } from "react"

export const newsData = (a)=>{
    const [data , setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const apiKey = String(import.meta.env.VITE_API_Key)

    const apiUrl = `https://eventregistry.org/api/v1/article/getArticles?resultType=articles&keyword=Bitcoin&keyword=Ethereum&keyword=Litecoin&keywordOper=or&lang=eng&articlesSortBy=date&includeArticleConcepts=true&includeArticleCategories=true&apiKey=${apiKey}`

    useEffect(()=>{
        fetch(apiUrl)
        .then((response)=>response.json())
        .then((payload)=> {
            setData(payload.articles?.results || [])
            setLoading(false)
        })
        .catch((error)=>{
            console.log(error)
            setData([])
            setLoading(false)
        })
    },[])

      return { data, loading };
} 
