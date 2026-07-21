import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter , setCounter] = useState(10)

  

  console.log(counter);
  const incNum = () =>{
    if(counter == 20 ){
      alert("Value can not be greater than 20")
    }else{
      counter++;
      console.log("Value after incriment" , counter);
      setCounter(counter)


    }
  }
    const decNum = () =>{
      if(counter == 0){ 
    alert("Vlaue can not be smaller than 0")
  }else{
    counter--;
    console.log("Value after decriment" , counter);
    setCounter(counter)
  }
  }
  return (
    <>
     <h1>Counter</h1> 
     <h2>Value of counter is - {counter}</h2>
     <button  onClick= {incNum} >Increase Value - {counter}</button>
     <br /><button onClick= {decNum}>Decrease Value - {counter}</button>
    </>
  )
}

export default App
