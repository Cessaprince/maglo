import React from 'react'
import { Link } from 'react-router-dom';
import graph from '../assets/images/Graph.png'
import userImg from '../assets/images/person.png'
import Card from '../components/Card'
import WorkingCapitalChart from '../components/WorkingCapitalChart'
import figma from '../assets/images/figma.png'
import netflix from '../assets/images/netflix.png'
import iphone13 from '../assets/images/iphone-13-pm.png'


const Home = () => {
    return (
        <div>
            <div className="flex gap-15">

                {/*The left side*/}
                <div className="home-left w-[630px] flex flex-col gap-7">
                    {/*The cards */}
                    <div className="total-earnings flex gap-5 w-full">
                        {/*black card */}
                        <div className="total-bal bg-black flex gap-3 items-center pr-10 w-auto p-5 rounded-[10px]">
                            <div className="bal-icon rounded-[50%] h-[40px] w-[40px] bg-gray-800 flex items-center justify-center">
                                <i className="fa-solid fa-house text-sm text-lime-700"></i>
                            </div>

                            <div className="bal-figure flex flex-col gap-1">
                                <p className='text-xs text-gray-700 font-bold'>Total Balance</p>
                                <p className='text-xl font-bold text-white'>$5240.21</p>
                            </div>
                        </div>

                        {/*gray card */}
                        <div className="total-bal bg-gray-100 flex gap-3 items-center pr-10 w-auto p-5 rounded-[10px]">
                            <div className="bal-icon rounded-[50%] h-[40px] w-[40px] bg-gray-300 flex items-center justify-center">
                                <i className="fa-solid fa-house text-sm text-black"></i>
                            </div>

                            <div className="bal-figure flex flex-col gap-1">
                                <p className='text-xs text-gray-400 font-bold'>Total Balance</p>
                                <p className='text-xl font-bold text-black'>$5240.21</p>
                            </div>
                        </div>

                        {/*gray card */}

                        <div className="total-bal bg-gray-100 flex gap-3 items-center pr-10 w-auto p-5 rounded-[10px]">
                            <div className="bal-icon rounded-[50%] h-[40px] w-[40px] bg-gray-300 flex items-center justify-center">
                                <i className="fa-solid fa-house text-sm text-black"></i>
                            </div>

                            <div className="bal-figure flex flex-col gap-1">
                                <p className='text-xs text-gray-400 font-bold'>Total Balance</p>
                                <p className='text-xl font-bold text-black'>$5240.21</p>
                            </div>
                        </div>
                    </div>


                    {/*The graph */}
                    <div className="graph w-full">
                        <WorkingCapitalChart />
                    </div>



                    <div className="transaction-table">
                        <div className="table-head flex justify-between align-items">
                            <h3 className='text-lg font-[520]'>Recent Transaction</h3>
                            <Link to="/dashboard/transaction" className='text-sm text-green-800 hover:pointer hover:text-green-500'>View All →</Link>
                        </div>

                        <table className='border-collapse w-full'>
                            <thead>
                                <tr>
                                    <th className='uppercase py-[5px] pr-[14px] text-left text-gray-400 text-xs' >Name/Business</th>
                                    <th className='uppercase py-[5px] pr-[14px] text-center text-gray-400 text-xs'>Type</th>
                                    <th className='uppercase py-[5px] pr-[14px] text-center text-gray-400 text-xs'>Amount</th>
                                    <th className='uppercase py-[5px] pr-[14px] text-center text-gray-400 text-xs'>Date</th>
                                </tr>
                            </thead>
                            <tbody>

                                {/* iphone 13 pro max*/}
                                <tr>
                                    <td className='capitalize py-[5px] pr-[14px] text-left'>
                                        <div className="table-data flex items-center gap-2">
                                            <div className="data-img overflow-hidden w-[40px] h-[40px] rounded-[5px]">
                                                <img src={iphone13} alt="" className='w-full h-full cover' />
                                            </div>
                                            <div className="data-name flex flex-col">
                                                <span className='text-sm font-semibold'>iphone 13 pro MAX</span>
                                                <span className='text-xs text-gray-400 font-light'>Netflix</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='capitalize py-[5px] pr-[14px] text-center text-gray-400 text-sm font-light'>Mobile</td>
                                    <td className='capitalize py-[5px] pr-[14px] text-center text-black text-sm font-semibold'>$420.84</td>
                                    <td className='capitalize py-[5px] pr-[14px] text-center text-gray-400 text-sm font-light'>14 Apr 2022</td>
                                </tr>


                                {/* netflix subscription*/}
                                <tr>
                                    <td className='capitalize py-[5px] pr-[14px] text-left'>
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
                                    <td className='capitalize py-[5px] pr-[14px] text-center text-gray-400 text-sm font-light'>entertainment</td>
                                    <td className='capitalize py-[5px] pr-[14px] text-center text-black text-sm font-semibold'>$100.00</td>
                                    <td className='capitalize py-[5px] pr-[14px] text-center text-gray-400 text-sm font-light'>05 Apr 2022</td>
                                </tr>

                                {/* figma subscription*/}

                                <tr>
                                    <td className='capitalize py-[5px] pr-[14px] text-left'>
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
                                    <td className='capitalize py-[5px] pr-[14px] text-center text-gray-400 text-sm font-light'>Software</td>
                                    <td className='capitalize py-[5px] pr-[14px] text-center text-black text-sm font-semibold'>$244.20</td>
                                    <td className='capitalize py-[5px] pr-[14px] text-center text-gray-400 text-sm font-light'> Apr 2022</td>
                                </tr>

                            </tbody>

                        </table>
                    </div>

                </div>

                {/*The right side */}
                <div className="home-right flex flex-col flex-1 gap-5">
                  
                    {/* The card will be here */}
                    <div className="flex justify-center items-center">
                        <Card />
                    </div>
                    
                    
                    <div className="transfers-head flex justify-between">
                        <h3 className='text-lg font-[520]'>Scheduled Transfers</h3>
                        <Link to="" className='text-sm text-green-800 hover:pointer hover:text-green-500'>View All →</Link>
                    </div>


                    <div className="transfers flex flex-col gap-5 mb-10">

                        {/*users and their transfer history */}
                        <div className="user-transfers flex justify-between items-center">
                            <div className="user-transfer-info flex gap-2 items-center">
                                <div className="transfer-user-img overflow-hidden h-[30px] w-[30px] rounded-[50%]">
                                    <img src={userImg} alt="" className='cover h-full w-full cover'/>
                                </div>
                                <div className="user-transfer-details flex flex-col">
                                    <span className='text-sm font-semibold'>Saleh Ahmed</span>
                                    <span className='text-gray-400 text-xs font-light'>April 28, 2022 at 11.00</span>
                                </div>

                            </div>
                            <div className="transfer-amount">
                                <span className='text-black text-sm font-semibold'>- $435.00</span>
                            </div>
                        </div>                        
                        
                        <div className="user-transfers flex justify-between items-center">
                            <div className="user-transfer-info flex gap-2 items-center">
                                <div className="transfer-user-img overflow-hidden h-[30px] w-[30px] rounded-[50%]">
                                    <img src={userImg} alt="" className='cover h-full w-full cover'/>
                                </div>
                                <div className="user-transfer-details flex flex-col">
                                    <span className='text-sm font-semibold'>Delowar Hossain</span>
                                    <span className='text-gray-400 text-xs font-light'>April 28, 2022 at 11.00</span>
                                </div>

                            </div>
                            <div className="transfer-amount">
                                <span className='text-black text-sm font-semibold'>- $435.00</span>
                            </div>
                        </div>

                        <div className="user-transfers flex justify-between items-center">
                            <div className="user-transfer-info flex gap-2 items-center">
                                <div className="transfer-user-img overflow-hidden h-[30px] w-[30px] rounded-[50%]">
                                    <img src={userImg} alt="" className='cover h-full w-full cover'/>
                                </div>
                                <div className="user-transfer-details flex flex-col">
                                    <span className='text-sm font-semibold'>Moinul Hassan Nayem</span>
                                    <span className='text-gray-400 text-xs font-light'>April 28, 2022 at 11.00</span>
                                </div>

                            </div>
                            <div className="transfer-amount">
                                <span className='text-black text-sm font-semibold'>- $435.00</span>
                            </div>
                        </div>

                        <div className="user-transfers flex justify-between items-center">
                            <div className="user-transfer-info flex gap-2 items-center">
                                <div className="transfer-user-img overflow-hidden h-[30px] w-[30px] rounded-[50%]">
                                    <img src={userImg} alt="" className='cover h-full w-full cover'/>
                                </div>
                                <div className="user-transfer-details flex flex-col">
                                    <span className='text-sm font-semibold'>Dr. Jubed Ahmed</span>
                                    <span className='text-gray-400 text-xs font-light'>April 28, 2022 at 11.00</span>
                                </div>

                            </div>
                            <div className="transfer-amount">
                                <span className='text-black text-sm font-semibold'>- $435.00</span>
                            </div>
                        </div>

                        <div className="user-transfers flex justify-between items-center">
                            <div className="user-transfer-info flex gap-2 items-center">
                                <div className="transfer-user-img overflow-hidden h-[30px] w-[30px] rounded-[50%]">
                                    <img src={userImg} alt="" className='cover h-full w-full cover'/>
                                </div>
                                <div className="user-transfer-details flex flex-col">
                                    <span className='text-sm font-semibold'>Saleh Ahmed</span>
                                    <span className='text-gray-400 text-xs font-light'>April 28, 2022 at 11.00</span>
                                </div>

                            </div>
                            <div className="transfer-amount">
                                <span className='text-black text-sm font-semibold'>- $435.00</span>
                            </div>
                        </div>                    
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Home