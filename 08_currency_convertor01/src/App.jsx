import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'

function App() {
  const [amount , setAmount] = useState(0)
  const [from , setFrom] = useState('usd')
  const [to , setTo] = useState('inr')
  const [changedAmount , setChangedAmount] = useState(0)

  const data = useCurrencyInfo(from)
  const swap = ()=>{
    setTo(from)
    setFrom(to)
    setAmount(changedAmount)
    setChangedAmount(amount)
  }

  const convert = ()=>{
    setChangedAmount( Number(amount) * data[to])
  }

  
const options = Object.keys(data)
// console.log(options);

     return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: 'url("https://images.pexels.com/photos/38597697/pexels-photo-38597697.jpeg")',
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount = {amount}
                                onAmountChange = {((amount)=> setAmount(amount))}
                                onCurrencyChange={((currency)=> setFrom(currency))}
                                currencyOptions={options}
                                selectCurrency={from}

                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount = {changedAmount}
                                onAmountChange = {((amount)=> setAmount(amount))}
                                onCurrencyChange={((currency)=> setFrom(currency))}
                                currencyOptions={options}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from} to {to}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
  }
export default App
