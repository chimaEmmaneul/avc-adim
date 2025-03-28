"use client"

import { useState } from "react"
import { type User, UserStatus } from "@/@types/users"
import { ChevronLeft, ChevronRight, UserIcon } from "lucide-react"
import { ActionIcon } from "@/icon/icon"

interface UserTableProps {
  data: User[]
  itemsPerPage: number
  onDelete?: (userId: number) => void
}

const UserTable = ({ data, itemsPerPage }: UserTableProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(data.length / itemsPerPage)

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePageClick = (page: number) => {
    setCurrentPage(page)
  }

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

  const renderStatusBadge = (status: UserStatus) => {
    switch (status) {
      case UserStatus.ACTIVE:
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-[#28C76F] text-[#28C76F]">
            ACTIVE
          </span>
        )
      case UserStatus.BANNED:
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-[#FF0004] text-[#FF0004]">
            BANNED
          </span>
        )
      case UserStatus.EMAIL_UNVERIFIED:
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            EMAIL UNVERIFIED
          </span>
        )
      default:
        return null
    }
  }

  return (
    <div className="w-full mt-4">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              {["", "USERNAME", "EMAIL", "PHONE", "STATUS", "ACTION"].map((header) => (
                <th key={header} className="text-left py-3 px-2 font-semibold text-sm text-black">
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
                <td className="py-4 px-2 ">
                  {user.username}
                </td>
                <td className="py-4 px-2">{user.email}</td>
                <td className="py-4 px-2">{user.phone}</td>
                <td className="py-4 px-2 text-xs">{renderStatusBadge(user.status)}</td>
                <td className="py-4 px-2">
                  <button
                    // onClick={() => onDelete(user.id)}
                    className="w-8 h-8 bg-[#EC1A25] rounded-[4px] flex items-center justify-center text-white  "
                  >
                    <ActionIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center mt-5 gap-1">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="w-8 h-8 flex items-center justify-center border rounded disabled:opacity-50"
        >
          <ChevronLeft size={16} />
        </button>

        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(index + 1)}
            className={`w-8 h-8 flex items-center justify-center border rounded ${currentPage === index + 1 ? "bg-red-500 text-white border-red-500" : "hover:bg-gray-50"
              }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="w-8 h-8 flex items-center justify-center border rounded disabled:opacity-50"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  )
}

export default UserTable;