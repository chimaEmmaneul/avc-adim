"use client"

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import { userFormSchema, UserFormValues } from "@/schema/authSchema"
import { useRouter } from "next/navigation"
import { showerror, showsuccess } from "@/lib/toasts"
import { formatDate, formatDateTime } from "@/lib/utils"
import { useGetAllCountries, useGetUser, useUpdateUsers } from "@/modules/authentication/api/mutations"



export default function UserProfile({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { isLoading, userProfile } = useGetUser(params.id)
  const { countries } = useGetAllCountries()
  const [emailVerification, setEmailVerification] = useState(false)
  const [twoFAVerification, setTwoFAVerification] = useState(false)
  const [kycVerification, setKYCVerification] = useState(false)
  console.log(twoFAVerification, "towfact", kycVerification, "kyc", emailVerification, "email")
  const { updateUser, isUpdatingUser } = useUpdateUsers()
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<UserFormValues>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      country_id: "",
      phoneNumber: "",
      city: "",
      state: "",
      status: "",
      zipCode: "",
      address: "",
    },
  })

  useEffect(() => {
    if (userProfile) {
      reset({
        firstName: userProfile?.data?.first_name,
        lastName: userProfile?.data?.last_name,
        country_id: userProfile?.data?.country_id,
        email: userProfile?.data?.email,
        phoneNumber: userProfile?.data?.phone,
        status: userProfile?.data?.status,
        state: userProfile?.data?.state,
        zipCode: userProfile?.data?.zip_code,
        address: userProfile?.data?.address,

      })
      setEmailVerification(userProfile.data.email_verification === 1);
      setKYCVerification(userProfile.data.kyc_verification === 1)
      setTwoFAVerification(userProfile.data.two_factor_enabled === 1)
    }
  }, [userProfile])


  useEffect(() => {
    if (countries?.data && userProfile?.data?.country) {
      const matchedCountry = countries.data.find(
        (c) => c.name === userProfile.data.country
      );

      if (matchedCountry) {
        setValue("country_id", String(matchedCountry.id));
      }
    }
  }, [countries?.data, userProfile?.data?.country]);

  if (isLoading) {
    return <div>Loading...</div>
  }
  console.log(userProfile?.data?.status, "status")


  const onSubmit = async (data: UserFormValues) => {
    const updatedData = {
      id: params.id,
      first_name: data?.firstName,
      last_name: data?.lastName,
      email: data?.email,
      phone: data?.phoneNumber,
      country_id: data?.country_id,
      state: data?.state,
      zip_code: data?.zipCode,
      address: data?.address,
      status: data.status,
      email_verification: emailVerification,
      two_factor_enabled: twoFAVerification,
      kyc_verification: kycVerification
    }
    try {
      console.log(updatedData, "updatedData")
      const response = await updateUser({ id: params.id, values: updatedData })
      showsuccess("updated successfully")
    } catch (error) {
      console.log(error)
      showerror("something went wrong")
    }
  }


  return (
    <div className=" w-full">
      <div className="flex justify-end">
        <button onClick={() => router.back()} className="bg-main text-white px-4 py-2 rounded-md font-medium">Go Back</button>
      </div>

      <div className="relative h-fit  w-full grid  place-items-center ">
        <div className="flex flex-col xl:flex-row items-center">
          <div className="flex order-2 xl:order-1 flex-col space-y-4  xl:-mr-7">
            <div className="w-full xl:-ml-0 ">
              <InfoBar icon="👤" label="Full Name" value={`${userProfile?.data.first_name} ${userProfile?.data.last_name}`} />
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
              src={userProfile?.data.profile_photo ? userProfile.data.profile_photo : "/placeholder.svg?height=192&width=192"}
              alt="Profile"
              width={320}
              height={320}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col order-3 space-y-4 my-4 xl:my-0 xl:-ml-9">
            <div className="w-full xl:ml-4">
              <InfoBar label="Email" value={userProfile?.data.email || "N/A"} alignRight />
            </div>
            <div className="w-full xl:ml-2  ">
              <InfoBar label="Status" value={userProfile?.data.status || "N/A"} alignRight />
            </div>
            <div className="w-full xl:-ml-2 ">
              <InfoBar label="Last Login" value={formatDateTime(userProfile?.data.last_login || "")} alignRight />
            </div>
          </div>
        </div>
      </div>

      {/* Form section */}
      <form onSubmit={handleSubmit(onSubmit)} className="py-6">
        <h2 className="text-lg font-medium mb-6 border-b pb-2">Information of User</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
            <input
              type="text"
              {...register("firstName")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
            <input
              type="text"
              {...register("lastName")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
            <input
              type="email"
              {...register("email")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
            <select
              {...register("country_id")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Country</option>
              {countries?.data?.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
            {errors.country_id && <p className="mt-1 text-sm text-red-600">{errors.country_id.message}</p>}
          </div>

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

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">User Status</p>
            <div className="flex space-x-2 w-full ">
              <select {...register("status")} className="border border-gray-200 w-full  py-2 px-2 rounded-md outline-none">
                <option value="active">Active</option>
                <option value="suspended">Suspended</option>
                <option value="blocked">Blocked</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>

          <div className="w-full">
            <p className="text-sm font-medium text-gray-700 mb-2">Email Verification</p>
            <div className="flex space-x-2">
              <StatusButton
                active={emailVerification === true}
                onClick={() => setEmailVerification(true)}
                label="Verified"
                color="bg-main text-white"
              />

              <StatusButton
                active={emailVerification === false}
                onClick={() => setEmailVerification(false)}
                label="Unverified"
                color="bg-main text-white"

              />
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">2FA Verification</p>
            <div className="flex space-x-2">
              <StatusButton
                active={twoFAVerification === true}
                onClick={() => setTwoFAVerification(true)}
                label="Verified"
                color="bg-main text-white"
              />
              <StatusButton
                active={twoFAVerification === false}
                onClick={() => setTwoFAVerification(false)}
                label="Unverified"
                color="bg-main text-white"

              />
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">KYC Verification</p>
            <div className="flex space-x-2">
              <StatusButton
                active={kycVerification === true}
                onClick={() => setKYCVerification(true)}
                label="Verified"
                color="bg-main text-white"
              />
              <StatusButton
                active={kycVerification === false}
                onClick={() => setKYCVerification(false)}
                label="Unverified"
                color="bg-main text-white"
              />
            </div>
          </div>
        </div>

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
            <span className={`${alignRight ? "font-normal order-2" : "font-medium"}`}>{label} :</span>
            <span className={`${alignRight ? "font-medium order-1" : "font-normal"}`}>{value}</span>
        </div>
      )}
    </div>
  )
}

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
      className={`px-4 py-2 rounded-md text-sm font-medium ${active ? color : " text-black border rounded-md"}`}
    >
      {label}
    </button>
  )
}
