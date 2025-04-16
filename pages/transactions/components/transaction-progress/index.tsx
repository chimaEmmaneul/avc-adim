"use client"
import { Button } from '@/components/ui/button'
import { ProgressLoaderIcon } from '@/icon/icon'
import React, { useState } from 'react'

const TransactionProgress = () => {
  const [transactionStatus,] = useState("Pending")

  return (
    <div className="mt-10 space-y-4 border border-[#EEEEEE] rounded-sm">
      <div className="flex items-center gap-2 mb-4 border-b px-4 py-2">
        <ProgressLoaderIcon />
        <h2 className="text-lg font-semibold">Progress of Transactions</h2>
      </div>

      <div className="flex justify-center items-center gap-8 md:gap-20 p-4">
        <div className="flex flex-col items-center gap-2">
          <div
            className={`h-4 w-4 rounded-full ${transactionStatus === "Pending" ? "bg-main" : "border border-gray-300"}`}
          ></div>
          <span className="text-sm">Pending</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div
            className={`h-4 w-4 rounded-full ${transactionStatus === "Confirmed" ? "bg-main" : "border border-gray-300"}`}
          ></div>
          <span className="text-sm">Confirmed</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div
            className={`h-4 w-4 rounded-full ${transactionStatus === "Declined" ? "bg-main" : "border border-gray-300"}`}
          ></div>
          <span className="text-sm">Declined</span>
        </div>
      </div>

      <div className="flex justify-center mt-10 pb-3">
        <Button className="bg-main  text-white px-8 rounded-md">
          Update
        </Button>
      </div>
    </div>
  )
}

export default TransactionProgress