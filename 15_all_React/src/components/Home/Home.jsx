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
    <div className='dark:bg-gray-950 dark:text-white light:bg-white light:text-black min-h-screen'>
    <div className='relative inline-block w-full'>
      <img src={homePageimg} alt="Background Image" className='w-full h-32 sm:h-64 md:h-96 lg:h-125 block object-cover'/>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 p-3 sm:p-4 md:p-6 rounded-lg text-center text-white max-w-xs sm:max-w-md md:max-w-lg">
        <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold">Kushal Mittan</h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-2xl mt-2">Graduated from Chandigarh University</p>
      </div>
    </div>

    <div className='px-4 py-4'>
      <h3 className='text-lg sm:text-xl md:text-2xl text-center mt-3'>Enter your GitHub Username Here and Get Details</h3>
      <div className='flex justify-center text-base sm:text-lg md:text-2xl mt-5 dark:bg-gray-950 dark:text-white light:bg-white light:text-black'>
      
      <form onSubmit={handleInputSubmit} className='flex w-full sm:w-auto border-2 rounded-2xl overflow-hidden'>
        <input type="text" name="searchGitAccount" id="searchGitAccount" placeholder='GitHub Username' 
        className='border-none p-2 sm:p-3 text-sm sm:text-base flex-grow sm:flex-grow-0 dark:bg-gray-800 dark:text-white light:bg-white light:text-black'/>
        <button type="submit" className='light:bg-blue-500 dark:bg-blue-900 font-bold p-2 sm:p-3 hover:bg-blue-400 transition duration-300 ease-in-out cursor-pointer text-sm sm:text-base whitespace-nowrap'>Submit</button>
      </form>
      </div>
    </div>
    <div className='h-10'></div>
    <div className='px-4 pb-4'>

{
  searchUsername ? <GitHubDetails gitUsername = {searchUsername}/> : <div></div>
}
    
  </div>


    </div>
    
  )
}

export default Home
