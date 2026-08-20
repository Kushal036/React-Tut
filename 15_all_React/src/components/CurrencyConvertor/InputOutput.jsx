import React, { useState } from 'react'

function InputOutput({
    lable,
    currencyName ,
    amount = 0 , 
    onCurrencyChange,
    onAmountChange,
    isInputDisabled,
    currencyOptions = []

}) {
    
  return (
    <div className='my-6'>
        <label className='text-base sm:text-lg md:text-lg font-semibold block dark:text-white light:text-black mb-3'>{lable}</label>
      <div className='flex flex-col sm:flex-row gap-2 sm:gap-0'>
        <input type="number" className='dark:bg-gray-950 dark:text-white light:bg-white light:text-black rounded-2xl sm:rounded-l-2xl py-2 sm:py-3 px-3 sm:px-5 text-base sm:text-lg md:text-xl font-medium border flex-grow' value={amount} onChange={(e)=>(e.target.value>=0)?onAmountChange(e.target.value):onAmountChange(0) } disabled={isInputDisabled}/>

        <select name="currency" id="currency" value={currencyName} onChange={(e)=>onCurrencyChange(e.target.value)} className='light:bg-blue-600 dark:bg-blue-900 rounded-2xl sm:rounded-r-2xl py-2 sm:py-3 px-3 sm:px-5 text-base sm:text-lg md:text-lg font-medium text-white border border-black sm:border-l-0 hover:bg-blue-400 transition duration-300 ease-in-out'>
          {currencyOptions.map((currency)=>(
            <option key={currency} className='bg-white text-black'>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputOutput
