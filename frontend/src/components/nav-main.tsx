"use client"

import { MoreHorizontal, type LucideIcon } from "lucide-react"
import { useState } from "react"

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,

} from "@/components/ui/sidebar"
import { Switch } from "@radix-ui/react-switch"
import { Label } from "./ui/label"
export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: string
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {



  return (
    <SidebarGroup >
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuButton className= "p-5 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
             <a href={item.url} className="flex gap-3 w-full h-fill ">
              <img className="h-5 w-5" src={item.icon} alt="" /> 
              <div className="font-semibold">
                {item.title}
              </div>
             </a>
          </SidebarMenuButton>
        ))}

      <label className="inline-flex items-center cursor-pointer p-5">
        <input type="checkbox" id="notifs" name="notifs"  className="sr-only peer"/>
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500 dark:peer-checked:bg-green-500"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Notification</span>
      </label>
      </SidebarMenu>
    </SidebarGroup>
  )
}
