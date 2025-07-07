"use client"

import { useForm } from "react-hook-form"
import { useAddNewBlogCategory } from "../../api/mutations"
import { showsuccess } from "@/lib/toasts"

interface BlogCategoryFormValues {
  name: string
}

export default function BlogCategoryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BlogCategoryFormValues>({
    defaultValues: {
      name: "",
    },
  })

  const { createBlogCategory, isPending } = useAddNewBlogCategory()

  const onSubmit = async (data: BlogCategoryFormValues) => {
    try {
      const res = await createBlogCategory(data)
      showsuccess(res.message)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full  py-4 px-10">
      <div className="bg-white rounded-md shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-medium text-gray-800">Blog Category Information</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6">
          <div className="mb-6 flex items-center gaap-12">
            <label htmlFor="name" className="block mb-2  whitespace-nowrap text-sm font-medium text-gray-700">
              Blog Category <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Blog Category"
              className={`w-full px-3 py-2 border ${errors.name ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500`}
              {...register("name", { required: "Category name is required" })}
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-amber-500 text-white font-medium rounded hover:bg-amber-600 transition-colors"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
