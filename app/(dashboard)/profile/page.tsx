"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import { useProfileStore } from "@/zustand/useProfileStore"
import { showerror, showsuccess } from "@/lib/toasts"
import { ProfileFormData, profileSchema } from "@/schema/authSchema"
import { useGetAllCountries, useUpadteAdminProfile } from "@/pages/authentication/api/mutations"
import { Loader } from "lucide-react"



export default function ProfileForm() {
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { profile } = useProfileStore()
  const { updateProfile, isUpdatingProfile, } = useUpadteAdminProfile()
  const { countries, isLoading: isLoadingCountries } = useGetAllCountries()
  console.log(countries, "countrie")
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      first_name: profile?.data.name,
      last_name: "",
      email: profile?.data.email,
      phone_number: profile?.data.phone_number,
      country_id: profile?.data.country_id,
      state: profile?.data.state,
      city: profile?.data.city,
      zip_code: profile?.data.zip_code,
      address: profile?.data.address,
      profile_photo: null,
    },
  })

  const watchCountry = watch("country_id")
  const watchState = watch("state")

  useEffect(() => {
    reset({
      first_name: profile?.data.name,
      email: profile?.data.email,
      phone_number: profile?.data.phone_number,
      country_id: "",
      state: profile?.data.state,
      city: profile?.data.city,
      zip_code: profile?.data.zip_code,
      address: profile?.data.address,
      profile_photo: null,
    })
  }, [profile, setValue])


  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const validTypes = ["image/jpeg", "image/png", "image/gif"]
    if (!validTypes.includes(file.type)) {
      showerror("Please upload a valid image file (JPEG, PNG, GIF)")
      return
    }

    setValue("profile_photo", file, { shouldValidate: true })

    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result as string
      setPreviewImage(result)
    }
    reader.readAsDataURL(file)
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const onSubmit = async (data: ProfileFormData) => {
    try {

      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          formData.append(key, value);
        }
      });
      console.log(formData,)
      const res = await updateProfile(formData as unknown as ProfileFormData);
      console.log(res, "res");
      showsuccess("updated successfully");
    } catch (error) {
      console.log(error);
      showerror("something went wrong");
    }
  }



  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image Upload Section */}
        <div className="md:col-span-1">
          <div
            className="border-2 border-dashed border-amber-500 rounded-md p-6 flex flex-col items-center justify-center cursor-pointer h-full"
            onClick={triggerFileInput}
          >
            {previewImage ? (
              <div className="relative w-32 h-32 mb-2">
                <Image
                  src={previewImage || profile?.data.profile_photo || "/placeholder.svg"}
                  alt="Profile preview"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            ) : (
              <div className="text-amber-500 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            )}
            <p className="text-sm text-center">
              Drop your file or <span className="underline text-amber-600">click</span> to select
            </p>
            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
            <input type="hidden" {...register("profile_photo")} />
          </div>
        </div>

        {/* Form Fields */}
        <div className="md:col-span-1 space-y-4">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium">
              First Name*
            </label>
            <input
              id="firstName"
              {...register("first_name")}
              className={`mt-1 block w-full rounded-md border ${errors.first_name ? "border-red-500" : "border-gray-300"
                } px-3 py-2 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500`}
            />
            {errors.first_name && <p className="text-red-500 text-xs mt-1">{errors.first_name.message}</p>}
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="last_name" className="block text-sm font-medium">
              Last Name *
            </label>
            <input
              id="lastName"
              {...register("last_name")}
              className={`mt-1 block w-full rounded-md border ${errors.last_name ? "border-red-500" : "border-gray-300"
                } px-3 py-2 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500`}
            />
            {errors.last_name && <p className="text-red-500 text-xs mt-1">{errors.last_name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email*
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className={`mt-1 block w-full rounded-md border ${errors.email ? "border-red-500" : "border-gray-300"
                } px-3 py-2 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone_number" className="block text-sm font-medium">
              Phone Number
            </label>
            <input
              id="phone_number"
              {...register("phone_number")}
              placeholder="Type here..."
              className={`mt-1 block w-full rounded-md border ${errors.phone_number ? "border-red-500" : "border-gray-300"
                } px-3 py-2 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500`}
            />
            {errors.phone_number && <p className="text-red-500 text-xs mt-1">{errors.phone_number.message}</p>}
          </div>
        </div>
      </div>

      {/* Country, State, City, Zip Code */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="country" className="block text-sm font-medium">
            Country
          </label>
          <select
            id="country"
            {...register("country_id")}
            className={`mt-1 block w-full rounded-md border ${errors.country_id ? "border-red-500" : "border-gray-300"
              } px-3 py-2 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500`}
          >
            <option value="">Select Country</option>

            {countries?.data.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
          {errors.country_id && <p className="text-red-500 text-xs mt-1">{errors.country_id.message}</p>}
        </div>

        {/* State */}
        <div>
          <label htmlFor="state" className="block text-sm font-medium">
            State
          </label>
          <select
            id="state"
            {...register("state")}
            className={`mt-1 block w-full rounded-md border ${errors.state ? "border-red-500" : "border-gray-300"
              } px-3 py-2 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 ${!watchCountry ? "bg-gray-100" : ""
              }`}
          >
            <option value="">Select State</option>
            <option key={"Lagos"} value={"Lagos"}>
              {"Lagos"}
            </option>
          </select>
          {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state.message}</p>}
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block text-sm font-medium">
            City
          </label>
          <select
            id="city"
            {...register("city")}
            className={`mt-1 block w-full rounded-md border ${errors.city ? "border-red-500" : "border-gray-300"
              } px-3 py-2 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 ${!watchState ? "bg-gray-100" : ""
              }`}
          >
            <option value="">Select City</option>
            <option key={"Abuja"} value={"abuja"}>
              {"Abuja"}
            </option>

          </select>
          {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
        </div>

        {/* Zip Code */}
        <div>
          <label htmlFor="zipCode" className="block text-sm font-medium">
            Zip Code
          </label>
          <input
            id="zipCode"
            {...register("zip_code")}
            placeholder="Type here..."
            className={`mt-1 block w-full rounded-md border ${errors.zip_code ? "border-red-500" : "border-gray-300"
              } px-3 py-2 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500`}
          />
          {errors.zip_code && <p className="text-red-500 text-xs mt-1">{errors.zip_code.message}</p>}
        </div>
      </div>

      {/* Address */}
      <div>
        <label htmlFor="address" className="block text-sm font-medium">
          Address
        </label>
        <textarea
          id="address"
          {...register("address")}
          placeholder="Type here..."
          rows={3}
          className={`mt-1 block w-full rounded-md border ${errors.address ? "border-red-500" : "border-gray-300"
            } px-3 py-2 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500`}
        />
        {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out"
        >
          {isUpdatingProfile ? <Loader className="animate-spin mx-auto" /> : " Save & Change"}
        </button>
      </div>
    </form>
  )
}
