import * as React from "react"
import { NavMain } from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import dashboard from '@/assets/dashboard.svg'
import map from '@/assets/map.svg'
import notif from '@/assets/notif.svg'
import safetyguidelines from '@/assets/safetyguideline.svg'
import masid from '@/assets/masid.svg'
import hotlines from '@/assets/hotlines.svg'


const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "dashboard",
      icon: dashboard
    },
        {
      title: "Map",
      url: "map",
      icon: map
    },
        {
      title: "Alerts",
      url: "alerts",
      icon: notif
    },
        {
      title: "Safety Tips",
      url: "safety-guides",
      icon: safetyguidelines
    },
      {
      title: "Emergency Hotlines",
      url: "emergency-hotlines",
      icon: hotlines
    },
    
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} >
      <div className="bg-white">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <img src={masid} alt="" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent >
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
      </div>
      
    </Sidebar>
  )
}
