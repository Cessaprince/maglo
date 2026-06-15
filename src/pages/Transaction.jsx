import React from 'react'
import { Link } from 'react-router-dom';
import userImg from '../assets/images/user-img.jpg'
import iphone13 from '../assets/images/iphone-13-pm.png'
import netflix from '../assets/images/netflix.png'
import figma from '../assets/images/figma.png'
import bitcoin from '../assets/images/bitcoin.png'
import person from '../assets/images/person.png'
import instagram from '../assets/images/instagram.jpeg'
import uihut from '../assets/images/uihut.png'
import citi from '../assets/images/citi.png'


const Transaction = () => {
    return (
        <div>
            <div className="search-transactions mb-[20px]">
                <div className="searchbar border-gray-100 px-4 py-2 bg-gray-100 w-[300px] rounded-[20px] flex gap-3 items-center">
                    <i className="fa-solid fa-magnifying-glass text-l text-gray-500"></i>

                    <input type="search" name="" id="" className='flex-1 text-sm' placeholder='Search anything on transactions'/>
                </div>
            </div>
            <div className="transaction-table">
                <table className='border-collapse w-full border-separate border-spacing-y-2'>
                    <thead>
                        <tr className=''>
                            <th className='uppercase py-[5px] pr-[14px] text-left text-gray-400 text-xs' >Name/Business</th>
                            <th className='uppercase py-[5px] pr-[14px] text-left text-gray-400 text-xs'>Type</th>
                            <th className='uppercase py-[5px] pr-[14px] text-left text-gray-400 text-xs'>Amount</th>
                            <th className='uppercase py-[5px] pr-[14px] text-left text-gray-400 text-xs'>Date</th>
                            <th className='uppercase py-[5px] pr-[14px] text-left text-gray-400 text-xs'>invoice id</th>
                            <th className='uppercase py-[5px] pr-[14px] text-left text-gray-400 text-xs'>action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* iphone 13 pro max*/}
                        <tr>
                            <td className='border-b border-gray-100 capitalize py-[5px] text-left'>
                                <div className="table-data flex items-center gap-2">
                                    <div className="data-img overflow-hidden w-[40px] h-[40px] rounded-[5px]">
                                        <img src={iphone13} alt="" className='w-full h-full cover' />
                                    </div>
                                    <div className="data-name flex flex-col">
                                        <span className='text-sm font-semibold'>iphone 13 pro max</span>
                                        <span className='text-xs text-gray-400 font-light'>Apple Inc</span>
                                    </div>
                                </div>
                            </td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-gray-400 text-sm font-light border-b border-gray-100'>Mobile</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-semibold border-b border-gray-100'>$420.84</td>
                            <td className='py-[5px] pr-[14px] text-left border-b border-gray-100'>
                                <div className="transaction-date flex flex-col gap-1">
                                    <span className='text-black text-sm font-semibold'>14 Apr 2022</span>
                                    <span className='text-xs text-gray-400 font-light'>at 8:00 PM</span>
                                </div>
                            </td>
                            <td className='uppercase py-[5px] pr-[14px] text-left text-sm text-gray-400 font-light'>mgl0124877</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-semibold'>
                                <Link to="" className='py-3 px-5 border-[0.px] border-gray-100 bg-lime-500 w-[50px] h-[30px] rounded-[5px] hover:bg-lime-400'>View</Link>
                            </td>
                        </tr>

                        {/* netflix */}

                        <tr>
                            <td className='capitalize py-[5px] text-left'>
                                <div className="table-data flex items-center gap-2">
                                    <div className="data-img overflow-hidden w-[40px] h-[40px] rounded-[5px]">
                                        <img src={netflix} alt="" className='w-full h-full cover' />
                                    </div>
                                    <div className="data-name flex flex-col">
                                        <span className='text-sm font-semibold'>Netflix subscription</span>
                                        <span className='text-xs text-gray-400 font-light'>Netflix</span>
                                    </div>
                                </div>
                            </td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-gray-400 text-sm font-light'>Entertainment</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-semibold'>$420.84</td>
                            <td className='py-[5px] pr-[14px] text-left'>
                                <div className="transaction-date flex flex-col gap-1">
                                    <span className='text-black text-sm font-semibold'>14 Apr 2022</span>
                                    <span className='text-xs text-gray-400 font-light'>at 8:00 PM</span>
                                </div>
                            </td>
                            <td className='uppercase py-[5px] pr-[14px] text-left text-sm text-gray-400 font-light'>mgl0124877</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-semibold'>
                                <Link to="" className='py-3 px-5 border-[0.px] border-gray-100 bg-lime-500 w-[50px] h-[30px] rounded-[5px] hover:bg-lime-400'>View</Link>
                            </td>
                        </tr>


                        {/* figma */}

                        <tr>
                            <td className='capitalize py-[5px] text-left'>
                                <div className="table-data flex items-center gap-2">
                                    <div className="data-img overflow-hidden w-[40px] h-[40px] rounded-[5px]">
                                        <img src={figma} alt="" className='w-full h-full cover' />
                                    </div>
                                    <div className="data-name flex flex-col">
                                        <span className='text-sm font-semibold'>Figma subscription</span>
                                        <span className='text-xs text-gray-400 font-light'>figma</span>
                                    </div>
                                </div>
                            </td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-gray-400 text-sm font-light'>Software</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-semibold'>$420.84</td>
                            <td className='py-[5px] pr-[14px] text-left'>
                                <div className="transaction-date flex flex-col gap-1">
                                    <span className='text-black text-sm font-semibold'>14 Apr 2022</span>
                                    <span className='text-xs text-gray-400 font-light'>at 8:00 PM</span>
                                </div>
                            </td>
                            <td className='uppercase py-[5px] pr-[14px] text-left text-sm text-gray-400 font-light'>mgl0124877</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-semibold'>
                                <Link to="" className='py-3 px-5 border-[0.px] border-gray-100 bg-lime-500 w-[50px] h-[30px] rounded-[5px] hover:bg-lime-400'>View</Link>
                            </td>
                        </tr>

                        {/* bitcoin */}
                        <tr>
                            <td className='capitalize py-[5px] text-left'>
                                <div className="table-data flex items-center gap-2">
                                    <div className="data-img overflow-hidden w-[40px] h-[40px] rounded-[5px]">
                                        <img src={bitcoin} alt="" className='w-full h-full cover' />
                                    </div>
                                    <div className="data-name flex flex-col">
                                        <span className='text-sm font-semibold'>bitcoin transaction</span>
                                        <span className='text-xs text-gray-400 font-light'>coinbase</span>
                                    </div>
                                </div>
                            </td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-gray-400 text-sm font-light'>technology</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-semibold'>$420.84</td>
                            <td className='py-[5px] pr-[14px] text-left'>
                                <div className="transaction-date flex flex-col gap-1">
                                    <span className='text-black text-sm font-semibold'>14 Apr 2022</span>
                                    <span className='text-xs text-gray-400 font-light'>at 8:00 PM</span>
                                </div>
                            </td>
                            <td className='uppercase py-[5px] pr-[14px] text-left text-sm text-gray-400 font-light'>mgl0124877</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-semibold'>
                                <Link to="" className='py-3 px-5 border-[0.px] border-gray-100 bg-lime-500 w-[50px] h-[30px] rounded-[5px] hover:bg-lime-400'>View</Link>
                            </td>
                        </tr>

                        {/* person */}

                        <tr>
                            <td className='capitalize py-[5px] text-left'>
                                <div className="table-data flex items-center gap-2">
                                    <div className="data-img overflow-hidden w-[40px] h-[40px] rounded-[5px]">
                                        <img src={person} alt="" className='w-full h-full cover' />
                                    </div>
                                    <div className="data-name flex flex-col">
                                        <span className='text-sm font-semibold'>sajib rahman</span>
                                        <span className='text-xs text-gray-400 font-light'>appsumo</span>
                                    </div>
                                </div>
                            </td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-gray-400 text-sm font-light'>withdraw</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-semibold'>$420.84</td>
                            <td className='py-[5px] pr-[14px] text-left'>
                                <div className="transaction-date flex flex-col gap-1">
                                    <span className='text-black text-sm font-semibold'>14 Apr 2022</span>
                                    <span className='text-xs text-gray-400 font-light'>at 8:00 PM</span>
                                </div>
                            </td>
                            <td className='uppercase py-[5px] pr-[14px] text-left text-sm text-gray-400 font-light'>mgl0124877</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-semibold'>
                                <Link to="" className='py-3 px-5 border-[0.px] border-gray-100 bg-lime-500 w-[50px] h-[30px] rounded-[5px] hover:bg-lime-400'>View</Link>
                            </td>
                        </tr>

                        {/* instagram */}

                        <tr>
                            <td className='capitalize py-[5px] text-left'>
                                <div className="table-data flex items-center gap-2">
                                    <div className="data-img overflow-hidden w-[40px] h-[40px] rounded-[5px]">
                                        <img src={instagram} alt="" className='w-full h-full cover' />
                                    </div>
                                    <div className="data-name flex flex-col">
                                        <span className='text-sm font-semibold'>instagram ads</span>
                                        <span className='text-xs text-gray-400 font-light'>meta</span>
                                    </div>
                                </div>
                            </td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-gray-400 text-sm font-light'>entertainment</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-semibold'>$420.84</td>
                            <td className='py-[5px] pr-[14px] text-left'>
                                <div className="transaction-date flex flex-col gap-1">
                                    <span className='text-black text-sm font-semibold'>14 Apr 2022</span>
                                    <span className='text-xs text-gray-400 font-light'>at 8:00 PM</span>
                                </div>
                            </td>
                            <td className='uppercase py-[5px] pr-[14px] text-left text-sm text-gray-400 font-light'>mgl0124877</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-semibold'>
                                <Link to="" className='py-3 px-5 border-[0.px] border-gray-100 bg-lime-500 w-[50px] h-[30px] rounded-[5px] hover:bg-lime-400'>View</Link>
                            </td>
                        </tr>

                        {/* uihut */}
                        <tr>
                            <td className='capitalize py-[5px] text-left'>
                                <div className="table-data flex items-center gap-2">
                                    <div className="data-img overflow-hidden w-[40px] h-[40px] rounded-[5px]">
                                        <img src={uihut} alt="" className='w-full h-full cover' />
                                    </div>
                                    <div className="data-name flex flex-col">
                                        <span className='text-sm font-semibold'>UIHUT subscription</span>
                                        <span className='text-xs text-gray-400 font-light'>UIHUT</span>
                                    </div>
                                </div>
                            </td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-gray-400 text-sm font-light'>payment</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-semibold'>$420.84</td>
                            <td className='py-[5px] pr-[14px] text-left'>
                                <div className="transaction-date flex flex-col gap-1">
                                    <span className='text-black text-sm font-semibold'>14 Apr 2022</span>
                                    <span className='text-xs text-gray-400 font-light'>at 8:00 PM</span>
                                </div>
                            </td>
                            <td className='uppercase py-[5px] pr-[14px] text-left text-sm text-gray-400 font-light'>mgl0124877</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-semibold'>
                                <Link to="" className='py-3 px-5 border-[0.px] border-gray-100 bg-lime-500 w-[50px] h-[30px] rounded-[5px] hover:bg-lime-400'>View</Link>
                            </td>
                        </tr>

                        {/* citi */}
                        <tr>
                            <td className='capitalize py-[5px] text-left'>
                                <div className="table-data flex items-center gap-2">
                                    <div className="data-img overflow-hidden w-[40px] h-[40px] rounded-[5px]">
                                        <img src={citi} alt="" className='w-full h-full cover' />
                                    </div>
                                    <div className="data-name flex flex-col">
                                        <span className='text-sm font-semibold'>citi bank ltd.</span>
                                        <span className='text-xs text-gray-400 font-light'>Apple Inc</span>
                                    </div>
                                </div>
                            </td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-gray-400 text-sm font-light'>withdraw</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-semibold'>$420.84</td>
                            <td className='py-[5px] pr-[14px] text-left'>
                                <div className="transaction-date flex flex-col gap-1">
                                    <span className='text-black text-sm font-semibold'>14 Apr 2022</span>
                                    <span className='text-xs text-gray-400 font-light'>at 8:00 PM</span>
                                </div>
                            </td>
                            <td className='uppercase py-[5px] pr-[14px] text-left text-sm text-gray-400 font-light'>mgl0124877</td>
                            <td className='capitalize py-[5px] pr-[14px] text-left text-black text-sm font-semibold'>
                                <Link to="" className='py-3 px-5 border-[0.px] border-gray-100 bg-lime-500 w-[50px] h-[30px] rounded-[5px] hover:bg-lime-400'>View</Link>
                            </td>
                        </tr>

                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Transaction