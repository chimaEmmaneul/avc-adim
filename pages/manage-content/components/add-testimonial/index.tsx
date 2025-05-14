"use client"
import React from 'react'
import { useState, useRef } from "react"
import { useForm } from "react-hook-form"
import { Upload } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

type FormData = {
  name: string
  designation: string
  comment: string
  image?: File
}

type AddTestimonialProps = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AddTestimonials = ({ open, setOpen }: AddTestimonialProps) => {

  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    const imageUrl = previewImage || "/placeholder.svg?height=40&width=40"

    console.log("Form submitted with data:", data)
    console.log("Image URL:", imageUrl)

    // Reset form and close dialog
    // reset()
    // setPreviewImage(null)
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      setValue("image", file)
      reader.onload = (e) => {
        setPreviewImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleImageAreaClick = () => {
    fileInputRef.current?.click()
  }

  const handleDialogClose = () => {
    reset()
    setPreviewImage(null)
    setOpen(false)
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="max-w-md max-h-[95vh] overflow-y-auto">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-lg font-medium border-b">Add Testimonial</AlertDialogTitle>
        </AlertDialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          <div className="space-y-2">
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
              Comment*
            </label>
            <textarea
              id="comment"
              placeholder="Type here..."
              className={`w-full p-2 border ${errors.comment ? "border-red-500" : "border-gray-300"} rounded min-h-[100px]`}
              {...register("comment", { required: true })}
            />
            {errors.comment && <p className="text-red-500 text-xs mt-1">Comment is required</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name*
            </label>
            <input
              type="text"
              id="name"
              placeholder="Type here..."
              className={`w-full p-2 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded`}
              {...register("name", { required: true })}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">Name is required</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="designation" className="block text-sm font-medium text-gray-700">
              Designation*
            </label>
            <input
              type="text"
              id="designation"
              placeholder="Type here..."
              className={`w-full p-2 border ${errors.designation ? "border-red-500" : "border-gray-300"} rounded`}
              {...register("designation", { required: true })}
            />
            {errors.designation && <p className="text-red-500 text-xs mt-1">Designation is required</p>}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Image</label>
            <div
              onClick={handleImageAreaClick}
              className="border-2 border-dashed border-gray-300 rounded p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
            >
              {previewImage ? (
                <img
                  src={previewImage || "/placeholder.svg"}
                  alt="Preview"
                  className="w-40 h-40 object-cover "
                />
              ) : (
                <>
                  <Upload className="h-8 w-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500 text-center">
                    Drop your file <span className="font-medium">Or</span> click to select
                  </p>
                </>
              )}
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <AlertDialogCancel
              type="button"
              onClick={handleDialogClose}
              className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded"
            >
              Cancel
            </AlertDialogCancel>
            <button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded">
              Add
            </button>
          </div>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AddTestimonials