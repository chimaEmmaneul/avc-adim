"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { MoreVertical, UserIcon } from "lucide-react"
import { UsersTableProps } from "../../@types/dashbaord"
import { useRouter } from "next/navigation"



export default function UsersTable({ users }: UsersTableProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  // const toggleMenu = (userId: string) => {
  //   if (activeMenu === userId) {
  //     setActiveMenu(null)
  //   } else {
  //     setActiveMenu(userId)
  //   }
  // }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const formatCurrency = (amount: number) => {
    return `$ ${amount.toFixed(2)}`
  }

  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold mb-6">Top Users</h2>

      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[800px] border-separate border-spacing-y-3">
          <thead>
            <tr>
              {["", "Name", "Transferred", "Country", "Email", "Join Date", ""].map((header) => (
                <th key={header} className="text-left px-4 py-2 font-medium text-sm text-gray-600 whitespace-nowrap">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="bg-white hover:bg-gray-50">
                <td className=" border-t border-b border-l pl-4 border-[#EBE8FF] rounded-l-lg whitespace-nowrap">
                  {user.profile_photo ? 
                  <div className="relative h-10 w-10 overflow-hidden rounded-[50%]">
                    <Image src={user?.profile_photo || "/placeholder.svg"} alt={user.first_name} fill className="object-cover" />
                    </div>
                    :
                    <div className="w-10 h-10 rounded-[50%] bg-gray-200  flex items-center justify-center">
                      <UserIcon size={16} className="text-gray-600 mx-auto" />
                    </div>
                  }
                </td>
                <td className="px-4 py-2  border-t border-b  border-[#EBE8FF]  whitespace-nowrap">
                  {user.first_name}
                </td>
                <td className="px-4 py-3 border-t border-b border-[#EBE8FF] font-medium whitespace-nowrap">
                  {formatCurrency(user.total_transferred)}
                </td>
                <td className="px-4 py-3 border-t border-b border-[#EBE8FF] text-gray-400 whitespace-nowrap">
                  {user.country_name}
                </td>
                <td className="px-4 py-3 border-t border-b border-[#EBE8FF] text-gray-400 whitespace-nowrap">
                  {user.email}
                </td>
                <td className="px-4 py-3 border-t border-b border-[#EBE8FF] text-gray-700 whitespace-nowrap">
                  {user.created_date}
                </td>
                <td className="px-4 py-3 border-t border-b border-r border-[#EBE8FF] rounded-r-lg text-right whitespace-nowrap">
                  <div className="relative inline-block" ref={menuRef}>
                    <button
                      onClick={() => router.push(`/overview/${user.id}`)}
                      className="p-1 rounded-full hover:bg-gray-100"
                      aria-label="More options"
                    >
                      <MoreVertical className="h-5 w-5 text-red-500" />
                    </button>

                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

