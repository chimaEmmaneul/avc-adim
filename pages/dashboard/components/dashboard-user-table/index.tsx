"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { MoreVertical } from "lucide-react"

export interface User {
  id: string
  name: string
  avatar: string
  transferred: number
  country: string
  email: string
  joinDate: string
}

interface UsersTableProps {
  users: User[]
}

export default function UsersTable({ users }: UsersTableProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = (userId: string) => {
    if (activeMenu === userId) {
      setActiveMenu(null)
    } else {
      setActiveMenu(userId)
    }
  }

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
                <td className=" border-t border-b border-l pl-4 border-[#EBE8FF] rounded-l-lg whitespace-nowrap">  <div className="relative h-10 w-10 overflow-hidden rounded-[50%]">
                  <Image src={user.avatar || "/placeholder.svg"} alt={user.name} fill className="object-cover" />
                </div>
                </td>
                <td className="px-4 py-2  border-t border-b  border-[#EBE8FF]  whitespace-nowrap">
                  {user.name}
                </td>
                <td className="px-4 py-3 border-t border-b border-[#EBE8FF] font-medium whitespace-nowrap">
                  {formatCurrency(user.transferred)}
                </td>
                <td className="px-4 py-3 border-t border-b border-[#EBE8FF] text-gray-400 whitespace-nowrap">
                  {user.country}
                </td>
                <td className="px-4 py-3 border-t border-b border-[#EBE8FF] text-gray-400 whitespace-nowrap">
                  {user.email}
                </td>
                <td className="px-4 py-3 border-t border-b border-[#EBE8FF] text-gray-700 whitespace-nowrap">
                  {user.joinDate}
                </td>
                <td className="px-4 py-3 border-t border-b border-r border-[#EBE8FF] rounded-r-lg text-right whitespace-nowrap">
                  <div className="relative inline-block" ref={menuRef}>
                    <button
                      onClick={() => toggleMenu(user.id)}
                      className="p-1 rounded-full hover:bg-gray-100"
                      aria-label="More options"
                    >
                      <MoreVertical className="h-5 w-5 text-red-500" />
                    </button>

                    {activeMenu === user.id && (
                      <div className="absolute right-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                        <div className="py-1" role="menu" aria-orientation="vertical">
                          <button
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => {
                              // onUserAction?.("view", user)
                              setActiveMenu(null)
                            }}
                          >
                            View Profile
                          </button>
                          <button
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => {
                              // onUserAction?.("edit", user)
                              setActiveMenu(null)
                            }}
                          >
                            Edit User
                          </button>
                          <button
                            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                            onClick={() => {
                              // onUserAction?.("delete", user)
                              setActiveMenu(null)
                            }}
                          >
                            Delete User
                          </button>
                        </div>
                      </div>
                    )}
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

