
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Alerts() {

  const [notif, setnotif] = useState([]);
  const fetchNotif = async () =>{


    const response = await fetch('http://localhost:3000/api/notifications')
    console.log(response);


    const result = await response.json()

    console.log(result.data );
    localStorage.setItem('notifs',JSON.stringify(result.data))

    setnotif(result.data)
    toast.success("Fetch Latest Data")


  }

  useEffect(()=>{
    fetchNotif()

    
    if(notif.length === 0){
          const offlinedata = localStorage.getItem('notifs')
          setnotif(JSON.parse(offlinedata))
    }
  },[])

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

  return (
    <div className="p-8">
      <h1 className="pb-5 font-bold text-2xl">Alerts</h1>
    {notif.map((notif)=>(
      <div className="w-full border-orange-400 border-3 rounded-xl bg-orange-50 p-4 mb-5 flex items-center gap-4">
        <div className="h-20 w-[5rem] bg-red-400 rounded-full flex items-center justify-center">
          <p className="text-white font-bold">{notif.magnitude_threshold}</p>
          
        </div>

        <div className="flex flex-1 flex-col">
          <p className="text-red-500 font-bold text-2xl">
            {notif.title}
          </p>
          <p className="font-medium text-sm">
            📍 {notif.location}
          </p>
          <p className="font-bold text-sm pt-1">
            {notif.message}
          </p>
          <div className="pt-1">
            <p className="text-gray-400 text-sm font-semibold">
              {formatDate(notif.created_at)}
            </p>
          </div>
        </div>
      </div>
    ))}
      

      
    </div>
  );
}
