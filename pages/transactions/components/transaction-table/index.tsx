"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ActionIcon } from "@/icon/icon"
import { TRANSACTIONS } from "../../constants/transactions"
import { Transaction } from "../../@types/transaction"
import { usePathname, useRouter } from "next/navigation"

interface UserTableProps {
  data: Transaction[]
  itemsPerPage: number
  onDelete?: (userId: number) => void
}

const TransactionTable = ({ data, itemsPerPage }: UserTableProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(TRANSACTIONS.length / itemsPerPage)

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



  return (
    <div className="w-full mt-4">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              {["TRX ID", "USERNAME", "TRANSACTION TYPE", "AMOUNT/CONVERTION", "PAYMENTETHOD", "STATUS", ""].map((header) => (
                <th key={header} className="text-left py-3 px-2 font-semibold text-sm text-[#6E768E]">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((transaction) => (
              <tr onClick={() => router.push(`${pathname}/${transaction.id}`)} key={transaction.id} className="border-b border[#DEE2E6] text-[#6E768E] font-medium text-sm even:bg-[#DEE2E6]/30 odd:bg-white">
                <td className="px-2 py-4">
                  {transaction.id}
                </td>
                <td className="py-4 px-2  ">
                  {transaction.username}
                </td>
                <td className="py-4 px-2 ">{transaction.transactionType}</td>
                <td className="py-4 px-2 ">{transaction.amount}</td>
                <td className="py-4 px-2 ">{transaction.paymentMethod}</td>
                <td className="py-4 px-2 ">{transaction.status}</td>
                <td className="py-4 px-2 ">
                  <button
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

export default TransactionTable;