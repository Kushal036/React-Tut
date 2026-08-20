import React, { useEffect, useState } from 'react'
import { githubData } from '../../Hooks/githubData'
import { gitReposData } from '../../Hooks/gitReposData'

function GitHubDetails({ gitUsername }) {
  const gitHubData = githubData(gitUsername)
  const gitreposData = gitReposData(gitUsername)
  const repos = Array.isArray(gitreposData) ? gitreposData : []
  const [isUser , setIsUser] = useState()
  useEffect(()=>{
    if(gitHubData.login){
      setIsUser(true)
    } else{
      setIsUser(false)
    }

  },[gitHubData])

  return (
    <>
    {
      gitHubData.login ? <div className='px-4 py-6 sm:px-6 md:px-8'> 
        <div className='bg-gray-200 dark:bg-gray-800 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg'>
          <div className='flex flex-col md:flex-row gap-6 md:gap-8'>
            {/* Left side - Profile Image */}
            <div className="flex-shrink-0 flex justify-center md:justify-start">
              <img src={gitHubData.avatar_url} alt="ProfilePhoto" className='rounded-full border-4 light:border-black dark:border-white w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40' />
            </div>
            
            {/* Right side - Profile Info */}
            <div className="flex-grow">
              <div className='flex flex-col md:flex-row md:justify-between gap-3 md:gap-4 md:items-start mb-4'>
                <h1 className='text-base sm:text-xl md:text-2xl font-bold'>
                  <span className='text-gray-600 dark:text-gray-400'>GitHub: </span>
                  <span className='break-words'> {gitHubData.login}</span>
                </h1>
                <a href={gitHubData.html_url} target='_blank' rel='noopener noreferrer' className='text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg border-2 border-blue-700 transition duration-300 ease-in-out w-fit text-xs sm:text-sm md:text-base font-semibold'>Visit Profile</a>
              </div>
              
              <div className='space-y-2 mb-4'>
                <p className='text-sm sm:text-base text-gray-700 dark:text-gray-300'>
                  <span className='font-semibold'>Followers:</span> <span className='font-bold text-blue-600'>{gitHubData.followers}</span> 
                </p>
                <p className='text-sm sm:text-base text-gray-700 dark:text-gray-300'>
                  <span className='font-semibold'>Repositories:</span> <span className='font-bold text-blue-600'>{repos.length}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Repositories Section */}
          {repos.length > 0 && (
            <div className='mt-8 pt-6 border-t-2 border-gray-300 dark:border-gray-700'>
              <h2 className='text-lg sm:text-xl md:text-2xl font-bold mb-6'>Repositories ({repos.length})</h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5'>
                {repos.map((repo) => (
                  <div key={repo.id} className='border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-4 rounded-xl hover:shadow-lg transition duration-300'>
                    <div className='flex justify-between items-start gap-2 mb-2'>
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className='text-sm sm:text-base font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 hover:underline break-words flex-grow'>
                        {repo.name}
                      </a>
                      <span className='light:bg-blue-100 light:text-blue-900 dark:bg-blue-900 dark:text-blue-200 rounded-full px-2 py-1 border text-xs font-medium whitespace-nowrap ml-2'>
                        {repo.visibility?.toUpperCase()}
                      </span>
                    </div>
                    <p className='text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2'>{repo.description || 'No description'}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div> : <div className='text-lg sm:text-2xl md:text-3xl text-center p-6 sm:p-10'>        
        User - {gitHubData.message} !
     </div>
    }
    </>
  )
}

export default GitHubDetails
