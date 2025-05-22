import React from 'react'
import { LocationType } from '../../@types'
import { StatusBadge } from '@/shared/statusbadge'

const CardPickupTable = ({ locations }: { locations: LocationType[] }) => {
  return (
    <div className="overflow-x-auto ">
      <table className="">
        <thead className="bg-gray-50">
          <tr>
            {["Location ID", "Location Name", "Country", "Service Days", "Service Hours", "Address", "Status", "Action"].map(
              (header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase whitespace-nowrap tracking-wider"
                >
                  {header}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {locations.map((location, index) => (
            <tr key={`${location.id}-${index}`} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{location.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{location.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{location.country}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{location.service_days}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{location.service_hours}</td>
              <td className="px-6 py-4 min-w-[200px]  text-sm text-gray-500">{location.address}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full`}
                >
                  <span>
                    <StatusBadge status={location.status} />
                  </span>
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <button
                  className="text-amber-600 hover:text-amber-900 font-medium hover:underline"
                >
                  Edit Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CardPickupTable