import React, { useCallback, useEffect, useState } from 'react'

function RandomString() {
  const [isNumbers , setIsNumbers] = useState(false)
  const [isSymbols , setIsSymbols] = useState(false)
  const [lengthOfString , setLengthOfString] = useState(8)
  const [newString , setNewString] = useState('');
  const [copied , setCopied] = useState(false);

  const randomStrings = useCallback(() =>{
    let theString = ''
    let alphabets = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
    const numbers = '1234567890'
    const symbols = '!@#$%^&*()'
    if(isNumbers) alphabets+=numbers;
    if(isSymbols) alphabets+=symbols;
    for(let i = 0; i< lengthOfString; i++){
      let randomNumber = Math.floor(Math.random()* alphabets.length)
      theString+=alphabets[randomNumber]
    }
    setNewString(theString)
  },[isNumbers , isSymbols,lengthOfString , setNewString])

  useEffect(()=>{
    randomStrings();  
  },[isNumbers , isSymbols,lengthOfString , randomStrings])


  const handleCopy = async () => {
    
      await navigator.clipboard.writeText(newString);
      setCopied(true);    
     
      
       setTimeout(() => {
       
        setCopied(false);
      }, 2000);

  };



  return (
    <div className='flex justify-center items-center min-h-screen pt-10 sm:pt-20 px-4 dark:bg-gray-950 light:bg-white'>
      <div className='bg-gray-400 m-4 sm:m-10 p-6 sm:p-12 md:p-16 lg:p-20 rounded-3xl w-full max-w-md sm:max-w-lg md:max-w-2xl'>

        <div className='relative'>
          <div className='flex flex-col sm:flex-row gap-2 sm:gap-0'>
            <input type="text" id="randomString" value={newString} readOnly className='bg-gray-200 text-base sm:text-lg md:text-xl rounded-2xl sm:rounded-l-2xl px-3 py-2 sm:py-3 font-bold border-2 flex-grow' />
            <button onClick={handleCopy} className='rounded-2xl sm:rounded-r-2xl font-medium text-base sm:text-lg md:text-xl border-2 bg-blue-500 px-4 sm:px-6 md:px-8 py-2 sm:py-3 hover:bg-blue-600 transition duration-300 cursor-pointer'>Copy</button>
          </div>
          <div
            className={`absolute left-1/2 -translate-x-1/2 top-16 px-3 py-1.5 dark:bg-gray-950 dark:text-white light:bg-blue-700 light:text-white text-base sm:text-lg md:text-2xl font-semibold rounded-md shadow-md transition-all duration-300 ease-out whitespace-nowrap 
              ${copied 
                ? "opacity-100 transform translate-y-0 scale-100 visible" 
                : "opacity-0 transform translate-y-2 scale-95 invisible"
            }`}
          >
            ✓ Copied to clipboard!
          </div>
        </div>

        <div className='m-4 sm:m-6 md:m-8 text-base sm:text-lg md:text-xl'>
          <div className='flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-6 my-6 md:my-8'>
            <div className='w-full md:w-auto'>
              <label htmlFor='noOfAlphabets' className='block text-sm font-semibold mb-2'>String Length</label>
              <input type="range" id="noOfAlphabets" min='4' max='15' value={lengthOfString} onChange={(e)=>setLengthOfString(e.target.value)} className='w-full md:w-32'/>
            </div>
            <span className='text-base sm:text-lg md:text-2xl font-bold bg-white dark:bg-gray-700 px-4 py-2 rounded-lg'>Length: <span className='text-blue-600'>{lengthOfString}</span></span>
          </div>

          <div className='flex flex-col md:flex-row justify-center gap-4 md:gap-6'>
            <label htmlFor="isNumberAllowed" className={`border-2 border-black p-4 rounded-2xl flex items-center gap-3 transition duration-300 cursor-pointer hover:scale-105 ${(isNumbers)?'bg-green-400' : 'bg-red-600'}`}>  
              <input type="checkbox" name="isNumberAllowed" id="isNumberAllowed" checked={isNumbers} onChange={(e)=>setIsNumbers(e.target.checked)} className='w-5 h-5 cursor-pointer'/>
              <span className='text-base sm:text-lg font-semibold select-none'>Include Numbers</span>
            </label>
            <label htmlFor="isSymbolAllowed" className={`border-2 border-black p-4 rounded-2xl flex items-center gap-3 transition duration-300 cursor-pointer hover:scale-105 ${(isSymbols)?'bg-green-400' : 'bg-red-600'}`}>
              <input type="checkbox" name="isSymbolAllowed" id="isSymbolAllowed" checked={isSymbols} onChange={(e)=>setIsSymbols(e.target.checked)} className='w-5 h-5 cursor-pointer'/>
              <span className='text-base sm:text-lg font-semibold select-none'>Include Symbols</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RandomString
