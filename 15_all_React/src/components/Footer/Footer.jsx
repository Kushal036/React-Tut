import React from 'react'
import facebookLogo from '../../assets/facebookLogo.jpg'
import instagramLogo from '../../assets/instagramLogo.jpg'
import linkedinLogo from '../../assets/linkedinLogo.jpg'
import githubLogo from '../../assets/githubLogo.jpg'
function Footer() {
  return (
    <div className='border-t light:border-black dark:border-white px-4 py-4 md:p-4 min-h-45 dark:bg-gray-950 dark:text-white light:bg-gray-300 light:text-black flex flex-col justify-center items-center'>
      <div className='flex gap-4 md:gap-6 justify-center mt-4 flex-wrap'>
        <a href="https://www.linkedin.com/in/kushal-mittan-257b012a6" target='_blank' rel='noopener noreferrer'><img src={linkedinLogo} alt="linkedIn" className='w-8 md:w-10 rounded-xl hover:scale-110 transition duration-300 ease-in-out'/></a>
        <a href="https://github.com/Kushal036" target='_blank' rel='noopener noreferrer'><img src={githubLogo} alt="github" className='w-8 md:w-10 rounded-xl hover:scale-110 transition duration-300 ease-in-out'/></a>
        <a href="https://www.facebook.com/jaat.mittan.kushal" target='_blank' rel='noopener noreferrer'><img src={facebookLogo} alt="facebook" className='w-8 md:w-10 rounded-xl hover:scale-110 transition duration-300 ease-in-out'/></a>
        <a href="https://www.instagram.com/kushalljaat_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank' rel='noopener noreferrer'><img src={instagramLogo} alt="instagram" className='w-8 md:w-10 rounded-xl hover:scale-110 transition duration-300 ease-in-out'/></a>
      </div>
      <div className='flex justify-center mt-5'>
        <p className='text-xs md:text-sm text-center'>© 2023 Freeeze. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
