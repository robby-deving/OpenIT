import { Card } from '@/components/ui/card'
import React, { useEffect , useState} from 'react'
import warning from '@/assets/warning.svg'
import blue from '@/assets/blue.svg'

import brown from '@/assets/brown.svg'

import mostrecent from '@/assets/mostrecent.svg'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export default function Dashboard() {
    const category =[
        "",
        "Earthquakes",
        "Floods",
        "Typhoons",
        "Fires"
    ]
    const [filter, setfilter] = useState(1);
    const [yearly, setyearly] = useState(); 
    const [monthly, setmonthly] = useState();
    const [recent, setrecent] = useState([]);
   const getDashboardData = async () =>{
    const response = await fetch(`http://localhost:3000/api/dashboard/${filter}`)

    const result = await response.json()
    
    console.log(result);
    const month = result.totalsByMonth.November
    const year = result.totalsByYear["2025"]
    console.log(result.mostRecent);
    
    setyearly(year);
    setmonthly(month)
    setrecent(result.mostRecent)
    
    }

     useEffect(()=>{
        getDashboardData()
    },[filter])
  const formatDate = (dateString?: string) => {
  if (!dateString) return "N/A";

  const date = new Date(dateString);
  return isNaN(date.getTime())
    ? "N/A"
    : new Intl.DateTimeFormat("en-PH", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true, 
      }).format(date);
};

        const handleFilter = (number) => {
            console.log(number);
            
            setfilter(number)
        }

        console.log();
        
  return (
    <div className='h-full w-full flex flex-col p-5 '>
        <div className='flex-1 mb-12'>
            <div className='flex justify-between'>
                <h1 className='font-bold text-2xl mb-2'>Dashboard</h1>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Earthquakes" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Earthquakes" onClick={()=> handleFilter(1)}>Earthquake</SelectItem>
                        <SelectItem value="Floods" onClick={()=> handleFilter(2)}>Floods</SelectItem>
                        <SelectItem value="Typhoons" onClick={()=> handleFilter(3)}>Typhoons</SelectItem>
                        <SelectItem value="fires" onClick={()=> handleFilter(4)}>fires</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            
            <div className=' flex h-full w-full gap-3 sm:gap-5 flex-col sm:flex-row'>
                <Card className='flex flex-1 p-5 '>
                    <div className='font-bold text-xl'>Most Recent {category[filter]}</div>
                    <div className='flex gap-4 items-center'>
                        <img src={mostrecent} alt="" />
                        <h1 className='font-extrabold text-2xl flex'>Magnitude {recent.magnitude}</h1>
                    </div>
                </Card>
                <Card className='flex flex-1 p-5 '>
                    <div className='font-bold text-xl'>Total {category[filter]} by Month</div>
                    <div className='flex gap-4 items-center'>
                        <img src={blue} alt="" />
                        <h1 className='font-extrabold text-6xl'>{monthly}</h1>
                    </div>
                </Card>
                <Card className='flex flex-1 p-5  '>
                    <div className='font-bold text-xl'>Total{category[filter]} by Year</div>
                    <div className='flex gap-4 items-center'>
                        <img src={brown} alt="" />
                        <h1 className='font-extrabold text-6xl'>{yearly}</h1>
                    </div>
                </Card>
            </div>

        </div>
        <div className='flex-2'>
            <h1 className='font-bold text-xl py-4'>Recent {category[filter]}</h1>
            <div>
                <div className='flex  p-3 px-5 rounded-xl gap-5 w-full border border-gray-300'>
                    <img src={warning} className='w-10' alt="" />
                    <div className='w-full'>
                        <div className='flex justify-between'>
                            <h1 className='font-bold'>{recent.title}</h1>
                            <p className='ps-2 text-gray-600'>{formatDate(recent.created_at)}</p>
                        </div>
                        
                        <p className='text-gray-600'>{recent.message}</p>
                        <p className='text-gray-600'>{recent.location}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
