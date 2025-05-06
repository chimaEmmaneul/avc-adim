"use client"

import { useForm } from "react-hook-form"

interface BlogCategoryFormValues {
  categoryName: string
}

export default function BlogCategoryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BlogCategoryFormValues>({
    defaultValues: {
      categoryName: "",
    },
  })

  const onSubmit = (data: BlogCategoryFormValues) => {
    console.log("Form submitted:", data)
    // Here you would typically save the data to your backend
  }

  return (
    <div className="w-full  py-4 px-10">
      <div className="bg-white rounded-md shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-medium text-gray-800">Blog Category Information</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6">
          <div className="mb-6">
            <label htmlFor="categoryName" className="block mb-2 text-sm font-medium text-gray-700">
              Blog Category <span className="text-red-500">*</span>
            </label>
            <input
              id="categoryName"
              type="text"
              placeholder="Blog Category"
              className={`w-full px-3 py-2 border ${errors.categoryName ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500`}
              {...register("categoryName", { required: "Category name is required" })}
            />
            {errors.categoryName && <p className="mt-1 text-sm text-red-500">{errors.categoryName.message}</p>}
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
