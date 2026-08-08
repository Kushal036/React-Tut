import React from 'react'
import {Link , NavLink} from 'react-router'
import logo from '../../assets/logo.svg'
import darkmode from '../../assets/darkmode.gif'
function Header() {
  return (
    <div className='flex mx-auto w-fit items-center justify-between h-20 px-7 py-10 border-b-2 dark:bg-gray-950 dark:text-white light:bg-white light:text-black '> 
      <div className='rounded-4xl mx-15'>
      <Link to='/'>
      <img src={logo} alt='Logo' className='w-15 hover:scale-120 transition duration-400 ease-in-out'/> 
      </Link>
      </div>


      <div className='flex gap-3 pl-4'>

      
        <NavLink to='/' className={({isActive}) =>
                                    `${isActive ? "text-orange-500":"dark:text-white light:text-black" } p-3 rounded-3xl  border-transparent border-2 hover:text-gray-900 hover:scale-130   transition duration-300 ease-in-out flex items-center text-center font-bold` 
                                    } >
        Home
        </NavLink>
        <NavLink to='/counter' className={({isActive}) =>
                                    `${isActive ? "text-orange-500":"dark:text-white light:text-black"  } p-1 rounded-3xl  border-transparent border-2 hover:text-gray-900 hover:scale-130   transition duration-300 ease-in-out flex items-center text-center font-bold`
                                    } >
        Counter
        </NavLink>
        <NavLink to='/cards' className={({isActive}) =>
                                    `${isActive ? "text-orange-500":"dark:text-white light:text-black"  } p-3 rounded-3xl  border-transparent border-2 hover:text-gray-900 hover:scale-130   transition duration-300 ease-in-out flex items-center text-center font-bold`
                                    } >
        Latest News
        </NavLink>

        <NavLink to='/bgChanger' className={({isActive}) =>
                                    `${isActive ? "text-orange-500":"dark:text-white light:text-black"  } p-3 rounded-3xl  border-transparent border-2 hover:text-gray-900 hover:scale-130   transition duration-300 ease-in-out flex items-center text-center font-bold`
                                    } >
        Bg Changer
        </NavLink>
        <NavLink to='/randomString' className={({isActive}) =>
                                    `${isActive ? "text-orange-500":"dark:text-white light:text-black"  } p-3 rounded-3xl  border-transparent border-2 hover:text-gray-900 hover:scale-130   transition duration-300 ease-in-out flex items-center text-center font-bold`
                                    } >
        Random String Generator
        </NavLink>
        <NavLink to='/currencyConvertor' className={({isActive}) =>
                                    `${isActive ? "text-orange-500":"dark:text-white light:text-black"  } p-3 rounded-3xl  border-transparent border-2 hover:text-gray-900  hover:scale-130   transition duration-300 ease-in-out flex items-center text-center font-bold`
                                    } >
        Currency Convertor
        </NavLink>
        <NavLink to='/themeChanger' className={({isActive}) =>
                                    `${isActive ? "text-orange-500":"dark:text-white light:text-black"  } p-3 rounded-3xl  border-transparent border-2 hover:text-gray-900 hover:scale-130   transition duration-300 ease-in-out flex items-center text-center font-bold`
                                    } >
        Theme Change
        </NavLink>
        <NavLink to='/todoContext' className={({isActive}) =>
                                    `${isActive ? "text-orange-500":"dark:text-white light:text-black"  } p-3 rounded-3xl  border-transparent border-2 hover:text-gray-900 hover:scale-130   transition duration-300 ease-in-out flex items-center text-center font-bold`
                                    } >
        ToDo
        </NavLink>


      </div>

      <div className='mx-30'>
        <button className='bg-gray-200  rounded-xl  border-transparent border-2 hover:text-gray-900 hover:border-blue-300 hover:scale-130   transition duration-300 ease-in-out'> 
          <img src={darkmode} alt="darkmode" className='w-10   p-0 rounded-xl'/> 
        </button>
      </div>
    </div>
  )
}

export default Header
