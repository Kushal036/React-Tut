import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useLoaderData } from 'react-router'
function GithubHC() {
  const data = useLoaderData()
  // const [data , setData] = useState([])    
    //     useEffect(() => {
    //     fetch(`https://api.github.com/users/hiteshchoudhary`).
    //     then((data)=> data.json())
    //     .then((data) => setData(data) )
    //     }, [])
        
  return (
    <div className='w-full bg-gray-500 p-4 m-4 rounded-2xl text-3xl align-center text-center'>
      GitHub Followers of hitesh are {data.followers} 
      <img src={data.avatar_url} alt="Photo" />
      <a href={data.html_url} target='_blank' className='text-blue-500'>GithubLink</a>
    </div>
  )
}

export default GithubHC

export const CallTheApi  = async () =>{
  const data = await fetch(`https://api.github.com/users/hiteshchoudhary`)
  return data.json()
} 