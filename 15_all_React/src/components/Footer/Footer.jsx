import React from 'react'
import facebookLogo from '../../assets/facebookLogo.jpg'
import instagramLogo from '../../assets/instagramLogo.jpg'
import linkedinLogo from '../../assets/linkedinLogo.jpg'
import githubLogo from '../../assets/githubLogo.jpg'
function Footer() {
  return (
    <div className='border-t light:border-black dark:border-white p-4  h-45 dark:bg-gray-950 dark:text-white light:bg-gray-300 light:text-black '>
      <div className='flex gap-6 justify-center mt-4'>
        <a href="https://www.linkedin.com/in/kushal-mittan-257b012a6" target='_blank' ><img src={linkedinLogo} alt="linkedIn"   className='w-10 rounded-xl hover:scale-110 transition duration-300 ease-in-out'/></a>
        <a href="https://github.com/Kushal036" target='_blank' ><img src={githubLogo} alt="github"   className='w-10 rounded-xl hover:scale-110 transition duration-300 ease-in-out'/></a>
        <a href="https://www.facebook.com/jaat.mittan.kushal" target='_blank' ><img src={facebookLogo} alt="facebook"   className='w-10 rounded-xl hover:scale-110 transition duration-300 ease-in-out'/></a>
        <a href="https://www.instagram.com/kushalljaat_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank' ><img src={instagramLogo} alt="instagram"   className='w-10 rounded-xl hover:scale-110 transition duration-300 ease-in-out'/></a>
      </div>
      <div className='flex justify-center mt-5'>
        <p className='text-xs'>© 2023 Freeeze. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
