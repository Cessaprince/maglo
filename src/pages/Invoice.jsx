import React from 'react'
import userImg from '../assets/images/user-img.jpg'
import iphone13 from '../assets/images/iphone-13-pm.png'
import netflix from '../assets/images/netflix.png'
import figma from '../assets/images/figma.png'
import bitcoin from '../assets/images/bitcoin.png'
import person from '../assets/images/person.png'
import instagram from '../assets/images/instagram.jpeg'
import uihut from '../assets/images/uihut.png'
import citi from '../assets/images/citi.png'

const Invoice = () => {
    return (
        <div>
            <div className="search-transactions mb-[20px] flex justify-between">
                <div className="searchbar border-gray-100 px-4 py-2 bg-gray-100 w-[200px] rounded-[20px] flex gap-3 items-center">
                    <i className="fa-solid fa-magnifying-glass text-l text-gray-500"></i>
                    <input type="search" name="" id="" className='flex-1 text-sm' placeholder='Search invoices'/>
                </div>

                <div className='flex gap-5 items-center'>
                    <a href="/dashboard/invoice2" className='inline-flex gap-2 items-center bg-lime-500 px-4 py-3 rounded-[15px] hover:bg-lime-300 hover:cursor-pointer'>
                        <i className="fa-solid fa-file-invoice-dollar"></i>
                        <span>Create Invoice</span>
                    </a>
                    <a className='inline-flex gap-2 items-center border-[0.1px] border-gray-200 px-4 py-3 rounded-[15px] hover:bg-gray-200 hover:cursor-pointer'>
                        <i className="fa-solid fa-sliders"></i>
                        <span>Filter</span>
                    </a>
                </div>
            </div>
            <div className="transaction-table">
                <table className='border-collapse w-full border-separate border-spacing-y-2'>
                    <thead>
                        <tr className=''>
                            <th className='uppercase py-[5px] pr-[14px] text-left text-gray-400 text-xs' >Name/Client</th>
                            <th className='uppercase py-[5px] pr-[14px] text-left text-gray-400 text-xs'>date</th>
                            <th className='uppercase py-[5px] pr-[14px] text-left text-gray-400 text-xs'>orders/type</th>
                            <th className='uppercase py-[5px] pr-[14px] text-left text-gray-400 text-xs'>amount</th>
                            <th className='uppercase py-[5px] pr-[14px] text-left text-gray-400 text-xs'>status</th>
                            <th className='uppercase py-[5px] pr-[14px] text-left text-gray-400 text-xs'>action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/*figma */}
                        <tr>
                            <td className='border-b border-gray-100 capitalize py-[5px] text-left'>
                                <div className="table-data flex items-center gap-2">
                                    <div className="data-img overflow-hidden w-[40px] h-[40px] rounded-[5px]">
                                        <img src={figma} alt="" className='w-full h-full cover' />
                                    </div>
                                    <div className="data-name flex flex-col">
                                        <span className='text-sm font-semibold'>figma subscription</span>
                                        <span className='text-xs text-gray-400 font-light'>inv: MGL524245</span>
                                    </div>
                                </div>
                            </td>
                            <td className='py-[5px] pr-[14px] text-left border-b border-gray-100'>
                                <div className="transaction-date flex flex-col gap-1">
                                    <span className='text-black text-sm font-semibold'>14 Apr 2022</span>
                                    <span className='text-xs text-gray-400 font-light'>at 8:00 PM</span>
                                </div>
                            </td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-gray-400 text-sm font-light border-b border-gray-100'>20</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-semibold border-b border-gray-100'>$420.84</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-light border-b border-gray-100'>
                                <span className='py-3 px-5 border-[0.px] border-gray-100 bg-orange-100 text-orange-300 w-[50px] h-[30px] rounded-[5px]'>Pending</span>
                            </td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-gray-400 text-sm font-light border-b border-gray-100'>•••</td>

                        </tr>

                        {/* gadget gallery */}
                        <tr>
                            <td className='border-b border-gray-100 capitalize py-[5px] text-left'>
                                <div className="table-data flex items-center gap-2">
                                    <div className="data-img overflow-hidden w-[40px] h-[40px] rounded-[5px]">
                                        <img src={iphone13} alt="" className='w-full h-full cover' />
                                    </div>
                                    <div className="data-name flex flex-col">
                                        <span className='text-sm font-semibold'>iphone 13 pro max</span>
                                        <span className='text-xs text-gray-400 font-light'>inv: MGL524245</span>
                                    </div>
                                </div>
                            </td>
                            <td className='py-[5px] pr-[14px] text-left border-b border-gray-100'>
                                <div className="transaction-date flex flex-col gap-1">
                                    <span className='text-black text-sm font-semibold'>14 Apr 2022</span>
                                    <span className='text-xs text-gray-400 font-light'>at 8:00 PM</span>
                                </div>
                            </td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-gray-400 text-sm font-light border-b border-gray-100'>20</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-semibold border-b border-gray-100'>$420.84</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-light border-b border-gray-100'>
                                <span href="" className='py-3 px-5 border-[0.px] border-gray-100 bg-green-100 text-green-300 w-auto h-[30px] rounded-[5px]'>Paid</span>
                            </td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-gray-400 text-sm font-light border-b border-gray-100'>•••</td>

                        </tr>

                        {/* jack */}
                        <tr>
                            <td className='border-b border-gray-100 capitalize py-[5px] text-left'>
                                <div className="table-data flex items-center gap-2">
                                    <div className="data-img overflow-hidden w-[40px] h-[40px] rounded-[5px]">
                                        <img src={person} alt="" className='w-full h-full cover' />
                                    </div>
                                    <div className="data-name flex flex-col">
                                        <span className='text-sm font-semibold'>Jack dawson eric</span>
                                        <span className='text-xs text-gray-400 font-light'>inv: MGL524245</span>
                                    </div>
                                </div>
                            </td>
                            <td className='py-[5px] pr-[14px] text-left border-b border-gray-100'>
                                <div className="transaction-date flex flex-col gap-1">
                                    <span className='text-black text-sm font-semibold'>14 Apr 2022</span>
                                    <span className='text-xs text-gray-400 font-light'>at 8:00 PM</span>
                                </div>
                            </td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-gray-400 text-sm font-light border-b border-gray-100'>20</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-semibold border-b border-gray-100'>$420.84</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-light border-b border-gray-100'>
                                <span href="" className='py-3 px-5 border-[0.px] border-gray-100 bg-red-100 text-red-300 w-auto h-[30px] rounded-[5px]'>unpaid</span>
                            </td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-gray-400 text-sm font-light border-b border-gray-100'>•••</td>

                        </tr>
                        
                        {/* uihit */}
                        <tr>
                            <td className='border-b border-gray-100 capitalize py-[5px] text-left'>
                                <div className="table-data flex items-center gap-2">
                                    <div className="data-img overflow-hidden w-[40px] h-[40px] rounded-[5px]">
                                        <img src={uihut} alt="" className='w-full h-full cover' />
                                    </div>
                                    <div className="data-name flex flex-col">
                                        <span className='text-sm font-semibold'>UIHUT subscription</span>
                                        <span className='text-xs text-gray-400 font-light'>inv: MGL524245</span>
                                    </div>
                                </div>
                            </td>
                            <td className='py-[5px] pr-[14px] text-left border-b border-gray-100'>
                                <div className="transaction-date flex flex-col gap-1">
                                    <span className='text-black text-sm font-semibold'>14 Apr 2022</span>
                                    <span className='text-xs text-gray-400 font-light'>at 8:00 PM</span>
                                </div>
                            </td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-gray-400 text-sm font-light border-b border-gray-100'>20</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-semibold border-b border-gray-100'>$420.84</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-light border-b border-gray-100'>
                                <span href="" className='py-3 px-5 border-[0.px] border-gray-100 bg-green-100 text-green-300 w-auto h-[30px] rounded-[5px]'>Paid</span>
                            </td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-gray-400 text-sm font-light border-b border-gray-100'>•••</td>

                        </tr>
                        
                        
                        {/*citi */}
                        <tr>
                            <td className='border-b border-gray-100 capitalize py-[5px] text-left'>
                                <div className="table-data flex items-center gap-2">
                                    <div className="data-img overflow-hidden w-[40px] h-[40px] rounded-[5px]">
                                        <img src={citi} alt="" className='w-full h-full cover' />
                                    </div>
                                    <div className="data-name flex flex-col">
                                        <span className='text-sm font-semibold'>Citi Bank Ltd.</span>
                                        <span className='text-xs text-gray-400 font-light'>inv: MGL524245</span>
                                    </div>
                                </div>
                            </td>
                            <td className='py-[5px] pr-[14px] text-left border-b border-gray-100'>
                                <div className="transaction-date flex flex-col gap-1">
                                    <span className='text-black text-sm font-semibold'>14 Apr 2022</span>
                                    <span className='text-xs text-gray-400 font-light'>at 8:00 PM</span>
                                </div>
                            </td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-gray-400 text-sm font-light border-b border-gray-100'>20</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-semibold border-b border-gray-100'>$420.84</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-light border-b border-gray-100'>
                                <span href="" className='py-3 px-5 border-[0.px] border-gray-100 bg-orange-100 text-orange-300 w-[50px] h-[30px] rounded-[5px]'>Pending</span>
                            </td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-gray-400 text-sm font-light border-b border-gray-100'>•••</td>

                        </tr>

                        {/* bitcoin */}
                        <tr>
                            <td className='border-b border-gray-100 capitalize py-[5px] text-left'>
                                <div className="table-data flex items-center gap-2">
                                    <div className="data-img overflow-hidden w-[40px] h-[40px] rounded-[5px]">
                                        <img src={bitcoin} alt="" className='w-full h-full cover' />
                                    </div>
                                    <div className="data-name flex flex-col">
                                        <span className='text-sm font-semibold'>Bitcoin transaction</span>
                                        <span className='text-xs text-gray-400 font-light'>inv: MGL524245</span>
                                    </div>
                                </div>
                            </td>
                            <td className='py-[5px] pr-[14px] text-left border-b border-gray-100'>
                                <div className="transaction-date flex flex-col gap-1">
                                    <span className='text-black text-sm font-semibold'>14 Apr 2022</span>
                                    <span className='text-xs text-gray-400 font-light'>at 8:00 PM</span>
                                </div>
                            </td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-gray-400 text-sm font-light border-b border-gray-100'>20</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-semibold border-b border-gray-100'>$420.84</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-light border-b border-gray-100'>
                                <span href="" className='py-3 px-5 border-[0.px] border-gray-100 bg-orange-100 text-orange-300 w-[50px] h-[30px] rounded-[5px]'>Pending</span>
                            </td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-gray-400 text-sm font-light border-b border-gray-100'>•••</td>

                        </tr>

                         {/*netflix */}
                        <tr>
                            <td className='border-b border-gray-100 capitalize py-[5px] text-left'>
                                <div className="table-data flex items-center gap-2">
                                    <div className="data-img overflow-hidden w-[40px] h-[40px] rounded-[5px]">
                                        <img src={netflix} alt="" className='w-full h-full cover' />
                                    </div>
                                    <div className="data-name flex flex-col">
                                        <span className='text-sm font-semibold'>Netflix subscription</span>
                                        <span className='text-xs text-gray-400 font-light'>inv: MGL524245</span>
                                    </div>
                                </div>
                            </td>
                            <td className='py-[5px] pr-[14px] text-left border-b border-gray-100'>
                                <div className="transaction-date flex flex-col gap-1">
                                    <span className='text-black text-sm font-semibold'>14 Apr 2022</span>
                                    <span className='text-xs text-gray-400 font-light'>at 8:00 PM</span>
                                </div>
                            </td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-gray-400 text-sm font-light border-b border-gray-100'>20</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-semibold border-b border-gray-100'>$420.84</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-light border-b border-gray-100'>
                                <span href="" className='py-3 px-5 border-[0.px] border-gray-100 bg-green-100 text-green-300 w-[50px] h-[30px] rounded-[5px]'>Paid</span>
                            </td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-gray-400 text-sm font-light border-b border-gray-100'>•••</td>

                        </tr>

                        {/* sajib */}
                        <tr>
                            <td className='border-b border-gray-100 capitalize py-[5px] text-left'>
                                <div className="table-data flex items-center gap-2">
                                    <div className="data-img overflow-hidden w-[40px] h-[40px] rounded-[5px]">
                                        <img src={person} alt="" className='w-full h-full cover' />
                                    </div>
                                    <div className="data-name flex flex-col">
                                        <span className='text-sm font-semibold'>Rahman Sajib</span>
                                        <span className='text-xs text-gray-400 font-light'>inv: MGL524245</span>
                                    </div>
                                </div>
                            </td>
                            <td className='py-[5px] pr-[14px] text-left border-b border-gray-100'>
                                <div className="transaction-date flex flex-col gap-1">
                                    <span className='text-black text-sm font-semibold'>14 Apr 2022</span>
                                    <span className='text-xs text-gray-400 font-light'>at 8:00 PM</span>
                                </div>
                            </td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-gray-400 text-sm font-light border-b border-gray-100'>20</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-semibold border-b border-gray-100'>$420.84</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-light border-b border-gray-100'>
                                <span href="" className='py-3 px-5 border-[0.px] border-gray-100 bg-green-100 text-green-300 w-[50px] h-[30px] rounded-[5px]'>Paid</span>
                            </td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-gray-400 text-sm font-light border-b border-gray-100'>•••</td>

                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Invoice