import React from 'react'
import payoneer from '../assets/images/payoneer.png'
import remitly from '../assets/images/remitly.png'
import wise from '../assets/images/wise.png'
import paypal from '../assets/images/paypal.png'
import facebook from '../assets/images/facebook.png'
import linkedin from '../assets/images/linkedin.png'
import Card from '../components/Card'

const Wallet = () => {
  return (
    <div>
        <div className="flex gap-20">
            {/*left side */}
            <div className='flex flex-col w-[354px] gap-5'>
            
                {/*card will be here*/}
                <Card />


                {/*grey box */}
                <div className="bg-gray-50 w-full h-auto rounded-[10px] px-5 py-6 border-gray-100">
                    <span className='text-gray-400 text-sm font-semibold capitalize'>Your balance</span>
                    <div className='flex gap-10 justify-between items-center'>
                        <div className="flex">
                            <span className='text-lg font-semibold capitalize'>$5240</span>
                            <span className='text-gray-400 text-lg font-semibold capitalize'>.00</span>
                        </div>
                        <div className="flex gap-3">
                            <span className='text-green-500'><i className="fa-solid fa-arrow-up text-sm"></i> 23.65%</span>
                            <span className='text-red-600'><i className="fa-solid fa-arrow-down  text-sm"></i> 23.65%</span>

                        </div>
                    </div>
                    <div className="flex w-full mt-8">
                        <div className="flex flex-col w-[50%]">
                            <span className='text-gray-400 text-sm font-semibold capitalize'>currency</span>
                            <span className='text-sm font-semibold capitalize'>USD/US Dollar</span>
                        </div>
                        <div className="flex flex-col flex-1">
                            <span className='text-gray-400 text-sm font-semibold capitalize'>status</span>
                            <span className='text-sm font-semibold capitalize'>active</span>
                        </div>
                    </div>
                </div>

                <a href="" className='text-green-600 p-3 border-gray-100 bg-gray-50 font-semibold inline-flex justify-center gap-2 items-center hover:bg-gray-300 rounded-[10px]'>
                    <i className="fa-solid fa-plus"></i>
                    Add New Card
                </a>
            </div>

            {/*right side */}
            <div className="flex flex-col gap-3 flex-1 mr-5">
                <span className='text-xl font-semibold capitalize'>my payments</span>
                <div className="flex justify-between items-center w-full mt-3">
                    <div className="flex gap-10">
                        <a href="" className='font-light capitalize border-b border-green-700 border-b-[3px] hover:text-black text-sm pb-1'>All payments</a>
                        <a href="" className='text-gray-500 font-light capitalize border-b border-gray-100 hover:border-green-700 hover:border-b-[3px] hover:text-black text-sm pb-1'>regular payments</a>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                        <i className="fa-solid fa-magnifying-glass text-gray-400 text-sm pb-1"></i>
                        <input type="search" name="" id="" placeholder='Search' className='w-full border-b border-gray-100 outline-none pb-1'/>
                    </div>
                </div>
                <span className='text-sm text-gray-400 font-light capitalize'>today</span>

                <div className="flex flex-col items-center w-full gap-5">
                    {/*item 1 */}
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-4">
                            <div className="h-[40px] w-[40px] overflow-hidden rounded-[10px]">
                                <img src="" alt="" className='w-full h-full object-cover'/>
                            </div>
                            <div className="flex flex-col">
                                <span className='text-black text-sm font-semibold capitalize'>payoneer</span>
                                <span className='text-sm text-gray-400 font-light'>20 Apr 2022, 06:55 PM</span>
                            </div>
                        </div>
                        <span className='text-sm font-semibold capitalize text-right'>+ $4800000.24</span>
                    </div>

                     {/*item 2 */}
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-4">
                            <div className="h-[40px] w-[40px] overflow-hidden rounded-[10px]">
                                <img src="" alt="" className='w-full h-full object-cover'/>
                            </div>
                            <div className="flex flex-col">
                                <span className='text-black text-sm font-semibold capitalize'>payoneer</span>
                                <span className='text-sm text-gray-400 font-light'>20 Apr 2022, 06:55 PM</span>
                            </div>
                        </div>
                        <span className='text-sm font-semibold capitalize text-right'>+ $4800.24</span>
                    </div>

                    {/*item 3 */}
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-4">
                            <div className="h-[40px] w-[40px] overflow-hidden rounded-[10px]">
                                <img src="" alt="" className='w-full h-full object-cover'/>
                            </div>
                            <div className="flex flex-col">
                                <span className='text-black text-sm font-semibold capitalize'>payoneer</span>
                                <span className='text-sm text-gray-400 font-light'>20 Apr 2022, 06:55 PM</span>
                            </div>
                        </div>
                        <span className='text-sm font-semibold capitalize text-right'>+ $4800.2</span>
                    </div>

                    {/*item 4 */}
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-4">
                            <div className="h-[40px] w-[40px] overflow-hidden rounded-[10px]">
                                <img src="" alt="" className='w-full h-full object-cover'/>
                            </div>
                            <div className="flex flex-col">
                                <span className='text-black text-sm font-semibold capitalize'>payoneer</span>
                                <span className='text-sm text-gray-400 font-light'>20 Apr 2022, 06:55 PM</span>
                            </div>
                        </div>
                        <span className='text-sm font-semibold capitalize text-right'>+ $48.24</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-full mt-3">
                    <span className='text-lg font-semibold capitalize'>upcoming payments</span>
                    <span className='text-sm text-gray-400 font-light'>Next month</span>

                    <div className="flex flex-col items-center w-full gap-5">
                        {/*item 1 */}
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-4">
                                <div className="h-[40px] w-[40px] overflow-hidden rounded-[10px]">
                                    <img src="" alt="" className='w-full h-full object-cover'/>
                                </div>
                                <div className="flex flex-col">
                                    <span className='text-black text-sm font-semibold capitalize'>payoneer</span>
                                    <span className='text-sm text-gray-400 font-light'>20 Apr 2022, 06:55 PM</span>
                                </div>
                            </div>
                            <span className='text-sm font-semibold capitalize text-right'>+ $4800000.24</span>
                        </div>

                        {/*item 2 */}
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-4">
                                <div className="h-[40px] w-[40px] overflow-hidden rounded-[10px]">
                                    <img src="" alt="" className='w-full h-full object-cover'/>
                                </div>
                                <div className="flex flex-col">
                                    <span className='text-black text-sm font-semibold capitalize'>payoneer</span>
                                    <span className='text-sm text-gray-400 font-light'>20 Apr 2022, 06:55 PM</span>
                                </div>
                            </div>
                            <span className='text-sm font-semibold capitalize text-right'>+ $4800000.24</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    </div>
  )
}

export default Wallet