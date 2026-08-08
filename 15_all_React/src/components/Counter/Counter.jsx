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
    <div className='flex flex-col justify-center align-middle w-full items-center h-160 dark:bg-gray-950 dark:text-white light:bg-white light:text-black' >
      <h1 className='text-xl'>Counter is at</h1>
      <div className={`text-[12rem] ${number<5?"text-red-500": (number<10?"text-yellow-400":(number<20?"text-green-600":(number<25?"text-yellow-400":"text-red-500")))}`}>{number}</div>
      <div>

      <button onClick={increaseBtn} className='bg-gray-600 p-5 rounded-3xl mx-20 text-xl hover:bg-gray-400 transition duration-300 ease-in-out border-3 '>Increase The Number to {number==30 ? "Can not be more than 30":number+1 } </button>
      <button onClick={decreaseBtn} className='bg-gray-600 p-5 rounded-3xl mx-20 text-xl hover:bg-gray-400 transition duration-300 ease-in-out border-3'>Decrease The Nunmber to {number==0 ? "Can not be less than 0":number-1 }  </button>
      </div>
    </div>
  )
}

export default Counter
