"use client"

import { useForm } from "react-hook-form"
import { useState } from "react"

interface CurrencyFormData {
  name: string
  currencyCode: string
  exchangeRate: number
}

export default function PointConversionDetailsView({ params }: { params: { id: string } }) {
  const [isOpen, setIsOpen] = useState(true)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CurrencyFormData>({
    defaultValues: {
      name: "",
      currencyCode: "",
      exchangeRate: 0.93,
    },
  })

  const onSubmit = (data: CurrencyFormData) => {
    console.log("Form Data:", data)
    setIsOpen(false)
  }


  return (
    <div className="w-full">
      <div className="bg-white  w-full ">
        <div className="flex items-center justify-between border-b">
          <h2 className="text-lg font-medium text-gray-900">Edit Currency Conversion</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name*
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              id="name"
              className="w-full md:w-[300px]  px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="currencyCode" className="block text-sm font-medium text-gray-700 mb-2">
              Currency Code*
            </label>
            <select
              {...register("currencyCode", { required: "Currency code is required" })}
              id="currencyCode"
              className="w-full md:w-[300px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
              <option value="CAD">CAD</option>
              <option value="AUD">AUD</option>
            </select>
            {errors.currencyCode && <p className="mt-1 text-sm text-red-600">{errors.currencyCode.message}</p>}
          </div>

          <div>
            <label htmlFor="exchangeRate" className="block text-sm font-medium text-gray-700 mb-2">
              Exchange Rate*
            </label>
            <div className="flex w-full md:w-[300px] ">
              <div className="flex items-center px-3 py-2 bg-gray-900 text-white text-sm rounded-l-md border border-r-0 border-gray-300">
                10 PTS
              </div>
              <input
                {...register("exchangeRate", {
                  required: "Exchange rate is required",
                  min: { value: 0, message: "Exchange rate must be positive" },
                })}
                type="number"
                step="0.0001"
                id="exchangeRate"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            {errors.exchangeRate && <p className="mt-1 text-sm text-red-600">{errors.exchangeRate.message}</p>}
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="button"
              className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-main text-white rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
