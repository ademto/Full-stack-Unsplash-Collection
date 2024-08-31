import React from 'react'
import Navbar from '../components/navbar'
import img from "../assets/image1.jpg"
import plus from "../assets/plus.svg"
import remove from "../assets/Remove.svg"
import download from "../assets/down arrow.svg"

const Details = () => {
  return (
    <div className='relative h-screen'>
        <Navbar />
        <div className="w-[1280px] mx-auto flex gap-10 mt-14">
            <div className='w-1/2'>
                <img className='' src={img} alt="" />
            </div>
            <div className='w-1/2'>
                <div className='flex gap-3 items-center'>
                    <img className='w-10 h-10 rounded-full' src={img} alt="" />
                    <span>Michael Basin</span>
                </div>
                <p className='be-vietnam-pro-thin text-sm py-5'>Published on October 31, 2022</p>
                <div className="flex gap-5 mb-5">
                    <button className='bg-gray-200 px-5 py-2 flex items-center gap-2' type="button">
                        <img src={plus} alt="" />
                        <span>Add to collection</span>
                    </button>
                    <button className='bg-gray-200 px-5 py-2 flex items-center gap-2' type="button">
                        <img src={download} alt="" />
                        <span>Download</span>
                    </button>
                </div>
                <h2 className='text-2xl be-vietnam-pro-semibold py-4'>Collections</h2>
                <div className='flex p-2 mb-4 gap-4 justify-between hover:bg-gray-200 group'>
                    <div className='flex gap-4'>
                        <img className='w-16 h-16 rounded' src={img} alt="" />
                        <div>
                            <p>Autumn Vibes</p>
                            <span>23 Photos</span>
                        </div>
                    </div>
                    
                    <button className='flex items-center gap-2 opacity-0 group-hover:opacity-100 pr-5'>
                        <img src={remove} alt="" />
                        <span>Remove</span>
                    </button>
                </div>
                <div className='flex p-2 mb-4 gap-4 justify-between hover:bg-gray-200 group'>
                    <div className='flex gap-4'>
                        <img className='w-16 h-16 rounded' src={img} alt="" />
                        <div>
                            <p>Autumn Vibes</p>
                            <span>23 Photos</span>
                        </div>
                    </div>
                    
                    <button className='flex items-center gap-2 opacity-0 group-hover:opacity-100 pr-5'>
                        <img src={remove} alt="" />
                        <span>Remove</span>
                    </button>
                </div>
                <div className='flex p-2 mb-4 gap-4 justify-between hover:bg-gray-200 group'>
                    <div className='flex gap-4'>
                        <img className='w-16 h-16 rounded' src={img} alt="" />
                        <div>
                            <p>Autumn Vibes</p>
                            <span>23 Photos</span>
                        </div>
                    </div>
                    
                    <button className='flex items-center gap-2 opacity-0 group-hover:opacity-100 pr-5'>
                        <img src={remove} alt="" />
                        <span>Remove</span>
                    </button>
                </div>
                
            </div>
        </div>
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <div class="fixed inset-0 z-10 w-screen overflow-hidden">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white p-5">
                    <h2 className='be-vietnam-pro-semibold text-xl'>Add to Collections</h2>
                    <div className='flex p-2 mb-4 gap-4 justify-between hover:bg-gray-200 group'>
                    <div className='flex gap-4'>
                        <img className='w-16 h-16 rounded' src={img} alt="" />
                        <div>
                            <p>Autumn Vibes</p>
                            <span>23 Photos</span>
                        </div>
                    </div>
                    
                    <button className='flex items-center gap-2 opacity-0 group-hover:opacity-100 pr-5'>
                        <img src={remove} alt="" />
                        <span>Remove</span>
                    </button>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Details