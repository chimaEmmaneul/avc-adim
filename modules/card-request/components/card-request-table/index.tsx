"use client"
import { StatusBadge } from '@/shared/statusbadge'
import React, { useState } from 'react'
import { formatDate } from '@/lib/utils'
import CardRequestActions from '../card-request-actions'
import { RequestItem } from '../../@types'
import Pagination from '@/shared/Pagination'

const CardRequestTable = ({ requests, refetch, itemsPerPage }: { requests: RequestItem[], refetch?: () => void, itemsPerPage: number }) => {
  const [requestData, setRequestData] = useState<RequestItem>();
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(requests.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = requests.slice(indexOfFirstItem, indexOfLastItem)
  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-center text-gray-500 text-sm uppercase">
              {["Request ID", "User", "Country", "Pickup Location", "Request Date", "Status", "Action"].map((header) => (
                <th key={header} className="py-4 px-6 font-medium whitespace-nowrap">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems &&
              currentItems.map((request, index) => (
                <tr key={`${request.id}-${index}`} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="py-4 px-6 text-center text-gray-700 whitespace-nowrap border-b-[2px] border-[#DEE2E6]">{request.id}</td>
                  <td className="py-4 px-6 text-center whitespace-nowrap border-b-[2px] border-[#DEE2E6]">
                    <div className="text-gray-700 text-left whitespace-nowrap">{`${request.user.name}`}</div>
                    <div className="text-gray-400 text-left text-sm whitespace-nowrap ">{request.user.email}</div>
                  </td>
                  <td className="py-4 px-6 text-center text-gray-700 whitespace-nowrap border-b-[2px] border-[#DEE2E6]">{request.country}</td>
                  <td className="py-4 px-6 text-center text-gray-700 whitespace-nowrap border-b-[2px] border-[#DEE2E6]">{`${request.location.address} ${request.location.name}, ${request.location.state}`}</td>
                  <td className="py-4 px-6 text-center text-gray-700 whitespace-nowrap border-b-[2px] border-[#DEE2E6]">{formatDate(request.request_date)}</td>
                  <td className="py-4 px-6 text-center border-b-[2px] border-[#DEE2E6]">
                    <span>
                    <StatusBadge status={request.status} />
                    </span>
                  </td>
                  <td className="py-4 px-6 text-main whitespace-nowrap border-b-[2px] border-[#DEE2E6]">
                    <button onClick={() => { setRequestData(request); setIsOpen(true) }}>
                      View details
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
      <CardRequestActions requestData={requestData as RequestItem} isOpen={isOpen} setIsOpen={setIsOpen} refetch={refetch} />
    </>
  )
}

export default CardRequestTable