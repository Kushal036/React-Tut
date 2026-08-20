import React, { useState } from 'react'
import {currencyData} from '../../Hooks/currencyData'
import InputOutput from './InputOutput'
import CurrencyConvertorBackground from '../../assets/CurrencyConvertorBackground.jpg'

function CurrencyConvertor() {
  const [FromCurrency , setFromCurrency] = useState('usd');
  const [ToCurrency , setToCurrrency] = useState('inr')
  const [givenAmount , setGivenAmount] = useState(0)
  const [convertedAmount , setConvertedAmount] = useState(0)
  const data = currencyData(FromCurrency)
  const currencyOptions = Object.keys(data)
  
  const convert= ()=>{  
    setConvertedAmount(data[ToCurrency] * givenAmount)   
  }

  const swap = ()=>{
    setFromCurrency(ToCurrency)
    setToCurrrency(FromCurrency)
    setGivenAmount(convertedAmount)
    setConvertedAmount(givenAmount)
  }

  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat px-4 py-8"
            style={{
                backgroundImage: `url(${CurrencyConvertorBackground})`,
            }}>
              <div className='backdrop-blur-md dark:bg-black/70 light:bg-white/50 p-4 sm:p-8 md:p-12 lg:p-16 rounded-3xl text-base sm:text-lg md:text-lg w-full sm:w-auto max-w-sm sm:max-w-md md:max-w-2xl'>

              
      <form onSubmit={(e)=>{
        e.preventDefault();
        convert();
      }}>
      <InputOutput 
      lable={"From"} 
      currencyOptions={currencyOptions} 
      onCurrencyChange={(currency)=>setFromCurrency(currency)} 
      amount={givenAmount} 
      onAmountChange={(amount)=>setGivenAmount(amount)} 
      currencyName={FromCurrency}/>
      <div className='flex justify-center'>
        <button className='light:bg-blue-600 dark:bg-blue-900 px-4 sm:px-6 md:px-8 text-base sm:text-lg md:text-lg text-white py-2 sm:py-3 rounded-2xl mt-6 md:mt-8 border border-black hover:bg-blue-400 transition duration-300 ease-in-out font-semibold' onClick={swap}>SWAP</button>
      </div>
      <InputOutput 
      lable={"To"} 
      currencyOptions={currencyOptions} 
      onCurrencyChange={(currency)=>setToCurrrency(currency)} 
      amount={convertedAmount}  
      onAmountChange={(amount)=>setConvertedAmount(amount)} 
      currencyName={ToCurrency}
      isInputDisabled={true}/>

      <div className='flex justify-center mt-6 md:mt-8'>
        <button type="submit" className='light:bg-blue-600 dark:bg-blue-900 px-4 sm:px-6 md:px-8 text-base sm:text-lg md:text-lg text-white py-2 sm:py-3 rounded-2xl border border-black hover:bg-blue-400 transition duration-300 ease-in-out font-semibold whitespace-normal'>Convert {FromCurrency.toUpperCase()} to {ToCurrency.toUpperCase()}</button>
      </div>
      </form>
      </div>
    </div>
  )
}

export default CurrencyConvertor
