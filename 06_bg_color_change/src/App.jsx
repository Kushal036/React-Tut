import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {
  let [color, setColor] = useState('#212121')

  return (
    <div className='h-screen w-full' style={{backgroundColor : color}}>
      <div>
        <div className='bg-white rounded-xl m-4'>
      <button onClick={() => setColor('red') } className='bg-red-700 rounded-3xl py-2 px-5 text-white m-1 colorbox' >Red</button>
      <button onClick={() => setColor('green') } className='bg-green-700 rounded-3xl py-2 px-5 text-white m-1 colorbox'>Green</button>
      <button onClick={() => setColor('blue') } className='bg-blue-700 rounded-3xl py-2 px-5 text-white m-1 colorbox'>Blue</button>
      <button onClick={() => setColor('olive') } className='bg-olive-500 rounded-3xl py-2 px-5 text-white m-1 colorbox'>Olive</button>
      <button onClick={() => setColor('gray') } className='bg-gray-500 rounded-3xl py-2 px-5 text-white m-1 colorbox'>Gray</button>
      <button onClick={() => setColor('yellow') } className='bg-yellow-300 rounded-3xl py-2 px-5 text-black m-1 colorbox'>Yellow</button>
      <button onClick={() => setColor('pink') } className='bg-pink-400 rounded-3xl py-2 px-5 text-black m-1 colorbox'>Pink</button>
      <button onClick={() => setColor('purple') } className='bg-purple-700 rounded-3xl py-2 px-5 text-black m-1 colorbox'>Purple</button>
      <button onClick={() => setColor('#e9d8fd') } className='bg-purple-200 rounded-3xl py-2 px-5 text-black m-1 colorbox'>Lavender</button>
      <button onClick={() => setColor('#fff') } className='bg-white rounded-3xl py-2 px-5 text-black m-1 colorbox'>White</button>
      <button onClick={() => setColor('black') } className='bg-black rounded-3xl py-2 px-5 text-white m-1 colorbox'>Black</button>
    </div>
      </div>
    </div>
  )
}

export default App
