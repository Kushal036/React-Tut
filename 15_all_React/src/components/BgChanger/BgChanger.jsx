import React, { useEffect, useState } from 'react'

function BgChanger() {
  const [color , setColor] = useState('white')
  useEffect(()=>{
    document.getElementById('mainbox').style.backgroundColor = color;
  },[color])
  return (
    <div id='mainbox' className='h-screen flex flex-col justify-center px-35 '>
      
      <button className='bg-black text-white px-3 py-1 m-3 border-2 border-black  rounded-3xl hover:text-gray-400 hover:scale-125 transition duration-300 ease-in-out' onClick={()=> setColor('black')}>Black</button>

      <button className='bg-white text-black px-3 py-1 m-3 border-2 border-black  rounded-3xl hover:text-gray-400 hover:scale-125 transition duration-300 ease-in-out' onClick={()=> setColor('white')}>White</button>

      <button className='bg-red-600 text-white px-3 py-1 m-3 border-2 border-black rounded-3xl hover:text-gray-400 hover:scale-125 transition duration-300 ease-in-out' onClick={()=> setColor('red')}>Red</button>

      <button className='bg-yellow-300 text-black px-3 py-1 m-3 border-2 border-black  rounded-3xl hover:text-gray-400 hover:scale-125 transition duration-300 ease-in-out' onClick={()=> setColor('yellow')}>Yellow</button>

      <button className='bg-blue-500 text-white px-3 py-1 m-3 border-2 border-black  rounded-3xl hover:text-gray-400 hover:scale-125 transition duration-300 ease-in-out' onClick={()=> setColor('blue')}>Blue</button>


      <button className='bg-gray-500 text-white px-3 py-1 m-3 border-2 border-black  rounded-3xl hover:text-gray-400 hover:scale-125 transition duration-300 ease-in-out' onClick={()=> setColor('gray')}>Gray</button>


      <button className='bg-orange-400 text-white px-3 py-1 m-3 border-2 border-black  rounded-3xl hover:text-gray-400 hover:scale-125 transition duration-300 ease-in-out' onClick={()=> setColor('orange')}>Orange</button>
      
    </div>
  )
}

export default BgChanger
