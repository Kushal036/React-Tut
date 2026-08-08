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
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat "
            style={{
                backgroundImage: `url(${CurrencyConvertorBackground})`,
            }}>
              <div className='backdrop-blur-md dark:bg-black/70 light:bg-white/50  p-20 rounded-3xl text-2xl'>

              
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
      <button className='light:bg-blue-600 dark:bg-blue-900  px-5 text-2xl text-white py-2 rounded-2xl mt-5 border border-black hover:bg-blue-400 transition duration-300 ease-in-out ' onClick={swap}>SWAP</button>
      </div>
      <InputOutput 
      lable={"To"} 
      currencyOptions={currencyOptions} 
      onCurrencyChange={(currency)=>setToCurrrency(currency)} 
      amount={convertedAmount}  
      onAmountChange={(amount)=>setConvertedAmount(amount)} 
      currencyName={ToCurrency}
      isInputDisabled={true}/>

      <div className='flex justify-center'>
      <button type="submit" className='light:bg-blue-600 dark:bg-blue-900  px-5 text-2xl text-white py-2 rounded-2xl mt-5 border border-black hover:bg-blue-400 transition duration-300 ease-in-out '>Convert from {FromCurrency.toUpperCase()} to {ToCurrency.toUpperCase()}</button>
      </div>
      </form>
      </div>
    </div>
  )
}

export default CurrencyConvertor
