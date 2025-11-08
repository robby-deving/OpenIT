import React from 'react'
import toast from 'react-hot-toast';

import { createClient } from '@supabase/supabase-js';

export default function () {
    const supURL = "https://rnwlfsctdekawulfxcbk.supabase.co"
const supAnon ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJud2xmc2N0ZGVrYXd1bGZ4Y2JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1NzgxOTEsImV4cCI6MjA3ODE1NDE5MX0.NUZS3WSu9AhXx-OVQ8rFtBlUiaQYT83IAwEQQTvXPrY"
    const supabase = createClient(supURL, supAnon);

    const [alert, setalert] = useState();

    const subscription = supabase
      .channel('notifications') 
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'notifications' },
        (payload) => {
          
                setalert(payload)
        }
      )
      .subscribe();
  return (
    {
        toast.custom((t) => (
  <div
    className={`${
      t.visible ? 'animate-custom-enter' : 'animate-custom-leave'
    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex border-2 border-blue-500 `}
  >
    <div className="flex-1 w-0 p-4">
      <div className="flex items-start">
        <div className="flex-shrink-0 pt-0.5">
        </div>
        <div className="ml-3 flex-1">
          <p className="text-sm font-medium text-gray-900">
            {alert.title}
          </p>
          <p className="mt-1 text-sm text-gray-500">
         {alert.message}

          </p>
        </div>
      </div>
    </div>
    <div className="flex border-l border-gray-200">
      <button
        onClick={() => toast.dismiss(t.id)}
        className="w-full border text-red-400 border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Close
      </button>
    </div>
  </div>
))

    }
  )
}
