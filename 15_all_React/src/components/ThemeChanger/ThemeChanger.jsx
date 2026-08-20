import React from 'react'

function ThemeChanger() {
  return (
    <div className=''>
      <div className='min-h-screen flex flex-col justify-center px-4 text-lg sm:text-2xl md:text-3xl dark:bg-gray-950 dark:text-white light:bg-white light:text-black'>
        <div className='mx-auto font-bold dark:bg-gray-950 light:bg-white text-center'>
          Click the Button on the top right corner to change Theme
        </div>
      </div>
    </div>
  )
}

export default ThemeChanger
