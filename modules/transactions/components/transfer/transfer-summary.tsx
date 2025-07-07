import React from 'react'
import { Button } from '@/components/ui/button'
import { Transaction } from '@/pages/transactions/@types/transaction'
import { Copy, Download } from 'lucide-react'
import { TransactionDetailsIcon } from '@/icon/icon'

type TransferSummaryProp = {
  transferInfo: Transaction | undefined
}

const TransferSummary = ({ transferInfo }: TransferSummaryProp) => {
  return (
    <div className="mt-10 border border-[#EEEEEE] rounded-sm p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 mt-2">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <TransactionDetailsIcon />
          <h2 className="text-lg font-semibold">Transfer Summary</h2>
        </div>
        <div className="flex gap-2">
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

      <div className="space-y-0">
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">•</span>
            <span className="uppercase text-sm font-medium">TRANSACTION ID</span>
          </div>
          <span className="text-right">{transferInfo?.transaction_id}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">•</span>
            <span className="uppercase text-sm font-medium">TRANSACTION TYPE</span>
          </div>
          <span className="text-right">{transferInfo?.type}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">•</span>
            <span className="uppercase text-sm font-medium">BANK NAME</span>
          </div>
          <span className="text-right">{transferInfo?.sender.account_name}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">•</span>
            <span className="uppercase text-sm font-medium">ACCOUNT NUMBER</span>
          </div>
          <span className="text-right">{transferInfo?.sender.account_number}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">•</span>
            <span className="uppercase text-sm font-medium">PAYMENT METHOD</span>
          </div>
          <span className="text-right">{"N/A"}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">•</span>
            <span className="uppercase text-sm font-medium">EXCHANGE RATE</span>
          </div>
          <span className="text-right">{"N/A"}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">•</span>
            <span className="uppercase text-sm font-medium">PAYABLE AMOUNT</span>
          </div>
          <span className="text-right">{transferInfo?.sending_amount}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">•</span>
            <span className="uppercase text-sm font-medium">PAYMENT STATUS</span>
          </div>
          <span className="text-right">{transferInfo?.status}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">•</span>
            <span className="uppercase text-sm font-medium">REMARK</span>
          </div>
          <span className="text-right">{transferInfo?.remark}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">•</span>
            <span className="uppercase text-sm font-medium">DATE</span>
          </div>
          <span className="text-right">{transferInfo?.date}</span>
        </div>
      </div>
    </div>
  )
}

export default TransferSummary