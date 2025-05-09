"use client"

import { useState } from "react"
import { type User } from "@/@types/users"
import { UserIcon } from "lucide-react"
import { ActionIcon } from "@/icon/icon"
import Pagination from "@/shared/Pagination"
import RenderStatusBadge from "@/shared/statusbadge"
import { usePathname, useRouter } from "next/navigation"

interface UserTableProps {
  data: User[]
  itemsPerPage: number
  onDelete?: (userId: number) => void
}

const UserTable = ({ data, itemsPerPage }: UserTableProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(data.length / itemsPerPage)
  const router = useRouter()
  const pathname = usePathname()

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)


  return (
    <div className="w-full mt-4">
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              {["", "USERNAME", "EMAIL", "PHONE", "STATUS", "ACTION"].map((header) => (
                <th key={header} className="text-left py-3 px-4 font-semibold text-sm text-black whitespace-nowrap">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((user) => (
              <tr key={user.id} className="border-b border[#DEE2E6] text-[#6E768E] font-medium text-sm">
                <td>
                  <div className="w-10 h-10 rounded-[50%] bg-gray-200  flex items-center justify-center">
                    <UserIcon size={16} className="text-gray-600" />
                  </div>
                </td>
                <td className="py-4 px-4  whitespace-nowrap">
                  {user.username}
                </td>
                <td className="py-4 px-4 whitespace-nowrap">{user.email}</td>
                <td className="py-4 px-4 whitespace-nowrap">{user.phone}</td>
                <td className="py-4 px-4 whitespace-nowrap">{RenderStatusBadge(user.status)}</td>
                <td className="py-4 px-4 whitespace-nowrap">
                  <button
                    onClick={() => router.push(`${pathname}/${user.id}`)}
                    className="w-8 h-8 bg-main rounded-[4px] flex items-center justify-center text-white"
                  >
                    <ActionIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />

    </div>
  )
}

export default UserTable;