"use client"

import type React from "react"
import { useState, useRef, useEffect, useMemo } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useProfileStore } from "@/zustand/useProfileStore"
import { showerror, showsuccess } from "@/lib/toasts"
import { ProfileFormData, profileSchema } from "@/schema/authSchema"
import { useGetAdmin, useGetAllCountries, useUpadteAdminProfile } from "@/pages/authentication/api/mutations"
import { Loader, UploadCloud } from "lucide-react"
import Image from "next/image"

export default function ProfileForm() {
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { admin: profile, isLoading, isError, error } = useGetAdmin()
  const { updateProfile, isUpdatingProfile } = useUpadteAdminProfile()
  const { countries, isLoading: isLoadingCountries } = useGetAllCountries()

  // Create stable default values using useMemo
  const defaultValues = useMemo(() => ({
    first_name: profile?.data.first_name || "",
    last_name: profile?.data.last_name || "",
    email: profile?.data.email || "",
    phone_number: profile?.data.phone_number || "",
    country_id: profile?.data.country_id || "",
    state: profile?.data.state || "",
    city: profile?.data.city || "",
    zip_code: profile?.data.zip_code || "",
    address: profile?.data.address || "",
    profile_photo: null,
  }), [profile]);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues,
  })

  const watchCountry = watch("country_id")
  const watchState = watch("state")

  // Only reset when profile changes
  useEffect(() => {
    if (profile) {
      reset(defaultValues)
    }
  }, [profile, defaultValues, reset])

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
      await updateProfile(formData as unknown as ProfileFormData);
      showsuccess("Profile updated successfully");
    } catch (error) {
      console.error(error);
      showerror("Failed to update profile");
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  // Get the actual profile photo URL
  const profilePhotoUrl = profile?.data?.profile_photo || previewImage;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-1">
          <div
            className="border-2 border-dashed border-amber-500 rounded-md p-6 flex flex-col items-center justify-center cursor-pointer h-full"
            onClick={triggerFileInput}
          >
            {profilePhotoUrl ? (
              <div className="relative w-32 h-32 mb-2">
                <Image
                  src={profilePhotoUrl}
                  alt="Profile preview"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            ) : (
                <div className="text-amber-500 mb-2 flex flex-col items-center">
                  <UploadCloud className="w-12 h-12" />
                  <p className="text-sm text-center mt-2">
                    Drop your file or <span className="underline text-amber-600">click</span> to select
                  </p>
                </div>
            )}
            <input 
              type="file"
              className="hidden"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleImageUpload} 
            />
            <input type="hidden" {...register("profile_photo")} />
          </div>
        </div>

        {/* ... rest of your form fields remain unchanged ... */}
      </div>

      {/* ... rest of your form ... */}

    </form>
  )
}