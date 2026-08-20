import React, { useEffect, useState } from 'react'

function BgChanger() {
  const [color , setColor] = useState('white')
  useEffect(()=>{
    document.getElementById('mainbox').style.backgroundColor = color;
  },[color])
  return (
    <div id='mainbox' className='min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-35 py-10 gap-3'>
      <button className='bg-black text-white px-4 sm:px-6 py-2 sm:py-3 m-1 sm:m-2 border-2 border-black rounded-3xl hover:text-gray-400 hover:scale-105 transition duration-300 ease-in-out font-semibold text-sm sm:text-base' onClick={()=> setColor('black')}>Black</button>

      <button className='bg-white text-black px-4 sm:px-6 py-2 sm:py-3 m-1 sm:m-2 border-2 border-black rounded-3xl hover:text-gray-400 hover:scale-105 transition duration-300 ease-in-out font-semibold text-sm sm:text-base' onClick={()=> setColor('white')}>White</button>

      <button className='bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 m-1 sm:m-2 border-2 border-black rounded-3xl hover:text-gray-400 hover:scale-105 transition duration-300 ease-in-out font-semibold text-sm sm:text-base' onClick={()=> setColor('red')}>Red</button>

      <button className='bg-yellow-300 text-black px-4 sm:px-6 py-2 sm:py-3 m-1 sm:m-2 border-2 border-black rounded-3xl hover:text-gray-400 hover:scale-105 transition duration-300 ease-in-out font-semibold text-sm sm:text-base' onClick={()=> setColor('yellow')}>Yellow</button>

      <button className='bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 m-1 sm:m-2 border-2 border-black rounded-3xl hover:text-gray-400 hover:scale-105 transition duration-300 ease-in-out font-semibold text-sm sm:text-base' onClick={()=> setColor('blue')}>Blue</button>

      <button className='bg-gray-500 text-white px-4 sm:px-6 py-2 sm:py-3 m-1 sm:m-2 border-2 border-black rounded-3xl hover:text-gray-400 hover:scale-105 transition duration-300 ease-in-out font-semibold text-sm sm:text-base' onClick={()=> setColor('gray')}>Gray</button>

      <button className='bg-orange-400 text-white px-4 sm:px-6 py-2 sm:py-3 m-1 sm:m-2 border-2 border-black rounded-3xl hover:text-gray-400 hover:scale-105 transition duration-300 ease-in-out font-semibold text-sm sm:text-base' onClick={()=> setColor('orange')}>Orange</button>
    </div>
  )
}

export default BgChanger
