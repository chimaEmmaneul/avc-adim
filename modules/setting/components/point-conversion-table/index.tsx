import { Pen, Trash2 } from 'lucide-react'
import React from 'react'

type PointConversionTableProps = {
  currencies: any
}
const PointConversionTable = ({ currencies }: PointConversionTableProps) => {
  return (
    <div className="w-full">
      <div className="overflow-hidden ">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <div className="grid grid-cols-5 gap-4 text-sm font-medium text-gray-700 uppercase tracking-wider">
            <div>Name</div>
            <div>Currency Code</div>
            <div>Flag</div>
            <div>Exchange Rate</div>
            <div className="text-right">Actions</div>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {currencies.map((currency: any, index: number) => (
            <div
              key={`${currency.code}-${index}`}
              className={`px-6 py-4 transition-colors hover:bg-gray-50 ${index % 2 === 1 ? "bg-gray-50" : "bg-white"}`}
            >
              <div className="grid grid-cols-5 gap-4 items-center">
                <div className="text-sm text-gray-600 font-medium">{currency.name}</div>
                <div className="text-sm font-semibold text-gray-900">{currency.code}</div>
                <div className="flex items-center">
                  <img
                    src={currency.flag || "/placeholder.svg"}
                    alt={`${currency.name} flag`}
                    className="w-8 h-8 rounded-full object-cover border border-gray-200"
                  />
                </div>
                <div className="text-sm text-gray-600  px-3 py-1  inline-block w-fit">
                  {currency.exchangeRate}
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    className="p-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
                    title="Edit"
                  >
                    <Pen className="w-4 h-4" />
                  </button>
                  <button
                    className="p-2 text-white bg-main rounded-lg transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PointConversionTable