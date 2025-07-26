"use state"
import React, { useState } from 'react'
import { LocationType } from '../../@types'
import AddNewLocationForm from '../add-new-location/plckup-location-form'
import Pagination from '@/shared/Pagination'

const CardPickupTable = ({ locations }: { locations: LocationType[] }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [pickupLocation, setPickupLocation] = useState<LocationType | undefined>()

  return (
    <div className="overflow-x-auto w-full ">
      <table className="w-full">
        <thead className="text-blackd border-b ">
          <tr>
            {["Location Name", "Country", "Service Days", "Service Hours", "Address", "Action"].map(
              (header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-left text-xs font-medium text-black uppercase whitespace-nowrap tracking-wider"
                >
                  {header}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {locations.map((location: LocationType, index) => (
            <tr key={`${location.id}-${index}`}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{location.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{location.country}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{location.service_days}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{location.service_hour}</td>
              <td className="px-6 py-4 min-w-[150px]  text-sm text-gray-500">{location.address}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <button
                  onClick={() => { setPickupLocation(location); setIsOpen(true) }}
                  className="text-amber-600 hover:text-amber-900 font-medium hover:underline"
                >
                  Edit Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddNewLocationForm isOpen={isOpen} onClose={() => setIsOpen(false)} pickupLocation={pickupLocation} />
    </div>
  )
}

export default CardPickupTable