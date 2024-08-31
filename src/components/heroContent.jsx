import React from 'react'
import SearchIcon from "../assets/Search.svg"

const HeroContent = () => {
  return (
    <div className='w-full h-[90vh] bg-hero-image bg-contain bg-center bg-no-repeat'>
        <div className='w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
            <h1 className='text-4xl be-vietnam-pro-semibold'>Search</h1>
            <p className='.be-vietnam-pro-medium text-sm p-6'>Search high-resolution images from Unsplash</p>
            <div className='relative w-1/3 flex items-center m-auto'>
                <input type="text" class="w-full rounded-md border-0 py-5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Enter your keywords...' />
                <img className='absolute right-5' src={SearchIcon} alt="Seach Icon" />
            </div>
        </div>
        
    </div>
  )
}

export default HeroContent