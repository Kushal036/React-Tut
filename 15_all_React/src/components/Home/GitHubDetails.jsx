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
      gitHubData.login ? <div> 
        <div className='p-7 flex justify-around border-b pb-5 '>
      <div className="left w-2/5">
        <img src={gitHubData.avatar_url} alt="ProfilePhoto" className='rounded-full border-2 light:border-black dark:border-white' />
      </div>
      <div className="right  p-5 w-3/5">
        <div className='flex justify-between'>
          <h1 className='text-2xl'>GitHub UserName - <span className='font-bold'> {gitHubData.login}</span></h1>
          <a href={gitHubData.html_url} target='_blank' className='text-blue-950 bg-blue-400 py-1 px-3 rounded-3xl border-2 hover:bg-blue-300 transition duration-300 ease-in-out'>Profile Link</a>
        </div>
        <p>Number of Followers - <span className='font-bold'>{gitHubData.followers}</span> </p>
        <p>Number of Repositories - <span className='font-bold'>{repos.length}</span></p>
        {
          repos.length==0 ? <></> : (
            <div>
              <div className='text-xl'>Repositories-</div>
        <div className='my-5 grid grid-cols-2 gap-4 '>
          {repos.map((repo) => (
            <div key={repo.id} className='border-2 p-4 rounded-2xl border-gray-400'>
              <div className='flex justify-between '>
                <div className='text-xl font-medium hover:underline transition duration-300 ease-in-out'><a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name} </a> </div>
                <div className='light:bg-blue-200 light:text-blue-950
                dark:bg-blue-950 dark:text-white rounded-2xl p-1 mb-1 border'>{repo.visibility?.toUpperCase()}</div>
              </div>
              <div>{repo.description}</div>
            </div>
          ))}
        </div>
            </div>
          )
          
        }
        
      </div>
    </div>
      </div> : <div className='text-3xl text-center p-10'>        
        Not a User !
     </div>
    }
    
    </>
  )
}

export default GitHubDetails
