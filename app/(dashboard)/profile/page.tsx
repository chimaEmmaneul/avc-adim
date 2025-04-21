"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Image from "next/image"
import { useProfileStore } from "@/zustand/useProfileStore"
import { showerror } from "@/lib/toasts"

const profileSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phoneNumber: z.string().optional(),
  country: z.string().min(1, { message: "Please select a country" }),
  state: z.string().min(1, { message: "Please select a state" }),
  city: z.string().min(1, { message: "Please select a city" }),
  zipCode: z.string().optional(),
  address: z.string().optional(),
  profileImage: z.string().optional(),
})

type ProfileFormData = z.infer<typeof profileSchema>

export default function ProfileForm() {
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { profile } = useProfileStore()

  // Initialize React Hook Form
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
      firstName: profile?.data.name,
      lastName: "",
      email: profile?.data.email,
      phoneNumber: profile?.data.phone_number,
      country: "",
      state: "",
      city: "",
      zipCode: "",
      address: "",
      profileImage: "",
    },
  })

  const watchCountry = watch("country")
  const watchState = watch("state")

  useEffect(() => {
    reset({
      firstName: profile?.data.name,
      lastName: "",
      email: profile?.data.email,
      phoneNumber: profile?.data.phone_number,
      country: "",
      state: "",
      city: "",
      zipCode: "",
      address: "",
      profileImage: "",
    })
  }, [profile, setValue])


  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file type
    const validTypes = ["image/jpeg", "image/png", "image/gif"]
    if (!validTypes.includes(file.type)) {
      showerror("Please upload a valid image file (JPEG, PNG, GIF)")
      return
    }

    // Create a preview
    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result as string
      setPreviewImage(result)
      setValue("profileImage", result, { shouldValidate: true })
    }
    reader.readAsDataURL(file)
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const onSubmit = (data: ProfileFormData) => {
    console.log("Form submitted:", data)
    alert("Profile updated successfully!")
    // Here you would typically send the data to your API
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
                  src={previewImage || "/placeholder.svg"}
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
            <input type="hidden" {...register("profileImage")} />
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
              {...register("firstName")}
              className={`mt-1 block w-full rounded-md border ${errors.firstName ? "border-red-500" : "border-gray-300"
                } px-3 py-2 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500`}
            />
            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium">
              Last Name *
            </label>
            <input
              id="lastName"
              {...register("lastName")}
              className={`mt-1 block w-full rounded-md border ${errors.lastName ? "border-red-500" : "border-gray-300"
                } px-3 py-2 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500`}
            />
            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
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
            <label htmlFor="phoneNumber" className="block text-sm font-medium">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              {...register("phoneNumber")}
              placeholder="Type here..."
              className={`mt-1 block w-full rounded-md border ${errors.phoneNumber ? "border-red-500" : "border-gray-300"
                } px-3 py-2 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500`}
            />
            {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>}
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
            {...register("country")}
            className={`mt-1 block w-full rounded-md border ${errors.country ? "border-red-500" : "border-gray-300"
              } px-3 py-2 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500`}
          >
            <option value="">Select Country</option>
            <option key={"Nigeria"} value={"Nigeria"}>
              Nigeria
            </option>

          </select>
          {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
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
            {...register("zipCode")}
            placeholder="Type here..."
            className={`mt-1 block w-full rounded-md border ${errors.zipCode ? "border-red-500" : "border-gray-300"
              } px-3 py-2 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500`}
          />
          {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode.message}</p>}
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
          Save & Change
        </button>
      </div>
    </form>
  )
}
