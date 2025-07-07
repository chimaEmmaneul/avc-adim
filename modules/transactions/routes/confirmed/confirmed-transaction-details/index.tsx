"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { Copy, Download } from 'lucide-react'
import { TRANSACTION_DETAILS } from '@/pages/transactions/constants/transactions'
import { WithdrawalIcon } from '@/icon/icon'
import { useGetTransactionDetails } from '@/pages/transactions/api/mutations'
import { usePathname } from 'next/navigation'


const ConfirmedTransactionDetails = () => {
  const { transferDetails: { transferInfo } } = TRANSACTION_DETAILS
  const pathname = usePathname()
  const transaction_id = pathname?.split("/").pop()
  const { transactionDetails, isLoading } = useGetTransactionDetails({ transaction_id })
  console.log(transactionDetails, isLoading, "trasacitnodeta")
  return (
    <div>
      <div className="mt-10 border border-[#EEEEEE] rounded-sm p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 mt-2">
          <div className="flex items-center gap-2 mb-4 border-b pb-2">
            <WithdrawalIcon />
            <h2 className="text-lg font-semibold text-[#343A40] ">Deposite Summary</h2>
          </div>
        </div>

        <div className="space-y-0">
          <div className="flex justify-between items-center py-2 border-b border-[#EEEEEE]">
            <div className="flex items-center gap-2">
              <span className="text-[#363333]">•</span>
              <span className="uppercase text-sm font-medium">TRANSACTION ID</span>
            </div>
            <span className="text-right">{transferInfo.transactionId}</span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-[#EEEEEE]">
            <div className="flex items-center gap-2">
              <span className="text-[#363333]">•</span>
              <span className="uppercase text-sm font-medium">TRANSACTION TYPE</span>
            </div>
            <span className="text-right">{transferInfo.transactionType}</span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-[#EEEEEE]">
            <div className="flex items-center gap-2">
              <span className="text-[#363333]">•</span>
              <span className="uppercase text-sm font-medium">BANK NAME</span>
            </div>
            <span className="text-right text-[#6C7176]">{transferInfo.bankName}</span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-[#EEEEEE]">
            <div className="flex items-center gap-2">
              <span className="text-[#363333]">•</span>
              <span className="uppercase text-sm font-medium">ACCOUNT NUMBER</span>
            </div>
            <span className="text-right text-[#6C7176]">{transferInfo.accountNumber}</span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-[#EEEEEE]">
            <div className="flex items-center gap-2">
              <span className="text-[#363333]">•</span>
              <span className="uppercase text-sm font-medium">PAYMENT METHOD</span>
            </div>
            <span className="text-right text-[#6C7176]">{transferInfo.paymentMethod}</span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-[#EEEEEE]">
            <div className="flex items-center gap-2">
              <span className="text-[#363333]">•</span>
              <span className="uppercase text-sm font-medium">EXCHANGE RATE</span>
            </div>
            <span className="text-right text-[#6C7176]">{transferInfo.exchangeRate}</span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-[#EEEEEE]">
            <div className="flex items-center gap-2">
              <span className="text-[#363333]">•</span>
              <span className="uppercase text-sm font-medium">PAYABLE AMOUNT</span>
            </div>
            <span className="text-right text-[#6C7176]">{transferInfo.payableAmount}</span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-[#EEEEEE]">
            <div className="flex items-center gap-2">
              <span className="text-[#363333]">•</span>
              <span className="uppercase text-sm font-medium">PAYMENT STATUS</span>
            </div>
            <span className="text-right text-[#6C7176]">{transferInfo.paymentStatus}</span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-[#EEEEEE]">
            <div className="flex items-center gap-2">
              <span className="text-[#363333]">•</span>
              <span className="uppercase text-sm font-medium">REMARK</span>
            </div>
            <span className="text-right text-[#6C7176]">{transferInfo.remark}</span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-[#EEEEEE]">
            <div className="flex items-center gap-2">
              <span className="text-[#363333]">•</span>
              <span className="uppercase text-sm font-medium">DATE</span>
            </div>
            <span className="text-right text-[#6C7176]">{transferInfo.date}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 mt-3 md:mt-8 ">
        <Button
          className="bg-main h-12  text-white flex items-center gap-2 rounded-md"
        >
          <Copy size={16} />
          Copy Link
        </Button>
        <Button
          variant="outline"
          className="bg-main h-12 text-white  flex items-center gap-2 rounded-md"
        >
          <Download size={16} />
          Download Receipt
        </Button>
      </div>
    </div>
  )
}

export default ConfirmedTransactionDetails