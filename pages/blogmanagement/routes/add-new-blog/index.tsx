"use client"

import { modules } from "@/pages/user-management/constants/config"
import dynamic from "next/dynamic"
import type React from "react"
import "react-quill/dist/quill.snow.css"


import { useState, useRef } from "react"
import { useForm } from "react-hook-form"

type FormData = {
  blogTitle: string
  category: string
  slug: string
  shortDescription: string
  metaTitle: string
  metaDescription: string
  metaKeywords: string
}
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <div className="h-64 border border-gray-300 rounded-md animate-pulse bg-gray-50"></div>,
})

export default function AddNewBlog() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const [bannerFile, setBannerFile] = useState<File | null>(null)
  const [metaImageFile, setMetaImageFile] = useState<File | null>(null)
  const [editorContent, setEditorContent] = useState("")

  const bannerInputRef = useRef<HTMLInputElement>(null)
  const metaImageInputRef = useRef<HTMLInputElement>(null)

  const onSubmit = (data: FormData) => {
    const formData = {
      ...data,
      description: editorContent,
      bannerFile: bannerFile,
      metaImageFile: metaImageFile,
    }

    console.log("Form submitted:", formData)
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
        <div className="grid grid-cols-[150px_1fr] items-center gap-4">
          <label htmlFor="blogTitle" className="text-sm font-medium">
            Blog Title <span className="text-red-500">*</span>
          </label>
          <input
            id="blogTitle"
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Blog Title"
            {...register("blogTitle", { required: true })}
          />
        </div>

        <div className="grid grid-cols-[150px_1fr] items-center gap-4">
          <label htmlFor="category" className="text-sm font-medium">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            id="category"
            className="w-full p-2 border border-gray-300 rounded"
            {...register("category", { required: true })}
          >
            <option value="">--</option>
            <option value="technology">Technology</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="business">Business</option>
            <option value="health">Health</option>
          </select>
        </div>

        <div className="grid grid-cols-[150px_1fr] items-center gap-4">
          <label htmlFor="slug" className="text-sm font-medium">
            Slug <span className="text-red-500">*</span>
          </label>
          <input
            id="slug"
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Slug"
            {...register("slug", { required: true })}
          />
        </div>

        <div className="grid grid-cols-[150px_1fr] items-center gap-4">
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

        <div className="grid grid-cols-[150px_1fr] items-start gap-4">
          <label htmlFor="shortDescription" className="text-sm font-medium pt-2">
            Short Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="shortDescription"
            rows={4}
            className="w-full p-2 border border-gray-300 rounded"
            {...register("shortDescription", { required: true })}
          ></textarea>
        </div>

        <div className="grid grid-cols-[150px_1fr] items-start gap-4">
          <label htmlFor="description" className="text-sm font-medium pt-2">
            Description
          </label>
          <div className="border border-gray-300 rounded">
            <ReactQuill
              theme="snow"
              value={editorContent}
              onChange={setEditorContent}
              modules={modules}
              placeholder="Type Here..."
              className=""
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition-colors"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}
