"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import { userFormSchema, UserFormValues } from "@/schema/authSchema"



export default function UserProfile() {
  // Status states
  const [userStatus, setUserStatus] = useState<"Active" | "Banned">("Active")
  const [emailVerification, setEmailVerification] = useState<"Verified" | "Unverified">("Verified")
  const [twoFAVerification, setTwoFAVerification] = useState<"Verified" | "Unverified">("Verified")
  const [kycVerification, setKYCVerification] = useState<"Verified" | "Unverified">("Unverified")

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserFormValues>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      firstName: "Saif",
      lastName: "Ahmed",
      country: "",
      phoneNumber: "",
      city: "",
      state: "",
      zipCode: "",
      address: "",
    },
  })

  const onSubmit = async (data: UserFormValues) => {
    // Simulate API call
    console.log("Form submitted:", data)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    alert("Profile updated successfully!")
  }

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "India",
    "Brazil",
    "South Africa",
  ]

  return (
    <div className=" w-full">
      {/* Header with back button */}
      <div className="flex justify-end">
        <button className="bg-main text-white px-4 py-2 rounded-md font-medium">Go Back</button>
      </div>

      {/* Profile section with avatar and info bars */}
      <div className="relative h-fit  w-full grid  place-items-center ">
        <div className="flex flex-col xl:flex-row items-center">
          {/* Left side info bars - staggered */}
          <div className="flex order-2 xl:order-1 flex-col space-y-4  xl:-mr-7">
            <div className="w-full xl:-ml-0 ">
              <InfoBar icon="👤" label="Full Name" value="Johnny Test" />
            </div>
            <div className="w-full xl:ml-2 ">
              <InfoBar icon="✉️" label="Send Email" value="" isButton />
            </div>
            <div className="w-full xl:ml-4 ">
              <InfoBar icon="🔑" label="Login as User" value="" isButton />
            </div>
          </div>


          <div className="w-[200px] h-[200px] mb-2 xl:mb-0  xl:w-[320px] order-1 xl:order-2 xl:h-[320px] rounded-full z-20 bg-gray-200 overflow-hidden mx-auto">
            <Image
              src="/placeholder.svg?height=192&width=192"
              alt="Profile"
              width={320}
              height={320}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side info bars - staggered */}
          <div className="flex flex-col order-3 space-y-4 my-4 xl:my-0 xl:-ml-9">
            <div className="w-full xl:-ml-4  ">
              <InfoBar label="username" value="@johnnytest" alignRight />
            </div>
            <div className="w-full xl:ml-4">
              <InfoBar label="Email" value="johnnytest@gmail.com" alignRight />
            </div>
            <div className="w-full xl:ml-2  ">
              <InfoBar label="Status" value="Active" alignRight />
            </div>
            <div className="w-full xl:-ml-2 ">
              <InfoBar label="Last Login" value="18:13 PM, 27 Mar 2025" alignRight />
            </div>
          </div>
        </div>
      </div>

      {/* Form section */}
      <form onSubmit={handleSubmit(onSubmit)} className="py-6">
        <h2 className="text-lg font-medium mb-6">Information of User</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
            <input
              type="text"
              {...register("firstName")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
            <input
              type="text"
              {...register("lastName")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
            <select
              {...register("country")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.country && <p className="mt-1 text-sm text-red-600">{errors.country.message}</p>}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="Write here..."
              {...register("phoneNumber")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.phoneNumber && <p className="mt-1 text-sm text-red-600">{errors.phoneNumber.message}</p>}
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <input
              type="text"
              placeholder="Enter City..."
              {...register("city")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>}
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
            <input
              type="text"
              placeholder="Enter State..."
              {...register("state")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>}
          </div>

          {/* Zip Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
            <input
              type="text"
              placeholder="Write here..."
              {...register("zipCode")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.zipCode && <p className="mt-1 text-sm text-red-600">{errors.zipCode.message}</p>}
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input
              type="text"
              placeholder="Write here..."
              {...register("address")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>}
          </div>
        </div>

        {/* Verification Status Section */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* User Status */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">User Status</p>
            <div className="flex space-x-2">
              <StatusButton
                active={userStatus === "Active"}
                onClick={() => setUserStatus("Active")}
                label="Active"
                color="bg-blue-600"
              />
              <StatusButton
                active={userStatus === "Banned"}
                onClick={() => setUserStatus("Banned")}
                label="Banned"
                color="bg-gray-200 text-gray-700"
              />
            </div>
          </div>

          {/* Email Verification */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Email Verification</p>
            <div className="flex space-x-2">
              <StatusButton
                active={emailVerification === "Verified"}
                onClick={() => setEmailVerification("Verified")}
                label="Verified"
                color="bg-blue-600"
              />
              <StatusButton
                active={emailVerification === "Unverified"}
                onClick={() => setEmailVerification("Unverified")}
                label="Unverified"
                color="bg-gray-200 text-gray-700"
              />
            </div>
          </div>

          {/* 2FA Verification */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">2FA Verification</p>
            <div className="flex space-x-2">
              <StatusButton
                active={twoFAVerification === "Verified"}
                onClick={() => setTwoFAVerification("Verified")}
                label="Verified"
                color="bg-gray-200 text-gray-700"
              />
              <StatusButton
                active={twoFAVerification === "Unverified"}
                onClick={() => setTwoFAVerification("Unverified")}
                label="Unverified"
                color="bg-red-500"
              />
            </div>
          </div>

          {/* KYC Verification */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">KYC Verification</p>
            <div className="flex space-x-2">
              <StatusButton
                active={kycVerification === "Verified"}
                onClick={() => setKYCVerification("Verified")}
                label="Verified"
                color="bg-gray-200 text-gray-700"
              />
              <StatusButton
                active={kycVerification === "Unverified"}
                onClick={() => setKYCVerification("Unverified")}
                label="Unverified"
                color="bg-red-500"
              />
            </div>
          </div>
        </div>

        {/* Update Button */}
        <div className="mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-main text-white py-3 rounded-md font-medium  transition-colors disabled:opacity-70"
          >
            {isSubmitting ? "Updating..." : "Update"}
          </button>
        </div>
      </form>
    </div>
  )
}

// Info bar component for profile section
function InfoBar({
  icon,
  label,
  value,
  isButton = false,
  alignRight = false,
}: {
  icon?: string
  label: string
  value: string
  isButton?: boolean
  alignRight?: boolean
}) {
  return (
    <div
      className={`bg-main w-full text-sm text-white text-center rounded-full px-4 py-1 flex justify-center ${alignRight ? "xl:justify-end xl:pl-10" : "xl:justify-start xl:pr-10"
        }`}
    >
      {icon && <span className="xl:mr-2">{icon}</span>}
      {isButton ? (
        <button className="font-medium">{label}</button>
      ) : (
        <div className={`flex whitespace-nowrap justify-center ${alignRight ? "xl:flex-row-reverse xl:justify-end" : "xl:flex-row xl:justify-start"} gap-2`}>
          <span className={`${alignRight ? "font-normal" : "font-medium"}`}>{label} :</span>
          <span className={`${alignRight ? "font-medium" : "font-normal"}`}>{value}</span>
        </div>
      )}
    </div>
  )
}

// Status button component
function StatusButton({
  active,
  onClick,
  label,
  color,
}: {
  active: boolean
  onClick: () => void
  label: string
  color: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-sm font-medium ${active ? color : "bg-gray-100 text-gray-500"
        } ${color.includes("text") ? "" : active ? "text-white" : ""}`}
    >
      {label}
    </button>
  )
}
