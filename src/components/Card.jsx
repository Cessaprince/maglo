import React from 'react'
import chip from '../assets/images/card-chip.jpeg'
import mastercard from '../assets/images/mastercard.svg'
import wifi from '../assets/images/wifi.png'
import visa from '../assets/images/visa.png'

const Card = () => {
    return (
        <div>
            <div className='w-[350px] relative pb-32'>
                <div className="blackcard h-auto bg-black px-7 py-5 rounded-[10px] flex flex-col gap-4 w-full relative">
                    <div className='flex gap-2 items-center'>
                        <span className="text-white font-semibold">Maglo.</span>
                        <span className='text-gray-700 text-sm font-semibold'>| Universal Bank</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="w-[50px] h-[40px] overflow-hidden rounded-[5px]">
                            <img src={chip} alt="" className='w-full h-full cover' />
                        </div>
                        <div className="w-[50px] h-[40px] overflow-hidden rounded-[5px]">
                            <img src={wifi} alt="" className='w-full h-full cover' />
                        </div>
                    </div>

                    <div className='flex gap-3'>
                        <span className='text-white font-semibold text-lg tracking-[3px]'>5495</span>
                        <span className='text-white font-semibold text-lg tracking-[3px]'>7381</span>
                        <span className='text-white font-semibold text-lg tracking-[3px]'>3759</span>
                        <span className='text-white font-semibold text-lg tracking-[3px]'>2321</span>
                    </div>
                    <div className='flex justify-end items-end'>
                        <div className='w-[60px] h-[40px] overflow-hidden'>
                            <img src={mastercard} alt="" className='w-full h-full cover' />
                        </div>
                    </div>


                </div>
                <div className="whitecard w-[320px] h-auto bg-gray-300 px-7 py-5 mt-1 rounded-[10px] flex flex-col gap-6 absolute top-40 left-[13px] bg-gray-500/50 backdrop-blur-sm">
                    <div className='flex gap-2 items-center'>
                        <span className="text-white font-semibold">Maglo.</span>
                        <span className='text-gray-400 text-sm font-semibold'>| Commercial Bank</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="w-[40px] h-[30px] overflow-hidden rounded-[5px]">
                            <img src={chip} alt="" className='w-full h-full cover' />
                        </div>
                        <div className="w-[40px] h-[30px] overflow-hidden rounded-[5px]">
                            <img src={wifi} alt="" className='w-full h-full cover' />
                        </div>
                    </div>
                    <div>
                        <span className='font-semibold text-lg tracking-[2px]'>85952548****</span>
                        <div className="flex justify-between items-center">
                            <span className='text-gray-500 text-sm text-light'>09/25</span>
                             <div className="w-[30px] h-[20px] overflow-hidden rounded-[5px]">
                                <img src={visa} alt="" className='w-full h-full cover' />

                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Card