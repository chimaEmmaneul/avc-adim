"use client"
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Bell, Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import MobileSidebar from '../mobilesidebar'
import { useProfileStore } from '@/zustand/useProfileStore'

import { useRouter } from 'next-nprogress-bar'

const Header = () => {
  const [open, setIsOpen] = React.useState(false)
  const pathname = usePathname()
  const { profile } = useProfileStore()
  const router = useRouter()



  const titleHeader = () => {
    const primaryRoute = pathname?.split("/")[1]
    return primaryRoute?.split("-").join(" ")
  }

  return (
    <div className='mt-2 mb-5 flex items-center justify-between'>
      <h1 className='font-bold text-3xl text-[#1F192F] capitalize'>{titleHeader()}</h1>

      <div className="flex items-center space-x-3">
        <Bell />
        <div onClick={() => router.push("/profile")} className="relative cursor-pointer">
          <Avatar className="h-14 w-14">
            <AvatarImage src="https://ik.imagekit.io/0xy9wqmrh/user?updatedAt=1740845569228" alt={profile?.data.first_name} />
            <AvatarFallback>{profile?.data.first_name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="absolute bottom-0 right-0 h-3 w-3">
            {/* <GreenCheckIcon className="z-10 " /> */}
          </div>
        </div>
        <div className="hidden md:flex flex-col">
          <span className="text-sm font-medium text-gray-900">{`${profile?.data.first_name} ${profile?.data.last_name}`}</span>
          <span className="text-xs bg-[#0085FF1A]/10  text-[#0085FF] px-1 py-0.5 rounded-md">{profile?.data.email}</span>
        </div>

        <Menu size={30} className='md:hidden' onClick={() => setIsOpen(true)} />
      </div>

      <MobileSidebar open={open} setIsOpen={setIsOpen} />
    </div>
  )
}

export default Header