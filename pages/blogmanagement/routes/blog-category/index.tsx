"use client"

import { useState } from "react"
import { Edit2, Trash2, Search } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import BlogNavigation from "../../components/blognavigation"

interface Category {
  id: number
  title: string
}

interface SearchFormValues {
  searchTerm: string
}

export default function BlogCategories() {
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, title: "Security" },
    { id: 2, title: "Security" },
    { id: 3, title: "Security" },
    { id: 4, title: "Security" },
    { id: 5, title: "Security" },
    { id: 6, title: "Security" },
    { id: 7, title: "Security" },
    { id: 8, title: "Security" },
    { id: 9, title: "Security" },
  ])

  const { register, watch } = useForm<SearchFormValues>({
    defaultValues: {
      searchTerm: "",
    },
  })

  const searchTerm = watch("searchTerm")

  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex flex-wrap gap-2 mb-8">
        <Link
          href="/manage-blogs"
          className="px-4 py-2 bg-[#C99213] text-white font-medium rounded  transition-colors"
        >
          Manage Blogs
        </Link>
        <Link
          href="/manage-categories"
          className="px-4 py-2 bg-[#C99213] text-white font-medium rounded  transition-colors"
        >
          Manage Categories
        </Link>
        <Link
          href="/new-blog"
          className="px-4 py-2 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors"
        >
          New Category
        </Link>
      </div>

      <div className="bg-white rounded-md shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-xl font-medium text-gray-800">Blog Categories</h1>
        </div>

        <div className="p-6 flex justify-end">
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Type name & Enter"
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500"
              {...register("searchTerm")}
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                {["#", "Title", "Options"].map((header) => (
                  <th key={header} className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredCategories.map((category) => (
                <tr key={category.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-500">{category.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 w-full flex-1">{category.title}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex flex-col items-center justify-end gap-2">
                      <button
                        className="p-1.5 text-cyan-500 bg-cyan-50 hover:bg-cyan-100 rounded-md transition-colors"
                        aria-label="Edit category"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        className="p-1.5 text-pink-500 bg-pink-50 hover:bg-pink-100 rounded-md transition-colors"
                        aria-label="Delete category"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
