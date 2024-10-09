import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-blue-50'><footer className="text-gray-600 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
        <span className="ml-3 text-xl">Mineportfolio</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2024 Mineportfolio 
       
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <Link 
        target='_blank'
        href={"https://www.facebook.com/share/7RKya4NskjfWU39C/?mibextid=qi2Omg"} className="text-gray-500">
        <FaFacebook className='text-3xl hover:text-blue-600'/>
        </Link>
        <Link 
         target='_blank'
        href={"https://www.linkedin.com/in/shahbaz-qammar-7a8a151b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} className="ml-3 text-gray-500">
        <FaLinkedin className='text-3xl hover:text-blue-600'/>
        </Link >
       
      </span>
    </div>
  </footer>
  </div>
  )
}

export default Footer