import React from 'react'
import logo from "../assets/Logo.svg";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between h-20 border-b-2 px-10'>
        <div className=''>
            <img src={logo} alt="Logo" />
        </div>
        
        <ul className='flex justify-between gap-4'>
            <li className='bg-slate-300 py-2 px-4 rounded'><a href="#">Home</a></li>
            <li className='py-2 px-4'><a href="#">Collection</a></li>
        </ul>
    </div>
  )
}

export default Navbar