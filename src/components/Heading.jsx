import React from 'react'
import userImg from '../assets/images/user-img.jpg'

const Heading = () => {
  return (
    <div> 
      <div className='h-[50px] w-full p-10 flex justify-between items-center'>
        <h1 className='text-xl font-[520]'>Dashboard</h1>

        <div className="heading-links flex gap-15 items-center">
          <i className="fa-solid fa-magnifying-glass text-xl text-gray-500"></i>
          <i className="fa-regular fa-bell text-xl text-gray-500"></i>

          <div className="heading-user flex gap-4 items-center">
            <div className="user-img rounded-[50%] h-[40px] w-[40px] overflow-hidden">
              <img src={userImg} alt="" className='w-full h-full cover'/>
            </div>

            <div className="user-dropdown border-[0.1px] border-gray-100 p-2 rounded-[5px] bg-gray-100 w-[200px]">
              <select name="" id="" className='font-[510] w-full h-full'>
                <option value="" selected>Mahfuzul Nabil</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Heading
