// import BlogCategoryForm from '@/pages/blogmanagement/components/blogcategoryform'
import BlogCategoryForm from '@/modules/blogmanagement/components/blogcategoryform'
import Link from 'next/link'
import React from 'react'

const EditCategory = ({ params }: { params: { id: string } }) => {
  return (
    <>
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
      <BlogCategoryForm />
    </>
  )
}

export default EditCategory