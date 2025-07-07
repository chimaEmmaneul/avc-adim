"use client"
import React from 'react'
import { useGetBlogDetails } from '../../api/mutations'
import BlogForm from '../../components/blogform'

const EditBlog = ({ params }: { params: { id: string } }) => {
  const { blogDetails, isLoading } = useGetBlogDetails(params.id)

  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <BlogForm blogDetails={blogDetails?.data ?? {
      id: "",
      title: "",
      slug: "",
      category: "",
      author: "",
      image: "",
      description: "",
      date: ""
    }} isLoading={isLoading} />
  )
}

export default EditBlog;