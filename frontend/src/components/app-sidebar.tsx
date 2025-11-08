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
    
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              {/* logo here */}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
