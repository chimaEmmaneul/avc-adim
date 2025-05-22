"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

type LocationFormData = {
  name: string
  country: string
  address: string
  openingHour: string
  closingHour: string
  status: "Active" | "Inactive"
}

interface EditLocationDialogProps {
  isOpen: boolean
  onClose: () => void
  // onSave: (data: LocationFormData) => void
  // location?: LocationFormData
}

export default function AddNewLocationForm({ isOpen, onClose }: EditLocationDialogProps) {
  console.log(isOpen, "isOpen")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LocationFormData>({
    defaultValues: {
      name: "",
      country: "",
      address: "",
      openingHour: "9:00am",
      closingHour: "5:00pm",
      status: "Active",
    },
  })

  const [status, setStatus] = useState<"active" | "Inactive">("active")

  const onSubmit = (data: LocationFormData) => {
    onClose()
  }

  const countries = ["Nigeria", "Ghana", "Kenya", "South Africa", "Egypt", "Morocco", "Tanzania"]

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="max-w-lg  max-h-[98vh] overflow-y-auto">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold">Edit Location Details</AlertDialogTitle>
          <AlertDialogDescription>Adjust pickup location details below</AlertDialogDescription>
        </AlertDialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4 max-h-[60vh] overflow-y-auto">
          <div className="space-y-2">
            <label htmlFor="name" className="block font-medium">
              Location Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full rounded border border-gray-300 px-3 py-2 focus:border-amber-500 focus:outline-none"
              {...register("name", { required: "Location name is required" })}
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="country" className="block font-medium">
              Country
            </label>
            <select
              id="country"
              className="w-full rounded border border-gray-300 px-3 py-2 focus:border-amber-500 focus:outline-none"
              {...register("country", { required: "Country is required" })}
            >
              <option value="">Select one...</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.country && <p className="text-sm text-red-500">{errors.country.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="address" className="block font-medium">
              Address
            </label>
            <input
              id="address"
              type="text"
              className="w-full rounded border border-gray-300 px-3 py-2 focus:border-amber-500 focus:outline-none"
              {...register("address", { required: "Address is required" })}
            />
            {errors.address && <p className="text-sm text-red-500">{errors.address.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Service Hours</label>
            <div className="flex space-x-2">
              <div className="flex-1">
                <div className="flex">
                  <select
                    className="w-24 rounded-l border border-gray-300 px-3 py-2 focus:border-amber-500 focus:outline-none"
                    defaultValue="Open"
                  >
                    <option>Open</option>
                  </select>
                  <input
                    type="text"
                    className="flex-1 rounded-r border border-gray-300 px-3 py-2 focus:border-amber-500 focus:outline-none"
                    placeholder="9:00am"
                    {...register("openingHour", { required: "Opening hour is required" })}
                  />
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="flex-1">
                <div className="flex">
                  <select
                    className="w-24 rounded-l border border-gray-300 px-3 py-2 focus:border-amber-500 focus:outline-none"
                    defaultValue="Close"
                  >
                    <option>Close</option>
                  </select>
                  <input
                    type="text"
                    className="flex-1 rounded-r border border-gray-300 px-3 py-2 focus:border-amber-500 focus:outline-none"
                    placeholder="5:00pm"
                    {...register("closingHour", { required: "Closing hour is required" })}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Status</label>
            <div className="flex space-x-2">
              <button
                type="button"
                className={`rounded border px-4 py-2 ${status === "active"
                  ? "border-amber-500 bg-white text-black"
                  : "border-gray-300 bg-white text-gray-700"
                  }`}
                onClick={() => setStatus("active")}
              >
                Active
              </button>
              <button
                type="button"
                className={`rounded border px-4 py-2 ${status === "Inactive"
                  ? "border-amber-500 bg-amber-800 text-white"
                  : "border-gray-300 bg-white text-gray-700"
                  }`}
                onClick={() => setStatus("Inactive")}
              >
                Inactive
              </button>
            </div>
          </div>

        </form>
        <AlertDialogFooter className="pt-4">
          <AlertDialogCancel asChild>
            <button type="button" className="rounded border border-gray-300 bg-white px-4 py-2 text-black">
              Back
            </button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <button
              type="submit"
              className="rounded bg-amber-500 px-4 py-2 font-medium text-white hover:bg-amber-600"
            >
              Add Location
            </button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
