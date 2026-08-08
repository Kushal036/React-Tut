import React from 'react'
import BasicForNews from '../../assets/BasicForNews.jpg'

function BlogCard({image , title , content ,newsLink , sourse}) {

  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-xl dark:bg-gray-950 dark:text-white light:bg-gray-300 light:text-black shadow-md md:max-w-6xl my-5 border-2">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img
        className="h-48 w-full object-cover md:h-full md:w-48 select-none pointer-events-none"
        src={image ? image : BasicForNews}
        alt="Aricle Image"
      />
    </div>
    <div className="p-8">
      <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">{sourse}</div>
      <h2 className="mt-1 block text-lg leading-tight font-medium dark:bg-gray-950 dark:text-white light:bg-gray-300 light:text-black hover:underline cursor-pointer">
        {title}
      </h2>
      <div className="mt-2 text-gray-500 line-clamp-5 ">
        <p className='line-clamp-5'>
          {content}
        </p>
         
        
         <a href={newsLink} target='_blank' className='text-blue-800 mt-4 font-medium hover:underline transition ease-in-out'>ReadMore...</a>
      </div>
    </div>
  </div>
</div>
  )
}

export default BlogCard
