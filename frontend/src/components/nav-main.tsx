"use client"

import { MoreHorizontal, type LucideIcon } from "lucide-react"


import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,

} from "@/components/ui/sidebar"

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
    <SidebarGroup>
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
      </SidebarMenu>
    </SidebarGroup>
  )
}
