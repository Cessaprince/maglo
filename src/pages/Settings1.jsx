import React from 'react'

const Settings1 = () => {
    return (
        <div>
            <div>
                <div className='flex flex-col gap-5 ml-10 w-[70%]'>
                    <div className="flex flex-col">
                        <h3 className='text-lg font-semibold'>Account Information</h3>
                        <span className="text-gray-400 text-light text-xs">Update your account information</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <h3 className='text-lg font-semibold mt-3'>Personal Information</h3>
                        <a href="/dashboard/settings2" className='text-green-700 inline-flex gap-2 font-semibold capitalize items-center hover:text-green-500'><i className="fa-solid fa-pencil"></i>edit</a>
                    </div>

                    <div>
                        <form action="" className='flex flex-col gap-5 w-full'>
                            <div className="flex gap-5 items-center">
                                <div className="flex flex-col gap-1 w-[50%]">
                                    <label htmlFor="" className='capitalize text-sm font-semibold'>first name</label>
                                    <input type="text" name="" id="" className='py-2 px-5 border-gray-300 border-[0.1px] rounded-[5px]' placeholder='Oluchi' readOnly />
                                </div>
                                <div className="flex flex-col gap-1 flex-1">
                                    <label htmlFor="" className='capitalize text-sm font-semibold'>last name</label>
                                    <input type="text" name="" id="" className='py-2 px-5 border-gray-300 border-[0.1px] rounded-[5px]' placeholder='Nabil' readOnly />
                                </div>
                            </div>

                            <div className="flex gap-5 items-center">
                                <div className="flex flex-col gap-1 w-[50%]">
                                    <label htmlFor="" className='capitalize text-sm font-semibold'>date of birth</label>
                                    <input type="date" name="" id="" className='py-2 px-5 border-gray-300 border-[0.1px] rounded-[5px]' placeholder='DD / MM / YYYY' readOnly />
                                </div>
                                <div className="flex flex-col gap-1 flex-1">
                                    <label htmlFor="" className='capitalize text-sm font-semibold'>mobile number</label>
                                    <input type="number" name="" id="" className='p-2 border-gray-300 border-[0.1px] rounded-[5px]' placeholder='09023899735' readOnly />
                                </div>
                            </div>

                            <div className="flex gap-5 items-center">
                                <div className="flex flex-col gap-1 w-full">
                                    <label htmlFor="" className='capitalize text-sm font-semibold'>email</label>
                                    <input type="email" name="" id="" className='py-2 px-5 border-gray-300 border-[0.1px] rounded-[5px]' placeholder='cessaprince125@gmail.com' readOnly />
                                </div>
                            </div>

                            <div className="flex gap-5 items-center">
                                <div className="flex flex-col gap-1 w-[50%]">
                                    <label htmlFor="" className='capitalize text-sm font-semibold'>new password</label>
                                    <input type="password" name="" id="" className='py-2 px-5 border-gray-300 border-[0.1px] rounded-[5px]' placeholder='••••••••' readOnly />
                                </div>
                                <div className="flex flex-col gap-1 flex-1">
                                    <label htmlFor="" className='capitalize text-sm font-semibold'>Confirm Password</label>
                                    <input type="password" name="" id="" className='py-2 px-5 border-gray-300 border-[0.1px] rounded-[5px]' placeholder='••••••••' readOnly />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings1