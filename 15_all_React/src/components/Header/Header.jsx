import React ,{ useContext } from 'react'
import {Link , NavLink} from 'react-router'
import logo from '../../assets/logo.svg'
import darkmode from '../../assets/darkmode.gif'
import { ThemeContext } from '../../context/ThemeContext'

function Header() {

  const {themeMode , lightTheme, darkTheme} = useContext(ThemeContext)    
    const changeTheme = (e)=>{
        const isCheckedit = e.currentTarget.checked
        if(isCheckedit){
            darkTheme()
        }else{
            lightTheme()
        }
    }


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
<label className="relative inline-flex items-center cursor-pointer">
  <input
    type="checkbox"
    className="sr-only peer"
    value={themeMode}
    onChange={changeTheme}
  />

  <div
    className="
      relative
      w-11 h-6
      rounded-full
      bg-gray-300
      peer-focus:ring-4
      peer-focus:ring-blue-300
      dark:bg-gray-700
      peer-checked:bg-blue-600

      after:content-['']
      after:absolute
      after:top-0.5
      after:left-0.5
      after:h-5
      after:w-5
      after:rounded-full
      after:bg-white
      after:border
      after:border-gray-300
      after:transition-all
      after:duration-300

      peer-checked:after:translate-x-full
      peer-checked:after:border-white
    "
  ></div>

  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
    Toggle Theme
  </span>
</label>


        {/* <button className='bg-gray-200  rounded-xl  border-transparent border-2 hover:text-gray-900 hover:border-blue-300 hover:scale-130   transition duration-300 ease-in-out'> 
          <img src={darkmode} alt="darkmode" className='w-10   p-0 rounded-xl'/> 
        </button> */}
      </div>
    </div>
  )
}

export default Header
