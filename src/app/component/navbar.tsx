
import Link from 'next/link'
import React from 'react'
import { IoCloudDownloadOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <div className='bg-gray-100 z-50 h-19 sticky top-0'><header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
        <span className="ml-3 text-xl">Mineportfolio</span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Link href = {"/"}className="mr-5 hover:text-blue-600">Home</Link>
        <Link href = {"#About"}className="mr-5 hover:text-blue-600">About</Link>
        <Link href = {"#Myservices"}className="mr-5 hover:text-blue-600">My Services</Link>
        <Link href = {"#Projects"}className="mr-5 hover:text-blue-600"> My Projects</Link>
        <Link href = {"#contact"}className="mr-5 hover:text-blue-600">Contact</Link>
      </nav>
      <a href=''>
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3
       focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
        Download Cv
       <IoCloudDownloadOutline className='text-xl ml-2'/>
      </button>
       </a>
    </div>
  </header></div>
  )
}

export default Navbar