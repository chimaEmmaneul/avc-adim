import { SenderIcon } from '@/icon/icon'
// import { Transaction } from '@/pages/transactions/@types/transaction'
import React from 'react'
import { Transaction } from '../../@types/transaction'

type SenderTypes = {
  senderInfo: Transaction | undefined
}
const Sender = ({ senderInfo }: SenderTypes) => {
  return (
    <div className="space-y-4 border border-[#EEEEEE] rounded-sm p-4">
      <div className="flex items-center gap-2 mb-4">
        <SenderIcon />
        <h2 className="text-lg font-semibold">Sender Summary</h2>
      </div>

      <div className="space-y-0">
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">•</span>
            <span className="uppercase text-sm font-medium">SENDING AMOUNT</span>
          </div>
          <span className="text-right">{senderInfo?.sending_amount}</span>
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
            <span className="uppercase text-sm font-medium">TOTAL FEES & CHARGES</span>
          </div>
          <span className="text-right">{"N/A"}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">•</span>
            <span className="uppercase text-sm font-medium">AMOUNT WE&apos;LL CONVERT</span>
          </div>
          <span className="text-right">{senderInfo?.sending_amount}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">•</span>
            <span className="uppercase text-sm font-medium">WILL GET AMOUNT</span>
          </div>
          <span className="text-right">{senderInfo?.sending_amount}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">•</span>
            <span className="uppercase text-sm font-medium">SENDING PURPOSE</span>
          </div>
          <span className="text-right">{senderInfo?.remark}</span>
        </div>
      </div>
    </div>
  )
}

export default Sender