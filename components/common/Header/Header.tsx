"use client"
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Bell } from 'lucide-react'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  const user = {
    name: "Felix Johnson",
    email: "admin@azany.com",
    avatar: "/placeholder.svg?height=40&width=40",
  }

  const titleHeader = () => {
    const primaryRoute = pathname?.split("/")[1]
    return primaryRoute?.split("-").join(" ")
  }

  return (
    <div className='mt-2 mb-5 flex items-center justify-between'>
      <h1 className='font-bold text-3xl text-[#1F192F] capitalize'>{titleHeader()}</h1>

      <div className="flex items-center space-x-3">
        <Bell />
        <div className="relative">
          <Avatar className="h-14 w-14">
            <AvatarImage src="https://ik.imagekit.io/0xy9wqmrh/user?updatedAt=1740845569228" alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="absolute bottom-0 right-0 h-3 w-3">
            {/* <GreenCheckIcon className="z-10 " /> */}
          </div>
        </div>
        <div className="hidden md:flex flex-col">
          <span className="text-sm font-medium text-gray-900">{user.name}</span>
          <span className="text-xs bg-[#0085FF1A]/10  text-[#0085FF]">{user.email}</span>
        </div>
      </div>
    </div>
  )
}

export default Header