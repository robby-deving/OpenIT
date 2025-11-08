import { Card } from '@/components/ui/card'
import React from 'react'

export default function Dashboard() {
  return (
    <div className='h-full w-full flex flex-col p-5 '>
        <div className='flex-1 mb-12'>
            <h1 className='font-bold text-2xl mb-2'>Dashboard</h1>
            <div className=' flex h-full w-full gap-3 sm:gap-5 flex-col sm:flex-row'>
                <Card className='flex flex-1 '></Card>
                <Card className='flex flex-1'></Card>
                <Card className='flex flex-1'></Card>
            </div>

        </div>
        <div className='flex-2'>
            <h1 className='font-bold text-xl'>Recent Category here</h1>
            <div>
                data here
            </div>
        </div>
    </div>
  )
}
