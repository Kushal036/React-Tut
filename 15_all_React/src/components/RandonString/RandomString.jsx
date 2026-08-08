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
    <div className='flex justify-center h-screen pt-20 dark:bg-gray-950  light:bg-white '>
      <div className='bg-gray-400 m-10 p-20 h-100 rounded-3xl'>

      <div>
        <input type="text" id="randomString" value={newString} readOnly className='bg-gray-200 text-2xl rounded-l-2xl px-3 py-2 font-bold border-2' />
        <button onClick={handleCopy} className='rounded-r-2xl font-medium text-2xl  border-2 bg-blue-500 px-3 py-2 hover:bg-blue-600 transition duration-300 cursor-pointer'>Copy</button>
        <div
        className={`absolute left-1/2 -translate-x-1/2 top-130 px-3 py-1.5 dark:bg-gray-950 dark:text-white light:bg-blue-700 light:text-white text-3xl font-semibold rounded-md shadow-md transition-all duration-300 ease-out whitespace-nowrap 
          ${copied 
            ? "opacity-100 transform translate-y-0 scale-100 visible" 
            : "opacity-0 transform translate-y-2 scale-95 invisible"
        }`}
      >
        ✓ Copied to clipboard!
      </div>
      </div>

      <div className='m-5 text-2xl '>
        <div className='flex justify-center my-5'>

        <input type="range" id="noOfAlphabets" min='4' max='15' value={lengthOfString} onChange={(e)=>setLengthOfString(e.target.value)} className='mr-4'/>
          <span>Length:{lengthOfString}</span>

        </div>


        <div  className='flex justify-center'>
          <div className={`border-2 p-3 mx-3 rounded-2xl ${(isNumbers)?'bg-green-400' : 'bg-red-600'}`}>  
        <input type="checkbox" name="isNumberAllowed" id="isNumberAllowed" checked={isNumbers} onChange={(e)=>setIsNumbers(e.target.checked)} className='m-2'/>
          <label htmlFor="isNumberAllowed">Numbers</label>
          </div>
          <div className={`border-2 p-3 mx-3 rounded-2xl ${(isSymbols)?'bg-green-400' : 'bg-red-600'}`}>
  
        <input type="checkbox" name="isSymbolAllowed" id="isSymbolAllowed" checked={isSymbols} onChange={(e)=>setIsSymbols(e.target.checked)} className='m-2'/>
          <label htmlFor='isSymbolAllowed'>Symbols</label>
        </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default RandomString
