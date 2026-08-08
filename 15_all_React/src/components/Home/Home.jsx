import React, { useEffect, useState } from 'react'
import homePageimg from '../../assets/homePageimg.jpg'
import { githubData } from '../../Hooks/githubData'
import {gitReposData} from '../../Hooks/gitReposData'
import GitHubDetails from './GitHubDetails'
function Home() {
  const [searchUsername , setSearchUsername] = useState('kushal036')
  const gitUsername1 = "kushal036"
  const handleInputSubmit = (e) =>{
    e.preventDefault();
    
        const formData = new FormData(event.target);
    const inputValue = formData.get('searchGitAccount');

    // 4. Update your useState variable
    setSearchUsername(inputValue);
  }
  return (
    <div className='dark:bg-gray-950 dark:text-white light:bg-white light:text-black'>
    <div className='relative inline-block w-full '>
      <img src={homePageimg} alt="Background Image" className=' w-full h-125 block object-cover'/>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 p-6 rounded-lg text-center text-white">
    <h2 className="text-8xl font-bold">Kushal Mittan</h2>
    <p className="text-2xl  mt-2">Graduated from Chandigarh University</p>
  </div>
    </div>

<div>


    <h3 className='text-xl text-center mt-3'>Enter your GutHub Username Here and Get Details</h3>
    <div className=' flex justify-center text-2xl border-2 w-fit mx-auto rounded-2xl mt-5  dark:bg-gray-950 dark:text-white light:bg-white light:text-black'>
      
      <form onSubmit={handleInputSubmit} className=''>
        <input type="text" name="searchGitAccount" id="searchGitAccount" placeholder='GitHub Username' 
        className='border-r-2 p-3 rounded-l-2xl'/>
        <button type="submit" className='light:bg-blue-500 dark:bg-blue-900 font-bold p-3 rounded-r-2xl hover:bg-blue-400 transition duration-300 ease-in-out cursor-pointer'>Submit</button>
      </form>
      </div>
      </div>
      <div className='h-10'></div>
      <div>

{
  searchUsername ? <GitHubDetails gitUsername = {searchUsername}/> : <div></div>
}
    
  </div>


    </div>
    
  )
}

export default Home
