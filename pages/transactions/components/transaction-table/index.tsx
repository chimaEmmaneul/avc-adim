"use client"

import { useState } from "react"
import { ActionIcon } from "@/icon/icon"
import { TRANSACTIONS } from "../../constants/transactions"
import { Transaction } from "../../@types/transaction"
import { usePathname, useRouter } from "next/navigation"
import Pagination from "@/shared/Pagination"

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



  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)


  return (
    <div className="w-full mt-4">
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              {["TRX ID", "USERNAME", "TRANSACTION TYPE", "AMOUNT/CONVERTION", "PAYMENTETHOD", "STATUS", ""].map((header) => (
                <th key={header} className="text-left py-3 px-4 font-semibold whitespace-nowrap text-sm text-[#6E768E]">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((transaction) => (
              <tr onClick={() => router.push(`${pathname}/${transaction.id}`)} key={transaction.id} className="border-b border[#DEE2E6] text-[#6E768E] font-medium text-sm even:bg-[#DEE2E6]/30 odd:bg-white">
                <td className="px-4 py-4">
                  {transaction.id}
                </td>
                <td className="py-4 px-2  ">
                  {transaction.username}
                </td>
                <td className="py-4 px-4 ">{transaction.transactionType}</td>
                <td className="py-4 px-4 ">{transaction.amount}</td>
                <td className="py-4 px-4 ">{transaction.paymentMethod}</td>
                <td className="py-4 px-4 ">{transaction.status}</td>
                <td className="py-4 px-4 ">
                  <button
                    className="w-8 h-8 bg-main rounded-[4px] flex items-center justify-center text-white  "
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

      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
    </div>
  )
}

export default TransactionTable;