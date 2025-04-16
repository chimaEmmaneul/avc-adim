import React from 'react'
import { RecipientInfo } from '@/pages/transactions/@types/transaction'
import { ReceipientIcon } from '@/icon/icon'

const Recipient = (recipientInfo: RecipientInfo) => {
  return (
    <div className="space-y-4 border border-[#EEEEEE] rounded-sm p-4">
      <div className="flex items-center gap-2 mb-4">
        <ReceipientIcon />
        <h2 className="text-lg font-semibold">Recipient Summary</h2>
      </div>

      <div className="space-y-0">
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">•</span>
            <span className="uppercase text-sm font-medium">RECIPIENT NAME</span>
          </div>
          <span className="text-right">{recipientInfo.name}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">•</span>
            <span className="uppercase text-sm font-medium">RECIPIENT EMAIL</span>
          </div>
          <span className="text-right">{recipientInfo.email}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">•</span>
            <span className="uppercase text-sm font-medium">PHONE NUMBER</span>
          </div>
          <span className="text-right">{recipientInfo.phoneNumber}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">•</span>
            <span className="uppercase text-sm font-medium">COUNTRY</span>
          </div>
          <span className="text-right">{recipientInfo.country}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">•</span>
            <span className="uppercase text-sm font-medium">STATE & CITY</span>
          </div>
          <span className="text-right">{recipientInfo.stateCity}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">•</span>
            <span className="uppercase text-sm font-medium">ZIP CODE</span>
          </div>
          <span className="text-right">{recipientInfo.zipCode}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">•</span>
            <span className="uppercase text-sm font-medium">ADDRESS</span>
          </div>
          <span className="text-right">{recipientInfo.address}</span>
        </div>
      </div>
    </div>
  )
}

export default Recipient