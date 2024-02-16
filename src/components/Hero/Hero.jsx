import React from 'react'
import logo from '../../assets/Ellipse 23.png'
import { useNavigate } from 'react-router-dom'
const Hero = () => {
    const navigate = useNavigate()
    return (
        <div className='py-4 px-[5%] flex flex-col gap-4'>
            <div className='flex items-center '>
                <div className='flex items-center gap-2'>
                    <img src={logo} alt="logo" className='w-[50px]' />
                    <h1>EfuyeGela</h1>
                </div>
                <div className='flex-grow-[0.5]'></div>
                <ul className='flex items-center justify-between flex-grow'>
                    <li>Home</li>
                    <li>FindJob</li>
                    <li>AboutUs</li>
                    <button className='bg-[#328572] px-5 py-2 rounded text-[#ffffff] cursor-pointer shadow-md' onClick={()=> navigate('/account/login')}>Login</button>
                </ul>
            </div>
            <div className='grid grid-cols-2 gap-5 h-[85vh]'>
                <div className='flex flex-col justify-center items-start gap-8'>
                    <h1 className=' text-5xl'>Find your Dream Job <br /> in new castle</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur.
                        Tellus velit ultrices bibendum mollis
                        eu sit tempor eu pulvinarLorem ipsum dolor
                        sit amet consectetur. Tellus velit ultrices
                        bibendum mollis eu sit tempor eu pulvinar
                    </p>
                    <div className='flex gap-2 bg-[#999999] p-2 rounded items-center'>
                        <input type="text" placeholder='Search by Jobs title. .....' className=' bg-transparent text-white placeholder:text-white border-none outline-none px-2 py-1' />
                        <hr className='w-[1px] h-[4vh] bg-[#171717] border-none ' />
                        <input type="text" placeholder='Search by location(city). .....' className=' bg-transparent text-white placeholder:text-white border-none outline-none  px-2 py-1' />
                        <button className='bg-[#6A6A6A] px-5 py-2 rounded text-[#ffffff] cursor-pointer shadow-md'>Find job</button>
                    </div>
                    <div className='flex justify-start items-center w-full'>
                        <div>icon</div>
                        <div className='flex-grow-[0.7]'></div>
                        <button className='bg-[#328572] px-5 py-2 rounded text-[#ffffff] cursor-pointer shadow-md' onClick={()=> navigate('/account/login')}>Login</button>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='w-[300px] h-[300px] bg-[#999999] rounded'></div>
                </div>
            </div>
        </div>
    )
}

export default Hero