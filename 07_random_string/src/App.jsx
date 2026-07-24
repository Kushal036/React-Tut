import { useState,  useCallback, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [length , setLength] = useState(8)
  let [isNumber , setisNumber] = useState(false)
  let [isSymbol , setisSymbol] = useState(false)
  let [password , setpassword] = useState('')




  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let alphabets = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
    const num = '1234567890'
    const sym = '!@#$%^&*();:,./<>?'
    if(isNumber) alphabets+=num
    if(isSymbol) alphabets+=sym
    for(let i=1;i<=length ; i++){
    let randomNo = Math.floor(Math.random()*alphabets.length )+1
 
    pass +=alphabets[randomNo]
  }
  setpassword(pass)
} , [length , isNumber , isSymbol , setpassword])




useEffect(()=>{
  passwordGenerator()
} , [length , isNumber , isSymbol , passwordGenerator])



const passwordRef = useRef(null)
const copyContent = useCallback(()=>{
  passwordRef.current?.select()
  // passwordRef.current?.setSelectionRange(0,3) // select range copy from 0 to 3 
  window.navigator.clipboard.writeText (password)
  // alert("Text Copied")
}, [password])



  return (
  <>
  <div className='bg-gray-500 p-10 mx-20 rounded-2xl text-2xl text-orange-600 my-30'>
    <h1>Password Generator</h1>

    <div className='flex align-middle justify-center'>
      <input 
      type="text" 
      value={password}
      readOnly
      className='w-4/5 bg-white rounded-l-2xl px-4 py-2 '
      ref={passwordRef}
      />
      <button 
      className='bg-blue-700 py-2 px-4 rounded-r-2xl text-black hover:bg-blue-300 transition duration-300'
      onClick={copyContent}>Copy</button>
    </div>
    <div>
    <input
        type="range"
        min="5"
        max="15"
        step="1"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
        className='mx-4'
        
      />
      <label className='mr-4'>Length :{length} </label>
      <input type="checkbox"  id="numberAllowed" defaultChecked= {isNumber}
      onChange={() => setisNumber((pre)=>!pre)}/>
      <label htmlFor="numberAllowed" className='p-2'>Numbers</label>
      <input type="checkbox" id="symbolAllowed" defaultChecked = {isSymbol} 
      onChange={() => setisSymbol((pre)=>!pre)}/>
      <label htmlFor="symbolAllowed" className='p-2'>Symbol</label>
      </div>
  </div>
  </>
  )
}

export default App
