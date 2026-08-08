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
    <div>
        <label className='text-md block dark:text-white light:text-black'>{lable}</label>
      <input type="number" className='dark:bg-gray-950 dark:text-white light:bg-white light:text-black rounded-l-2xl py-2 px-5  text-4xl  font-medium border'  value={amount} onChange={(e)=>(e.target.value>=0)?onAmountChange(e.target.value):onAmountChange(0) } disabled={isInputDisabled}/>

      <select name="currency" id="currency" value={currencyName} onChange={(e)=>onCurrencyChange(e.target.value)} className='light:bg-blue-600 dark:bg-blue-900 py-1 px-5  text-4xl  font-medium rounded-r-2xl text-white border border-black border-l-0 hover:bg-blue-400 transition duration-300 ease-in-out '>
        {currencyOptions.map((currency)=>(
          <option key={currency} className='bg-white text-black'>{currency}</option>
        ))}
      </select>
    </div>
  )
}

export default InputOutput
