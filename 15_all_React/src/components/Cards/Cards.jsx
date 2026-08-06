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
    <div>
      {loading ? (
        <div className=' w-full h-screen flex flex-col align-middle justify-center'>
          <img src={LoadingLogo} alt="Loading" className='w-20 h-20 mx-auto'/>
          <span className='mx-auto text-3xl my-7 font-bold '>Loading...</span>
        </div>
      ) : (
        <div className='flex flex-col '>
          <div className='m-10 grid grid-cols-2 gap-6'>
            {Array.isArray(data) && data.slice(0, visibleNo).map((oneNews)=>(
              <BlogCard key={oneNews.uri} image={oneNews.image} title={oneNews.title} content={oneNews.body} newsLink={oneNews.url} sourse={oneNews.source?.uri}/>
            ))}
          </div>
          <button className='bg-blue-500 border-3 w-100 mx-auto rounded-3xl mb-10 text-2xl font-bold hover:bg-blue-200 hover:scale-110   transition duration-300 ease-in-out' onClick={()=>setVisibleNo(visibleNo+10)}>Load More</button>
        </div>
      )}
    </div>
  )
}

export default Cards
