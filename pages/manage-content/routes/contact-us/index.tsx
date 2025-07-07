
"use client"
import type React from "react"
import { useState, useRef, useEffect } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import Image from "next/image"
import { useGetContactUsDetails, useUpdateContactUs } from "../../api/mutatoins"
import { showsuccess } from "@/lib/toasts"

type FormValues = {
  title: string
  description: string
  phone: string
  address: string
  email: string
  mission: string
  vision: string
  schedules: {
    time: string
  }[]
}

const ContactUs = () => {

  const [imagePreview, setImagePreview] = useState<string>("")
  const [imageFile, setImageFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { contactUs, isLoading, isError, error } = useGetContactUsDetails()
  const { updateContactUs, isPending } = useUpdateContactUs()
  console.log(contactUs, "contactus")
  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      title: "",
      description: "",
      phone: "",
      vision: "",
      mission: "",
      address: "",
      email: "",
      schedules: []
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "schedules",
  })

  useEffect(() => {
    if (contactUs) {
      reset({
        title: contactUs?.data.title,
        description: contactUs?.data.description,
        phone: contactUs?.data.phone,
        address: contactUs?.data.address,
        email: contactUs?.data.email,
        mission: contactUs?.data.mission,
        vision: contactUs?.data.vision,
        schedules: [{ time: contactUs?.data.operation_hour }]
      })
    }
  }, [contactUs])

  const handleImageClick = () => {
    console.log("clicked")
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
    const formData = new FormData()
    console.log(data.schedules[0].time)
    formData.append("title", data.title)
    formData.append("description", data.description)
    formData.append("phone", data.phone)
    formData.append("address", data.address)
    formData.append("email", data.email)
    formData.append("mission", data.mission)
    formData.append("vision", data.vision)
    formData.append("operation_hour", data.schedules[0].time)
    // formData.append("opening_hours", data.schedules[1].time)
    if (imageFile) {
      formData.append("site_logo", imageFile)
    }
    // Here you would normally send the formData to your API
    console.log("Form submitted with data:", data)
    console.log("Image file:", imageFile)

    try {
      const res = await updateContactUs(formData)
      showsuccess(res.message)
    } catch (error) {
      console.log(error)
    }
  }
  if (isPending) {
    return (
      <div>Loading...</div>
    )
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
            {(contactUs?.data.site_logo || imagePreview) ?
              <div className="relative mx-auto border border-gray-200 w-72 h-48 md:h-64 bg-white rounded-md overflow-hidden">
                <img src={contactUs?.data.site_logo || imagePreview} alt="Contact image" className="object-cover w-full h-full" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-10 transition-all">
                  <span className="text-transparent hover:text-white text-sm font-medium">Click to upload image</span>
                </div>
              </div> :
              <div className="flex items-center justify-center">
                <p className="mt-2 text-center border flex items-center justify-center text-sm text-gray-500 w-72 h-48 md:h-64">Click to upload an image</p>
              </div>
            }
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
          <label htmlFor="mission" className="block text-sm font-medium mb-1">
            Mission<span className="text-red-500">*</span>
          </label>
          <input
            id="mission"
            type="text"
            {...register("mission", { required: "mission is required" })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.mission && <p className="mt-1 text-sm text-red-600">{errors.mission.message}</p>}
        </div>

        <div>
          <label htmlFor="vision" className="block text-sm font-medium mb-1">
            Vission<span className="text-red-500">*</span>
          </label>
          <input
            id="vision"
            type="text"
            {...register("vision", { required: "vision is required" })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.vision && <p className="mt-1 text-sm text-red-600">{errors.vision.message}</p>}
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
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  )
}


export default ContactUs;