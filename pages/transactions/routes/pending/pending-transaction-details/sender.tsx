import { SenderInfo } from '@/pages/transactions/@types/transaction'
import React from 'react'

const Sender = (senderInfo: SenderInfo) => {
  return (
    <div className="space-y-4 border border-[#EEEEEE] rounded-sm p-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-5 w-5 bg-red-500 flex items-center justify-center">
          <span className="text-white text-xs">⬜</span>
        </div>
        <h2 className="text-lg font-semibold">Sender Summary</h2>
      </div>

      <div className="space-y-0">
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">•</span>
            <span className="uppercase text-sm font-medium">SENDING AMOUNT</span>
          </div>
          <span className="text-right">{senderInfo.sendingAmount}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">•</span>
            <span className="uppercase text-sm font-medium">EXCHANGE RATE</span>
          </div>
          <span className="text-right">{senderInfo.exchangeRate}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">•</span>
            <span className="uppercase text-sm font-medium">TOTAL FEES & CHARGES</span>
          </div>
          <span className="text-right">{senderInfo.totalFees}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">•</span>
            <span className="uppercase text-sm font-medium">AMOUNT WE&apos;LL CONVERT</span>
          </div>
          <span className="text-right">{senderInfo.amountToConvert}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">•</span>
            <span className="uppercase text-sm font-medium">WILL GET AMOUNT</span>
          </div>
          <span className="text-right">{senderInfo.willGetAmount}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">•</span>
            <span className="uppercase text-sm font-medium">SENDING PURPOSE</span>
          </div>
          <span className="text-right">{senderInfo.sendingPurpose}</span>
        </div>
      </div>
    </div>
  )
}

export default Sender