"use client"

import { useState } from "react"
import { Pencil, Trash2 } from "lucide-react"
import { sampleBlogPosts } from "@/pages/blogmanagement/constants"
import { useRouter } from "next/navigation"
import BlogNavigation from "../components/blognavigation"

interface BlogPost {
  id: number
  title: string
  category: string
  description: string
}

interface BlogManagementProps {
  blogPosts: BlogPost[]
  onEdit?: (id: number) => void
  onDelete?: (id: number) => void
  onNewBlog?: () => void
  onManageCategories?: () => void
}

export default function BlogManagement() {
  const [activeTab, setActiveTab] = useState<"blogs" | "categories">("blogs")
  const [searchTerm, setSearchTerm] = useState("")

  const router = useRouter()

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    console.log("Search term:", value)
  }

  // Truncate description text
  const truncateText = (text: string, maxLength = 100) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + "..."
  }

  return (
    <div className="w-full">
      {/* Navigation Tabs */}
      <BlogNavigation />

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">All blog posts</h2>
          <input
            type="text"
            placeholder="Type & Enter"
            className="border border-gray-300 rounded px-3 py-1"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                {["#", "Title", "Category", "Short Description", "Options"].map((header) => (
                  <th key={header} className="py-3 px-4 text-left font-medium text-gray-600">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {sampleBlogPosts.map((post) => (
                <tr key={post.id} className="border-b border-gray-200 text-sm">
                  <td className="py-4 px-4">{post.id}</td>
                  <td className="py-4 px-4">{post.title}</td>
                  <td className="py-4 px-4">{post.category}</td>
                  <td className="py-4 px-4 max-w-md">
                    <div className="line-clamp-2">{truncateText(post.description, 150)}</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex flex-col gap-3">
                      <button
                        onClick={() => router.push("/manage-blogs/add-new-blog")}
                        className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-[50%] text-blue-500 hover:bg-blue-200"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        className="w-8 h-8 flex items-center justify-center bg-red-100 rounded-[50%] text-red-500 hover:bg-red-200"
                      >
                        <Trash2 size={16} />
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
