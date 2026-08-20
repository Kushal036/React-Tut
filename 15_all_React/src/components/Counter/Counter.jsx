import React, { useState } from 'react'

function Counter() {
  let [number , setNumber] = useState(15);
  const increaseBtn = ()=>{ 
    if(number>=30){
      alert('Number should not be greater than 30')
    }else{
      number++;
      setNumber(number);
    }
  }
  const decreaseBtn = ()=>{
    if(number<=0){
      alert('Number should not be less than 0')
    }else {
      number--;
       setNumber(number);
    }
  }

  

  return (
    <div className='flex flex-col justify-center items-center w-full min-h-screen px-4 py-8 dark:bg-gray-950 dark:text-white light:bg-white light:text-black'>
      <h1 className='text-lg sm:text-2xl md:text-3xl'>Counter is at</h1>
      <div className={`text-5xl sm:text-7xl md:text-9xl lg:text-[12rem] font-bold ${number<5?"text-red-500": (number<10?"text-yellow-400":(number<20?"text-green-600":(number<25?"text-yellow-400":"text-red-500")))}`}>{number}</div>
      <div className='flex flex-col sm:flex-row gap-4 mt-8'>

        <button onClick={increaseBtn} className='bg-gray-600 px-3 sm:px-5 py-2 sm:py-5 rounded-3xl text-sm sm:text-lg md:text-xl hover:bg-gray-400 transition duration-300 ease-in-out border-3'>Increase to {number==30 ? "Max":number+1 } </button>
        <button onClick={decreaseBtn} className='bg-gray-600 px-3 sm:px-5 py-2 sm:py-5 rounded-3xl text-sm sm:text-lg md:text-xl hover:bg-gray-400 transition duration-300 ease-in-out border-3'>Decrease to {number==0 ? "Min":number-1 }  </button>
      </div>
    </div>
  )
}

export default Counter
