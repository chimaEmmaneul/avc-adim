import EditBlog from '@/pages/blogmanagement/routes/edit-blog'
import React from 'react'

const EditBlogPage = ({ params }: { params: { id: string } }) => {
  return (
    <EditBlog params={params} />
  )
}

export default EditBlogPage