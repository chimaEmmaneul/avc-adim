"use client"


import type React from "react"
import "react-quill/dist/quill.snow.css"


import { useState, useRef } from "react"
import { useForm } from "react-hook-form"
import { useAddNewBlog, useGetAllCategory } from "../../api/mutations"
import { showerror } from "@/lib/toasts"
import { AxiosError } from "axios"
import { Loader2 } from "lucide-react"

type FormData = {
  title: string
  category: string
  description: string
}

export default function AddNewBlog() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const [bannerFile, setBannerFile] = useState<File | null>(null)
  const [metaImageFile, setMetaImageFile] = useState<File | null>(null)
  const [editorContent, setEditorContent] = useState("")

  const bannerInputRef = useRef<HTMLInputElement>(null)
  const { allCategory, isLoading } = useGetAllCategory()
  const { createNewBlog, isPending } = useAddNewBlog()


  const onSubmit = async (data: FormData) => {
    const formData = new FormData()
    try {
      formData.append("image", bannerFile as File)
      formData.append("title", data.title)
      formData.append("category_id", data.category)
      formData.append("description", data.description)

      const res = await createNewBlog(formData)
      reset()
    } catch (error: AxiosError | any) {
      showerror(error.message)
    }
  }

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setBannerFile(e.target.files[0])
    }
  }

  const handleMetaImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMetaImageFile(e.target.files[0])
    }
  }

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-md">
      <h2 className="text-xl font-semibold mb-6 pb-2 border-b">Blog Information</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        <div className="grid grid-cols-1 lg:grid-cols-[150px_1fr] items-center gap-4">
          <label htmlFor="blogTitle" className="text-sm font-medium">
            Blog Title <span className="text-red-500">*</span>
          </label>
          <div>
            <input
              id="blogTitle"
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Blog Title"
              {...register("title", { required: true })}
            />
            {errors.title && <span className="text-red-500">Title is required</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[150px_1fr] items-center gap-4">
          <label htmlFor="category" className="text-sm font-medium">
            Category <span className="text-red-500">*</span>
          </label>
          <div>
            <select
              id="category"
              className="w-full p-2 border border-gray-300 rounded"
              {...register("category", { required: true })}
            >
              {allCategory?.data?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.category && <span className="text-red-500">Category is required</span>}
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-[150px_1fr] items-start justify-start gap-4">
          <label htmlFor="banner" className="text-sm font-medium">
            Banner <span className="text-gray-500 text-xs">(1100x629)</span>
          </label>
          <div className="flex">
            <input
              type="file"
              id="banner"
              ref={bannerInputRef}
              onChange={handleBannerChange}
              className="hidden"
              accept="image/*"
            />
            <button
              type="button"
              onClick={() => bannerInputRef.current?.click()}
              className="px-3 py-2 bg-gray-100 border border-gray-300 rounded-l text-sm"
            >
              Browse
            </button>
            <div className="flex-1 p-2 border border-l-0 border-gray-300 rounded-r text-sm truncate">
              {bannerFile ? bannerFile.name : "Choose file"}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[150px_1fr] items-start justify-start gap-4">
          <label htmlFor="shortDescription" className="text-sm font-medium pt-2">
            Short Description <span className="text-red-500">*</span>
          </label>
          <div>
            <textarea
              id="shortDescription"
              rows={4}
              className="w-full p-2 border border-gray-300 rounded"
              {...register("description", { required: true })}
            ></textarea>
            {errors.description && <span className="text-red-500">Description is required</span>}
          </div>
        </div>

        <div className="flex justify-center sm:justify-end">
          <button
            type="submit"
            disabled={isPending}
            className="px-4 py-2 bg-main w-full text-white rounded hover:bg-main/90 transition-colors"
          >
            {isPending ? <span className="flex items-center gap-2"><Loader2 className="animate-spin" />Saving...</span> : "Save"}
          </button>
        </div>
      </form>
    </div>
  )
}
