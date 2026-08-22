import React ,{ useContext, useState } from 'react'
import {Link , NavLink} from 'react-router'
import logo from '../../assets/logo.svg'
import darkmode from '../../assets/darkmode.gif'
import { ThemeContext } from '../../context/ThemeContext'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {themeMode , lightTheme, darkTheme} = useContext(ThemeContext)    
    const changeTheme = (e)=>{
        const isCheckedit = e.currentTarget.checked
        if(isCheckedit){
            darkTheme()
        }else{
            lightTheme()
        }
    }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className='relative flex items-center justify-between w-full px-4 md:px-7 py-4 md:py-5 border-b-2 dark:bg-gray-950 dark:text-white light:bg-white light:text-black z-50'> 
      {/* Logo */}
      <div className='rounded-4xl'>
        <Link to='/'>
          <img src={logo} alt='Logo' className='w-12 md:w-16 hover:scale-110 transition duration-400 ease-in-out'/> 
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className='hidden lg:flex gap-2 xl:gap-3 flex-1 px-4 justify-center'>

      
        <NavLink to='/' className={({isActive}) =>
                                    `${isActive ? "text-orange-500":"dark:text-white light:text-black" } px-2 py-1 rounded-2xl text-sm  border-transparent border-2 hover:text-gray-900 transition duration-300 ease-in-out flex items-center text-center font-bold` 
                                    } >
        Home
        </NavLink>
        <NavLink to='/counter' className={({isActive}) =>
                                    `${isActive ? "text-orange-500":"dark:text-white light:text-black"  } px-2 py-1 rounded-2xl text-sm border-transparent border-2 hover:text-gray-900 transition duration-300 ease-in-out flex items-center text-center font-bold`
                                    } >
        Counter
        </NavLink>
        <NavLink to='/cards' className={({isActive}) =>
                                    `${isActive ? "text-orange-500":"dark:text-white light:text-black"  } px-2 py-1 rounded-2xl text-sm border-transparent border-2 hover:text-gray-900 transition duration-300 ease-in-out flex items-center text-center font-bold`
                                    } >
        News
        </NavLink>

        <NavLink to='/bgChanger' className={({isActive}) =>
                                    `${isActive ? "text-orange-500":"dark:text-white light:text-black"  } px-2 py-1 rounded-2xl text-sm border-transparent border-2 hover:text-gray-900 transition duration-300 ease-in-out flex items-center text-center font-bold`
                                    } >
        BG
        </NavLink>
        <NavLink to='/randomString' className={({isActive}) =>
                                    `${isActive ? "text-orange-500":"dark:text-white light:text-black"  } px-2 py-1 rounded-2xl text-sm border-transparent border-2 hover:text-gray-900 transition duration-300 ease-in-out flex items-center text-center font-bold`
                                    } >
        String
        </NavLink>
        <NavLink to='/currencyConvertor' className={({isActive}) =>
                                    `${isActive ? "text-orange-500":"dark:text-white light:text-black"  } px-2 py-1 rounded-2xl text-sm border-transparent border-2 hover:text-gray-900 transition duration-300 ease-in-out flex items-center text-center font-bold`
                                    } >
        Currency
        </NavLink>
        <NavLink to='/themeChanger' className={({isActive}) =>
                                    `${isActive ? "text-orange-500":"dark:text-white light:text-black"  } px-2 py-1 rounded-2xl text-sm border-transparent border-2 hover:text-gray-900 transition duration-300 ease-in-out flex items-center text-center font-bold`
                                    } >
        Theme
        </NavLink>
        <NavLink to='/todoContext' className={({isActive}) =>
                                    `${isActive ? "text-orange-500":"dark:text-white light:text-black"  } px-2 py-1 rounded-2xl text-sm border-transparent border-2 hover:text-gray-900 transition duration-300 ease-in-out flex items-center text-center font-bold`
                                    } >
        ToDo
        </NavLink>
        <NavLink to='/contact' className={({isActive}) =>
                                    `${isActive ? "text-orange-500":"dark:text-white light:text-black"  } px-2 py-1 rounded-2xl text-sm border-transparent border-2 hover:text-gray-900 transition duration-300 ease-in-out flex items-center text-center font-bold`
                                    } >
        Contact
        </NavLink>


      </div>

      {/* Theme Toggle & Hamburger */}
      <div className='flex gap-4 items-center'>
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
        </label>

        {/* Hamburger Menu Button */}
        <button 
          onClick={toggleMenu}
          className='lg:hidden flex flex-col gap-1 p-2'
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 dark:bg-white light:bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 dark:bg-white light:bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 dark:bg-white light:bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className='absolute left-0 right-0 top-full w-full flex flex-col gap-2 p-4 dark:bg-gray-950 light:bg-white border-b-2 dark:border-white light:border-gray-300 lg:hidden z-40 shadow-lg'>
          <NavLink to='/' onClick={closeMenu} className={({isActive}) =>
                                      `${isActive ? "text-orange-500":"dark:text-white light:text-black" } px-3 py-2 rounded-lg border-transparent border-2 hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-300 ease-in-out font-bold` 
                                      } >
          Home
          </NavLink>
          <NavLink to='/counter' onClick={closeMenu} className={({isActive}) =>
                                      `${isActive ? "text-orange-500":"dark:text-white light:text-black"  } px-3 py-2 rounded-lg border-transparent border-2 hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-300 ease-in-out font-bold`
                                      } >
          Counter
          </NavLink>
          <NavLink to='/cards' onClick={closeMenu} className={({isActive}) =>
                                      `${isActive ? "text-orange-500":"dark:text-white light:text-black"  } px-3 py-2 rounded-lg border-transparent border-2 hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-300 ease-in-out font-bold`
                                      } >
          News
          </NavLink>
          <NavLink to='/bgChanger' onClick={closeMenu} className={({isActive}) =>
                                      `${isActive ? "text-orange-500":"dark:text-white light:text-black"  } px-3 py-2 rounded-lg border-transparent border-2 hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-300 ease-in-out font-bold`
                                      } >
          BG Changer
          </NavLink>
          <NavLink to='/randomString' onClick={closeMenu} className={({isActive}) =>
                                      `${isActive ? "text-orange-500":"dark:text-white light:text-black"  } px-3 py-2 rounded-lg border-transparent border-2 hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-300 ease-in-out font-bold`
                                      } >
          String Generator
          </NavLink>
          <NavLink to='/currencyConvertor' onClick={closeMenu} className={({isActive}) =>
                                      `${isActive ? "text-orange-500":"dark:text-white light:text-black"  } px-3 py-2 rounded-lg border-transparent border-2 hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-300 ease-in-out font-bold`
                                      } >
          Currency
          </NavLink>
          <NavLink to='/themeChanger' onClick={closeMenu} className={({isActive}) =>
                                      `${isActive ? "text-orange-500":"dark:text-white light:text-black"  } px-3 py-2 rounded-lg border-transparent border-2 hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-300 ease-in-out font-bold`
                                      } >
          Theme Change
          </NavLink>
          <NavLink to='/todoContext' onClick={closeMenu} className={({isActive}) =>
                                      `${isActive ? "text-orange-500":"dark:text-white light:text-black"  } px-3 py-2 rounded-lg border-transparent border-2 hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-300 ease-in-out font-bold`
                                      } >
          ToDo
          </NavLink>
          <NavLink to='/contact' onClick={closeMenu} className={({isActive}) =>
                                      `${isActive ? "text-orange-500":"dark:text-white light:text-black"  } px-3 py-2 rounded-lg border-transparent border-2 hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-300 ease-in-out font-bold`
                                      } >
          Contact
          </NavLink>
        </div>
      )}
    </div>
  )
}

export default Header
