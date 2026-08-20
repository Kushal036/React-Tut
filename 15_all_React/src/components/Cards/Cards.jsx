import React,{useEffect, useState} from 'react'
import BlogCard from './BlogCard'
import homePage from '../../assets/homePageimg.jpg'
import {newsData} from '../../Hooks/newsData'
import LoadingLogo from '../../assets/loadingLogo.webp'
function Cards() {
  const [visibleNo , setVisibleNo] = useState(10)
  const a = "" ;
  const { data, loading } = newsData(a);

  return (
    <div className='dark:bg-gray-950 dark:text-white light:bg-gray-300 light:text-black min-h-screen'>
      {loading ? (
        <div className='w-full min-h-screen flex flex-col justify-center items-center'>
          <img src={LoadingLogo} alt="Loading" className='w-16 h-16 sm:w-20 sm:h-20 mx-auto'/>
          <span className='mx-auto text-xl sm:text-2xl md:text-3xl my-7 font-bold'>Loading...</span>
        </div>
      ) : (
        <div className='flex flex-col'>
          <div className='mx-4 sm:mx-6 md:m-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 my-10'>
            {Array.isArray(data) && data.slice(0, visibleNo).map((oneNews)=>(
              <BlogCard key={oneNews.uri} image={oneNews.image} title={oneNews.title} content={oneNews.body} newsLink={oneNews.url} sourse={oneNews.source?.uri}/>
            ))}
          </div>
          <button className='light:bg-blue-500 light:text-white dark:bg-black dark:text-white border-3 w-fit px-6 sm:px-8 md:px-12 lg:w-100 mx-auto rounded-3xl mb-10 text-base sm:text-lg md:text-2xl font-bold hover:bg-blue-200 hover:scale-110 transition duration-300 ease-in-out' onClick={()=>setVisibleNo(visibleNo+10)}>Load More</button>
        </div>
      )}
    </div>
  )
}

export default Cards
