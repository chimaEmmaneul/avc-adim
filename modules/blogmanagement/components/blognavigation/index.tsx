import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const BlogNavigation = () => {
  const [activeTab, setActiveTab] = useState<"blogs" | "categories">("blogs")
  const router = useRouter()
  return (
    <div className="flex gap-2 mb-8">
      <button
        className={`px-4 py-2 rounded ${activeTab === "blogs" ? "bg-white text-black border border-gray-300" : "bg-white text-black"
          }`}
        onClick={() => setActiveTab("blogs")}
      >
        Manage Blogs
      </button>
      <button
        className={`px-4 py-2 rounded ${activeTab === "categories" ? "bg-amber-500 text-black" : "bg-amber-500 text-black"
          }`}
        onClick={() => router.push("/manage-blogs/blog-category")}>
        Manage Categories
      </button>
      <button onClick={() => router.push("/manage-blogs/add-new-blog")} className="px-4 py-2 rounded bg-black text-white ">
        New Blog
      </button>
    </div>
  )
}

export default BlogNavigation