
"use client"

import type React from "react"
import { useState, useRef } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import Image from "next/image"

type FormValues = {
  title: string
  description: string
  phone: string
  address: string
  email: string
  schedules: {
    time: string
  }[]
}

const ContactUs = () => {

  const [imagePreview, setImagePreview] = useState<string>(
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-As5ob1CKRDRsOIFmb30GV5G6L5C5m8.png",
  )
  const [imageFile, setImageFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      title: "CONTACT US",
      description: "Get In Touch With Us",
      phone: "(+) - 23355 - 9624",
      address: "255 5th Ave, New York, NY 10000, USA",
      email: "hello@example.com",
      schedules: [{ time: "Monday - Friday: 9:00 - 20:00" }, { time: "Sunday & Saturday: 9:00 - 22:00" }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "schedules",
  })

  const handleImageClick = () => {
    fileInputRef.current?.click()
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const onSubmit = async (data: FormValues) => {
    // Create a FormData object to handle the file upload
    const formData = new FormData()

    // Append all form fields
    formData.append("title", data.title)
    formData.append("description", data.description)
    formData.append("phone", data.phone)
    formData.append("address", data.address)
    formData.append("email", data.email)

    // Append schedules as JSON
    formData.append("schedules", JSON.stringify(data.schedules))

    // Append the image file if it exists
    if (imageFile) {
      formData.append("image", imageFile)
    }

    // Here you would normally send the formData to your API
    console.log("Form submitted with data:", data)
    console.log("Image file:", imageFile)



    alert("Form submitted successfully!")
  }

  return (
    <div className="">
      <h2 className="text-xl font-medium mb-6">Contact Section</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Image</label>
          <div
            className="rounded-md p-2 cursor-pointer  transition-colors"
            onClick={handleImageClick}
          >
            <div className="relative mx-auto border border-gray-200 w-48 h-48 md:h-64 bg-white rounded-md overflow-hidden">
              <Image src={"/placeholder.svg"} alt="Contact image" fill className="object-contain" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-10 transition-all">
                <span className="text-transparent hover:text-white text-sm font-medium">Click to upload image</span>
              </div>
            </div>
            <p className="mt-2 text-center text-sm text-gray-500">Click to upload an image</p>
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
          </div>
        </div>

        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Title<span className="text-red-500">*</span>
          </label>
          <input
            id="title"
            type="text"
            {...register("title", { required: "Title is required" })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>}
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1">
            Description<span className="text-red-500">*</span>
          </label>
          <input
            id="description"
            type="text"
            {...register("description", { required: "Description is required" })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone<span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="text"
            {...register("phone", { required: "Phone number is required" })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium mb-1">
            Address<span className="text-red-500">*</span>
          </label>
          <input
            id="address"
            type="text"
            {...register("address", { required: "Address is required" })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              },
            })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium">Operation Schedule</label>
            <button
              type="button"
              onClick={() => append({ time: "" })}
              className="px-3 py-1 bg-amber-500 text-white rounded-md text-sm flex items-center"
            >
              <span className="mr-1">+</span> Add
            </button>
          </div>

          <div className="space-y-2">
            {fields.map((field, index) => (
              <div key={field.id} className="flex items-center gap-2">
                <input
                  type="text"
                  {...register(`schedules.${index}.time` as const, {
                    required: "Schedule time is required",
                  })}
                  className="flex-1 p-2 border border-gray-300 rounded-md"
                  placeholder="e.g. Monday - Friday: 9:00 - 17:00"
                />
                <button type="button" onClick={() => remove(index)} className="p-2 bg-black text-white rounded-md">
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-amber-500 text-white font-medium rounded-md hover:bg-amber-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  )
}


export default ContactUs;