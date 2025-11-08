import React from 'react'

export default function Dashboard() {
  return (
    <div className='h-full w-full bg-gray-500 flex flex-col p-5'>
        <div className='bg-green-200 flex-1 '>
            <h1>Dashboard</h1>
            <div className=' flex h-full w-full gap-3 sm:gap-5 flex-col sm:flex-row'>
                <div className='flex flex-1 bg-amber-100'></div>
                <div className='flex flex-1 bg-amber-300'></div>
                <div className='flex flex-1 bg-amber-700'></div>
            </div>

        </div>
        <div className='flex-2'>
            <h1>Recent Category here</h1>
            <div>
                data here
            </div>
        </div>
    </div>
  )
}
