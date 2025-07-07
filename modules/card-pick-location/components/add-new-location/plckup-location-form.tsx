"use client"

import { useEffect, useState } from "react"
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
import { useProfileStore } from "@/zustand/useProfileStore"
import { useAddNewPickupLocation, useUpdatePickupLocation } from "../../api/mutations"
import { showerror, showsuccess } from "@/lib/toasts"
import { AxiosError } from "axios"
import { LocationType } from "../../@types"

type LocationFormData = {
  name: string
  country: string
  address: string
  openingHour: string
  closingHour: string
  openingDay: string;
  closingDay: string
  state: string;
}

interface EditLocationDialogProps {
  isOpen: boolean
  onClose: () => void
  pickupLocation?: LocationType
}

export default function AddNewLocationForm({ isOpen, onClose, pickupLocation }: EditLocationDialogProps) {
  const { countries } = useProfileStore()
  const { addNewPickupLocation, isPending } = useAddNewPickupLocation()
  const { updatePickupLocation, isPending: isUpdating } = useUpdatePickupLocation()
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<LocationFormData>({
    defaultValues: {
      name: "",
      country: "",
      address: "",
      openingHour: "",
      closingHour: "",
      openingDay: "",
      closingDay: ""
    },
  })



  useEffect(() => {
    if (pickupLocation) {
      console.log(pickupLocation.service_days.split("-")[1])
      reset({
        name: pickupLocation.name,
        country: pickupLocation.country,
        state: pickupLocation.state,
        address: pickupLocation.address,
        openingHour: pickupLocation.service_hour.split("-")[0],
        closingHour: pickupLocation.service_hour.split("-")[1],
        openingDay: pickupLocation.service_days.split("-")[0],
        closingDay: pickupLocation.service_days.split("-")[1],
      })
    }

  }, [pickupLocation])


  const onSubmit = async (data: LocationFormData) => {

    try {
      if (pickupLocation) {
        const res = await updatePickupLocation({
          id: String(pickupLocation.id),
          data: {
            name: data.name,
            country_id: data.country,
            state: data.state,
            address: data.address,
            service_days: `${data.openingDay}-${data.closingDay}`,
            service_hour: `${data.openingHour}-${data.closingHour}`,
          },
        })
      } else {
        const res = await addNewPickupLocation({
          name: data.name,
          country_id: data.country,
          state: data.state,
          address: data.address,
          service_days: `${data.openingDay}-${data.closingDay}`,
          service_hour: `${data.openingHour}-${data.closingHour}`,
        })
        showsuccess(res.message)
        reset()
        onClose()
      }

    } catch (error: AxiosError | any) {
      showerror(error.message)
    }
  }



  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="max-w-lg  max-h-[98vh] overflow-y-auto">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold">Edit Location Details</AlertDialogTitle>
          <AlertDialogDescription>Adjust pickup location details below</AlertDialogDescription>
        </AlertDialogHeader>

        <form className="space-y-4 py-4 max-h-[60vh] overflow-y-auto">
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
            <label htmlFor="state" className="block font-medium">
              State
            </label>
            <input
              id="state"
              type="text"
              className="w-full rounded border border-gray-300 px-3 py-2 focus:border-amber-500 focus:outline-none"
              {...register("state", { required: "State is required" })}
            />
            {errors.state && <p className="text-sm text-red-500">{errors.state.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="country" className="block font-medium">
              Country
            </label>
            <select
              id="country"
              defaultValue={pickupLocation?.country}
              className="w-full rounded border border-gray-300 px-3 py-2 focus:border-amber-500 focus:outline-none"
              {...register("country", { required: "Country is required" })}
            >
              <option value="">Select one...</option>
              {countries?.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
            {errors.country && <p className="text-sm text-red-500">{errors.country.message}</p>}
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

          <div>
            <h1 className="mb-2 font-medium ">Service Days</h1>
            <div className="flex items-center gap-4">
              <select {...register("openingDay")} className="w-full py-2 outline-none border border-gray-300 rounded-md" >
                {["Mondays", "Tuesdays", "Wednesdays", "Thursdays", "Fridays", "Saturdays", "Sundays"].map((day) => (<option key={day} value={day}>{day}</option>))}
              </select>

              <select {...register("closingDay")} className="w-full py-2 outline-none border border-gray-300 rounded-md" >
                {["Mondays", "Tuesdays", "Wednesdays", "Thursdays", "Fridays", "Saturdays", "Sundays"].map((day) => (<option key={day} value={day}>{day}</option>))}
              </select>
            </div>
          </div>

        </form>
        <AlertDialogFooter className="pt-4">
          <AlertDialogCancel asChild>
            <button type="button" className="rounded border border-gray-300 bg-white px-4 py-2 text-black">
              cancel
            </button>
          </AlertDialogCancel>
            <button
            onClick={handleSubmit(onSubmit)}
              className="rounded bg-amber-500 px-4 py-2 font-medium text-white hover:bg-amber-600"
            >
            {pickupLocation ? isUpdating ? "Updating..." : "Update Location" : isPending ? "Adding..." : " Add Location"}
          </button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
