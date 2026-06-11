import React from 'react'
import logo from '../assets/images/logo-white.png'
import personImg from '../assets/images/person.png'
import verified from '../assets/images/verified.png'

const Invoice2 = () => {
    return (
        <div>
            <div className="flex gap-15">
                {/* left */}
                <div className='w-[600px] flex flex-col gap-3'>

                    <div className='flex justify-between bg-black h-auto w-full p-4 rounded-[10px]'>
                        <div className="left-info flex gap-2">
                            <div className="left-img rounded-[50%] h-[30px] w-[30px] overflow-hidden">
                                <img src={logo} alt="" className='w-full h-full cover' />
                            </div>
                            <div className='flex flex-col'>
                                <span className='font-semibold text-white'>Maglo</span>
                                <span className='text-xs font-light text-gray-300'>sales@maglo.com</span>

                            </div>
                        </div>
                        <div className="right-info flex flex-col text-xs font-light text-gray-300 gap-2 text-right capitalize">
                            <span>1333 Grey Fox Farm Road</span>
                            <span>Houston,TX 77060</span>
                            <span>Bloomfield Hills, Michigan(MI), 48301</span>
                        </div>
                    </div>


                    <div className='flex justify-between bg-gray-100 h-auto w-full p-4 rounded-[10px]'>
                        <div className="flex flex-col gap-2">
                            <h3 className='font-semibold mb-2'>Invoice Number</h3>
                            <span className='text-xs font-light text-gray-500 uppercase'>mag 2541420</span>
                            <span className='text-xs font-light text-gray-500 capitalize'>issued date: 10 apr 2022</span>
                            <span className='text-xs font-light text-gray-500 capitalize'>due date: 20 apr 2022</span>
                        </div>
                        <div className="flex flex-col gap-2 text-right">
                            <h3 className='font-semibold mb-2'>Invoice Number</h3>
                            <span className='text-xs font-light text-gray-500 capitalize'>sajib rahman</span>
                            <span className='text-xs font-light text-gray-500 capitalize'>3471 rainy day drive</span>
                            <span className='text-xs font-light text-gray-500 capitalize'>needham, MA 02192</span>
                        </div>
                    </div>

                    <div>
                        <h3 className='font-semibold'>Item Details</h3>
                        <p className='text-xs font-light text-gray-500'>Details item with more info</p>
                        <table className='mt-2 w-full border-separate border-spacing-x-2 border-spacing-y-3'>
                            <thead>
                                <tr>
                                    <th className='uppercase text-sm text-gray-400 font-light text-left border-b border-gray-100 pb-2'>Item</th>
                                    <th className='uppercase text-sm text-gray-400 font-light border-b border-gray-100 pb-2'>order/type</th>
                                    <th className='uppercase text-sm text-gray-400 font-light border-b border-gray-100 pb-2'>rate</th>
                                    <th className='uppercase text-sm text-gray-400 font-light border-b border-gray-100 pb-2'>amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='text-xs font-bold border-[0.1px] border-gray-200 rounded-[5px] p-3'>Iphone 13 Pro Max</td>
                                    <td className='text-xs font-bold border-[0.1px] border-gray-200 rounded-[5px] p-3 text-center'>01</td>
                                    <td className='text-xs font-bold border-[0.1px] border-gray-200 rounded-[5px] p-3 text-center'>$244</td>
                                    <td className='text-xs font-bold border-[0.1px] border-gray-200 rounded-[5px] p-3 text-center w-1'>$244.00</td>
                                </tr>

                                <tr>
                                    <td className='text-xs font-bold border-[0.1px] border-gray-200 rounded-[5px] p-3'>Iphone 13 Pro Max</td>
                                    <td className='text-xs font-bold border-[0.1px] border-gray-200 rounded-[5px] p-3 text-center'>01</td>
                                    <td className='text-xs font-bold border-[0.1px] border-gray-200 rounded-[5px] p-3 text-center'>$244</td>
                                    <td className='text-xs font-bold border-[0.1px] border-gray-200 rounded-[5px] p-3 text-center w-1'>$244.00</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className='flex justify-between mt-4 w-full border-t border-gray-100 pt-4'>
                            <div className='w-[60%]'>
                                <a href="" className='text-xs font-semibold text-green-700 hover:text-green-500'>Add item</a>
                            </div>

                            <div className="flex justify-between flex-1">
                                <div className='flex flex-col w-full'>
                                    <div className='flex flex-col gap-3 pb-3'>
                                        <span className='text-xs font-bold'>Subtotal</span>
                                        <span className='text-xs font-bold'>Discount</span>
                                        <span className='text-xs font-bold'>Tax</span>
                                    </div>
                                    <div className='border-t border-gray-200 pt-1'>
                                        <span className='text-sm font-bold text-gray-900'>Total</span>
                                    </div>
                                </div>

                                <div className='flex flex-col text-right w-full whitespace-nowrap'>
                                    <div className='flex flex-col gap-3 pb-3'>
                                        <span className='text-xs font-bold'>$664.00</span>
                                        <span className='text-xs font-bold'>
                                            <a href="" className='text-xs font-semibold text-green-700 hover:text-green-500'>Add</a>
                                        </span>
                                        <span className='text-xs font-bold'>
                                            <a href="" className='text-xs font-semibold text-green-700 hover:text-green-500'>Add</a>
                                        </span>
                                    </div>
                                    <div className='border-t border-gray-200 pt-1'>
                                        <span className='text-sm font-bold text-gray-900'>$664.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* right */}
                <div className="flex-1 flex flex-col gap-3">

                    <div className='flex flex-col border-gray-200 rounded-[10px] bg-zinc-50 p-5 gap-3 h-auto'>
                        <div className='flex justify-between'>
                            <span className='text-sm font-bold'>Client Details</span>
                            <a href="" className='text-gray-600 hover:text-gray-400'>•••</a>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <div className='h-[50px] w-[50px] overflow-hidden rounded-[50%]'>
                                <img src={personImg} alt="" className='h-full w-full' />
                            </div>

                            <div className='flex flex-col'>
                                <span className='font-semibold text-sm'>Sajib Rahman</span>
                                <span className='text-xs font-light text-gray-400'>rahmansajib@uihut.com</span>

                            </div>
                        </div>

                        <div className="flex flex-col gap-1 mt-5">
                            <div className='flex gap-1 items-center'>
                                <span className='font-semibold text-sm'>UIHUT Agency LTD </span>
                                <div className='h-[15px] w-[15px] overflow-hidden rounded-[50%]'>
                                    <img src={verified} alt="" className='h-full w-full' />
                                </div>
                            </div>
                            <span className='text-sm font-light text-gray-400 capitalize'>3471 rainy day drive tulsa, USA</span>

                            <a href="" className='text-green-600 text-center text-sm font-bold p-3 bg-green-100 mt-3 rounded-[10px] hover:bg-green-300 hover:text-green-900'>Add Customer</a>
                        </div>

                    </div>

                    <div className='flex flex-col border-gray-200 rounded-[10px] bg-zinc-50 p-5 gap-3 h-auto'>
                        <h3 className='font-bold'>Basic Info</h3>
                        <div className='flex flex-col gap-2'>
                            <span className='text-sm font-light text-gray-400 capitalize'>invoice date</span>
                            <input type="date" name="" id="" className='border-[0.1px] py-2 px-5 rounded-[10px] border-gray-300 font-bold' value="2022-04-14"/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='text-sm font-light text-gray-400 capitalize'>due date</span>
                            <input type="date" name="" id="" className='border-[0.1px] py-2 px-5 rounded-[10px] border-gray-300 font-bold' value="2022-04-20"/>
                        </div>
                        <a href="" className='text-center text-sm font-bold p-3 bg-lime-400 mt-3 rounded-[10px] hover:bg-lime-300'>Add Customer</a>
                        <div className="flex gap-5 mt-2">
                            <a href="" className='flex gap-2 justify-center items-center py-3 px-5 border-[0.1px] rounded-[10px] bg-gray-200 border-gray-100 text-green-800 hover:bg-gray-300 w-[50%] font-semibold'>
                                <i className="fa-regular fa-eye"></i>
                                <span>Preview</span>
                            </a>
                            
                            <a href="" className='flex gap-2 justify-center items-center py-3 px-5 border-[0.1px] rounded-[10px] bg-gray-200 border-gray-100 text-green-800 hover:bg-gray-300 flex-1 font-semibold'>
                                <i className="fa-solid fa-download"></i>
                                <span>Download</span>
                            </a>
                            


                        </div>


                    </div>

                </div>
            </div>

        </div>
    )
}

export default Invoice2