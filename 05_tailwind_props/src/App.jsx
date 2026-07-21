import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
const array = [1,2,3,4]
const obj = {
  name:"Kushal",
  password : 1234
}
  return (
//     <>
// <div className="bg-white border-slate-100 dark:bg-slate-800 dark:border-slate-500 border-b rounded-t-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8 mt-10" >
//   <div className="flex items-center space-x-4">
//     <img src="https://images.pexels.com/photos/11220081/pexels-photo-11220081.jpeg  " alt="" width="88" height="88" className="flex-none rounded-lg bg-slate-100" loading="lazy" />
//     <div className="min-w-0 flex-auto space-y-1 font-semibold">
//       <p className="text-cyan-500 dark:text-cyan-400 text-sm leading-6">
//         <abbr title="Episode">Ep.</abbr> 128
//       </p>
//       <h2 className="text-slate-500 dark:text-slate-400 text-sm leading-6 truncate">
//         Scaling CSS at Heroku with Utility classNamees
//       </h2>
//       <p className="text-slate-900 dark:text-slate-50 text-lg">
//         Full Stack Radio
//       </p>
//     </div>
//   </div>
//   <div className="space-y-2">
//     <div className="relative">
//       <div className="bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
//         <div className="bg-cyan-500 dark:bg-cyan-400 w-1/2 h-2" role="progressbar" aria-label="music progress" aria-valuenow="1456" aria-valuemin="0" aria-valuemax="4550"></div>
//       </div>
//       <div className="ring-cyan-500 dark:ring-cyan-400 ring-2 absolute left-1/2 top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center bg-white rounded-full shadow">
//         <div className="w-1.5 h-1.5 bg-cyan-500 dark:bg-cyan-400 rounded-full ring-1 ring-inset ring-slate-900/5"></div>
//       </div>
//     </div>
//     <div className="flex justify-between text-sm leading-6 font-medium tabular-nums">
//       <div className="text-cyan-500 dark:text-slate-100">24:16</div>
//       <div className="text-slate-500 dark:text-slate-400">75:50</div>
//     </div>
//   </div>
// </div>
// <div className="bg-slate-50 text-slate-500 dark:bg-slate-600 dark:text-slate-200 rounded-b-xl flex items-center ">
//   <div className="flex-auto flex items-center justify-evenly">
//     <button type="button" aria-label="Add to favorites">
//       <svg width="24" height="24">
//         <path d="M7 6.931C7 5.865 7.853 5 8.905 5h6.19C16.147 5 17 5.865 17 6.931V19l-5-4-5 4V6.931Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     </button>
//     <button type="button" className="hidden sm:block lg:hidden xl:block" aria-label="Previous">
//       <svg width="24" height="24" fill="none">
//         <path d="m10 12 8-6v12l-8-6Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//         <path d="M6 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     </button>
//     <button type="button" aria-label="Rewind 10 seconds">
//       <svg width="24" height="24" fill="none">
//         <path d="M6.492 16.95c2.861 2.733 7.5 2.733 10.362 0 2.861-2.734 2.861-7.166 0-9.9-2.862-2.733-7.501-2.733-10.362 0A7.096 7.096 0 0 0 5.5 8.226" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//         <path d="M5 5v3.111c0 .491.398.889.889.889H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     </button>
//   </div>
//   <button type="button" className="bg-white text-slate-900 dark:bg-slate-100 dark:text-slate-700 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center" aria-label="Pause">
//     <svg width="30" height="32" fill="currentColor">
//       <rect x="6" y="4" width="4" height="24" rx="2" />
//       <rect x="20" y="4" width="4" height="24" rx="2" />
//     </svg>
//   </button>
//   <div className="flex-auto flex items-center justify-evenly">
//     <button type="button" aria-label="Skip 10 seconds">
//       <svg width="24" height="24" fill="none">
//         <path d="M17.509 16.95c-2.862 2.733-7.501 2.733-10.363 0-2.861-2.734-2.861-7.166 0-9.9 2.862-2.733 7.501-2.733 10.363 0 .38.365.711.759.991 1.176" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//         <path d="M19 5v3.111c0 .491-.398.889-.889.889H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     </button>
//     <button type="button" className="hidden sm:block lg:hidden xl:block" aria-label="Next">
//       <svg width="24" height="24" fill="none">
//         <path d="M14 12 6 6v12l8-6Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//         <path d="M18 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     </button>
//     <button type="button" className="rounded-lg text-xs leading-6 font-semibold px-2 ring-2 ring-inset ring-slate-500 text-slate-500 dark:text-slate-100 dark:ring-0 dark:bg-slate-500">
//       1x
//     </button>
//   </div>
// </div>
//     </>
  // <>
  // <h1 className="bg-amber-200S">Tailwind CSS</h1>
  //  <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
  //     <img
  //       src="https://picsum.photos/301"
  //       alt=""
  //       className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
  //     />
  //     <div className="flex flex-col justify-between p-6 space-y-8">
  //       <div className="space-y-2">
  //         <h2 className="text-3xl font-semibold tracking-wide">Lorem</h2>
  //         <p className="text-gray-400">
  //           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
  //           tempora ipsum soluta amet corporis accusantium aliquid consectetur
  //           eaque!
  //         </p>
  //       </div>
  //       <button
  //         type="button"
  //         className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
  //       >
  //         Read more
  //       </button>
  //     </div>
  //   </div>
  // </>
  <>
  <h1 className="text-blue-500 bg-red-500 p-5 rounded-xl ">Tailwind CSS</h1>

  {/* <Card/> */}
  {/* <Card channel = "Chai aur Code"  myarr = {array} myObh = {obj}/> */}
  /* The value we give here will be transfered to the chai  */
  <Card name = "Kushal" />
  <Card name = "Mittan" />
  </>
  )
}

export default App
