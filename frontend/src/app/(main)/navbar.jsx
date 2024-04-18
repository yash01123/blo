import React from 'react'

import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="text-gray-600  body-font">
    <div className='bg-blue-400'>
 <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
   <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     <svg
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       stroke="currentColor"
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth={2}
       className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
       viewBox="0 0 24 24"
     >
       <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
     </svg>
     <span className="ml-3 text-xl">NUkkkad Blog</span>
   </a>
   <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
   <Link  className="mr-5 hover:text-gray-900" href={'http://localhost:3000/'}>Home</Link>
     <a className="mr-5 hover:text-gray-900">Blogs</a>
     <Link  className="mr-5 hover:text-gray-900" href={'/about'}>About</Link>
     <Link  className="mr-5 hover:text-gray-900" href={'/contact'}>Contact</Link>
   </nav>
   <input className='text-white' type="text"  placeholder='Search'/>
   <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
     <Link href={/login}>Login</Link>
     <svg
       fill="none"
       stroke="currentColor"
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth={2}
       className="w-4 h-4 ml-1"
       viewBox="0 0 24 24"
     >
       <path d="M5 12h14M12 5l7 7-7 7" />
     </svg>
     
   </button>
 </div>
 </div>
</header>
  )
}

export default Navbar;