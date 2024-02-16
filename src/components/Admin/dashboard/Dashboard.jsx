import React from 'react'
import Example from './TriangleBar'

const Dashboard = () => {
    return (
        <div className='flex flex-col gap-10 items-center'>
            <div className='flex gap-8 px-6 w-full'>
                <div className='flex-grow bg-[#2ebc9b] p-4 rounded-md flex flex-col flex-wrap gap-6 text-white'>
                    <h4 className='text-sm text-center'>Total Number Of <br /> Employee</h4>
                    <p className='text-center text-2xl font-bold'>203</p>
                </div>
                <div className='flex-grow bg-[#2ebc9b] p-4 rounded-md flex flex-col flex-wrap gap-6 text-white'>
                    <h4 className='text-sm text-center'>Total Number Of <br /> Employee</h4>
                    <p className='text-center text-2xl font-bold'>203</p>
                </div>
                <div className='flex-grow bg-[#2ebc9b] p-4 rounded-md flex flex-col flex-wrap gap-6 text-white'>
                    <h4 className='text-sm text-center'>Total Number Of <br /> Employee</h4>
                    <p className='text-center text-2xl font-bold'>203</p>
                </div>
                <div className='flex-grow bg-[#2ebc9b] p-4 rounded-md flex flex-col flex-wrap gap-6 text-white'>
                    <h4 className='text-sm text-center'>Total Number Of <br /> Employee</h4>
                    <p className='text-center text-2xl font-bold'>203</p>
                </div>
            </div>
            <div className=' h-[300px] w-[400px] bg-gray-100 p-5'>
                <h1 className='text-sm mb-5 text-gray-400'>Employment Relationship</h1>
                <Example />
            </div>
        </div>
    )
}

export default Dashboard
