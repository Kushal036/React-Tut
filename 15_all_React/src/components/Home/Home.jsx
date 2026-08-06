import React from 'react'
import homePageimg from '../../assets/homePageimg.jpg'
import { githubData } from '../../Hooks/githubData'

function Home() {
  const gitHubData = githubData("kushal036");
  
  return (
    <>
    <div className='relative inline-block w-full'>
      <img src={homePageimg} alt="Background Image" className=' w-full h-125 block object-cover'/>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 p-6 rounded-lg text-center text-white">
    <h2 className="text-8xl font-bold">Kushal Mittan</h2>
    <p className="text-2xl  mt-2">Graduated from Chandigarh University</p>
  </div>
    </div>
    <div className='m-5 flex justify-center'>  
      <div className="left">
        <img src={gitHubData.avatar_url} alt="ProfilePhoto"  className='rounded-full'/>
      </div>
      <div className="right">
        <h1>GitHub Details</h1>
        <p>Number of Followers - <span>{gitHubData.followers}</span> </p>
      </div>
    </div>
    </>
  )
}

export default Home
