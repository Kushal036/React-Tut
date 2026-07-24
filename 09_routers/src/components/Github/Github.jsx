import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Github() {
    const [data , setData] = useState([])    
    const {userName} = useParams()
        useEffect(() => {
        fetch(`https://api.github.com/users/${userName}`).
        then((data)=> data.json())
        .then((data) => setData(data) )
        }, [])
        
  return (
    <div className='w-full bg-gray-500 p-4 m-4 rounded-2xl text-3xl align-center text-center'>
      GitHub Followers of {userName} are {data.followers} 
      <img src={data.avatar_url} alt="Photo" />
      <a href={data.html_url} target='_blank' className='text-blue-500'>GithubLink</a>
    </div>
  )
}

export default Github
