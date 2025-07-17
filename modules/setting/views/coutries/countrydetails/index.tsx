
"use client"
import type React from "react"

import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { useGetCountryDetails, useUpdatecountry } from "@/modules/setting/api/mutation"
import { showsuccess } from "@/lib/toasts"

interface CountryFormData {
  name: string
  currency_code: string
  continent: string
  flag: FileList | null
}
const CountriesDetailsView = ({ params }: { params: { id: string } }) => {
  const [flagPreview, setFlagPreview] = useState<string>("/german-flag.png")
  const [isOpen, setIsOpen] = useState(true)
  const { countryDetails, isLoading } = useGetCountryDetails(params.id)
  const { updateCountry, isPending } = useUpdatecountry()
  console.log(countryDetails, "details")
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    setValue,
  } = useForm<CountryFormData>({
    defaultValues: {
      name: "Germany",
      currency_code: "EUR",
      continent: "Europe",
      flag: null,
    },
  })

  useEffect(() => {
    if (countryDetails) {
      reset({
        name: countryDetails.data.name,
        currency_code: countryDetails.data.currency_code,
        continent: countryDetails.data.continent,
        flag: null,
      })
    }
  }, [countryDetails])

  const watchedFlag = watch("flag")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setFlagPreview(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const onSubmit = async (data: CountryFormData) => {
    console.log("Form submitted:", data)
    if (!data) return;
    try {
      const updatetedData = new FormData()
      updatetedData.append("name", data.name)
      updatetedData.append("currency_code", data.currency_code)
      updatetedData.append("continent", data.continent)
      updatetedData.append("flag", data.flag[0])
      const res = await updateCountry({ id: params.id, data: updatetedData })
      showsuccess(res.message)
    } catch (error) {
      console.log(error)
    }
  }



  if (isLoading) {
    return (
      <div>loading...</div>
    )
  }

  return (
    <div className="">
      <div className="bg-white  w-full  p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="">
            <label className="block text-sm font-medium text-gray-700 mb-2">Country Flag</label>
            <div className="relative h-52 w-52 mx-auto">
              <input
                type="file"
                accept="image/*"
                {...register("flag")}
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div className="  w-full h-full flex items-center justify-center  border-2 border-dashed border-orange-300 rounded-lg p-4 text-center hover:border-orange-400 transition-colors">
                {countryDetails?.data.flag || flagPreview ? (
                  <div className="flex justify-center">
                    <img
                      src={countryDetails?.data.flag || flagPreview || "/placeholder.svg"}
                      alt="Country flag"
                      className="w-full h-full flex items-center justify-center  object-cover"
                    />
                  </div>
                ) : (
                  <div className="text-gray-500">
                    <p>Click to upload flag</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
              <input
                type="text"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Code*</label>
              <input
                type="text"
                {...register("currency_code", {
                  required: "Currency code is required",
                  pattern: {
                    value: /^[A-Z]{3}$/,
                    message: "Currency code must be 3 uppercase letters",
                  },
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="EUR"
              />
              {errors.currency_code && <p className="mt-1 text-sm text-red-600">{errors.currency_code.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Continent*</label>
            <select
              {...register("continent", {
                required: "Continent is required",
              })}
              className=" w-full md:w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="">Select a continent</option>
              <option value="africa">Africa</option>
              <option value="antarctica">Antarctica</option>
              <option value="asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="north_america">North America</option>
              <option value="Oceania">Austraila</option>
              <option value="south_america">South America</option>
            </select>
            {errors.continent && <p className="mt-1 text-sm text-red-600">{errors.continent.message}</p>}
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="button"
              className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-main text-white rounded-md hover:bg-orange-800 transition-colors"
            >
              {isPending ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CountriesDetailsView;