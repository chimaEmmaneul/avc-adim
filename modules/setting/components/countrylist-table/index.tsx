"use client"
import { Pen, Trash2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Country } from '../../@types'
import EmptyState from '@/components/common/emptystate'
import { useRouter } from 'next-nprogress-bar'

type countryListProps = {
  countries: Country[]
}
const CountryListTable = ({ countries }: countryListProps) => {
  const router = useRouter()
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

          {countries.length === 0 && (
            <tr>
              <td colSpan={7} className="text-center py-4">
                <EmptyState />
              </td>
            </tr>
          )}
          {countries.map((country: Country, index: number) => (
            <tr key={country.name} className="border-b border[#DEE2E6] text-[#6E768E] font-medium text-sm ">
              <td className="py-3 px-4 text-gray-900 ">{country.name}</td>
              <td className="py-3 px-4 text-gray-700 font-semibold">{country.currency_code || "N/A"}</td>
              <td className="py-3 px-4">
                <div className='relative w-10 h-10 rounded-[50%]'>
                <Image
                    src={country.flag || "/placeholder.svg"}
                  alt={`${country.name} flag`}
                    fill
                  className="rounded-full object-cover bg-gray-200"
                  />
                </div>
              </td>
              <td className="py-3 px-4 text-gray-700">{country.continent || "N/A"}</td>
              <td className="py-3 px-4 text-right">
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => router.push(`/settings/countries/${country.id}`)}
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