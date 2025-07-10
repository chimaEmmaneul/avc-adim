import { Pen, Trash2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type countryListProps = {
  countries: any
}
const CountryListTable = ({ countries }: countryListProps) => {
  return (
    <div> <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-4 font-bold text-gray-700 text-sm">NAME</th>
            <th className="text-left py-3 px-4 font-bold text-gray-700 text-sm">CURRENCY CODE</th>
            <th className="text-left py-3 px-4 font-bold text-gray-700 text-sm">FLAG</th>
            <th className="text-left py-3 px-4 font-bold text-gray-700 text-sm">CONTINENT</th>
            <th className="text-right py-3 px-4 font-bold text-gray-700 text-sm">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country: any, index: number) => (
            <tr key={country.name} className={index % 2 === 1 ? "bg-gray-50" : "bg-white"}>
              <td className="py-3 px-4 text-gray-900 ">{country.name}</td>
              <td className="py-3 px-4 text-gray-700 font-semibold">{country.currencyCode}</td>
              <td className="py-3 px-4">
                <Image
                  src={country.flagUrl || "/placeholder.svg"}
                  alt={`${country.name} flag`}
                  width={40}
                  height={40}
                  className="rounded-full object-cover bg-gray-200"
                />
              </td>
              <td className="py-3 px-4 text-gray-700">{country.continent}</td>
              <td className="py-3 px-4 text-right">
                <div className="flex justify-end gap-2">
                  <button
                    className="w-8 h-8 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center transition-colors"
                    aria-label="Edit country"
                  >
                    <Pen size={16} />
                  </button>
                  <button
                    className="w-8 h-8 bg-orange-500 hover:bg-orange-600 text-white rounded-lg flex items-center justify-center transition-colors"
                    aria-label="Delete country"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div></div>
  )
}

export default CountryListTable