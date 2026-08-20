import React from 'react'
import BasicForNews from '../../assets/BasicForNews.jpg'

function BlogCard({image , title , content ,newsLink , sourse}) {

  return (
    <div className="mx-auto w-full overflow-hidden rounded-xl dark:bg-gray-950 dark:text-white light:bg-gray-300 light:text-black shadow-md hover:shadow-lg transition duration-300 my-3 border-2 flex flex-col h-full">
      <div className="flex-shrink-0">
        <img
          className="h-40 sm:h-48 w-full object-cover select-none pointer-events-none"
          src={image ? image : BasicForNews}
          alt="Article Image"
        />
      </div>
      <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col">
        <div className="text-xs sm:text-sm font-semibold tracking-wide text-indigo-500 uppercase">{sourse}</div>
        <h2 className="mt-2 block text-base sm:text-lg md:text-lg leading-tight font-bold dark:bg-gray-950 dark:text-white light:bg-gray-300 light:text-black hover:underline cursor-pointer line-clamp-2">
          {title}
        </h2>
        <div className="mt-3 text-gray-600 dark:text-gray-400 line-clamp-3 text-xs sm:text-sm flex-grow">
          <p>
            {content}
          </p>
        </div>
        <a href={newsLink} target='_blank' rel='noopener noreferrer' className='text-blue-600 dark:text-blue-400 mt-4 inline-block font-medium hover:underline transition ease-in-out text-xs sm:text-sm'>
          Read More →
        </a>
      </div>
    </div>
  )
}

export default BlogCard
