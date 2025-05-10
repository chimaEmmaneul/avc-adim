"use client"
import { StatusBadge } from '@/shared/statusbadge'
import React, { useState } from 'react'
import { RequestData, sampleData } from '../../constants'
import { formatDate } from '@/lib/utils'
import CardRequestActions from '../card-request-actions'

const CardRequestTable = () => {
  const [requestData, setRequestData] = useState<RequestData>();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left text-gray-500 text-sm uppercase">
              {["Request ID", "User", "Country", "Pickup Location", "Request Date", "Status", "Action"].map((header) => (
                <th key={header} className="py-4 px-6 font-medium whitespace-nowrap">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sampleData &&
              sampleData.map((request, index) => (
                <tr key={`${request.request_id}-${index}`} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="py-4 px-6 text-gray-700 whitespace-nowrap">{request.request_id}</td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <div className="text-gray-700 whitespace-nowrap">{`${request.first_name} ${request.last_name}`}</div>
                    <div className="text-gray-400 text-smwhitespace-nowrap">{request.email}</div>
                  </td>
                  <td className="py-4 px-6 text-gray-700 whitespace-nowrap">{request.country}</td>
                  <td className="py-4 px-6 text-gray-700 whitespace-nowrap">{request.pickup_location}</td>
                  <td className="py-4 px-6 text-gray-700 whitespace-nowrap">{formatDate(request.request_date)}</td>
                  <td className="py-4 px-6">
                    <StatusBadge status={request.status} />
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <button onClick={() => { setRequestData(request); setIsOpen(true) }}>
                      View details
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <CardRequestActions requestData={requestData as RequestData} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default CardRequestTable