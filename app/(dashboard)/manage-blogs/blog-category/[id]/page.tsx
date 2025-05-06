import EditCategory from '@/pages/blogmanagement/routes/blog-category/edit-category'
import React from 'react'

const EditCategoryPage = ({ params }: { params: { id: string } }) => {
  return (
    <EditCategory params={params} />
  )
}

export default EditCategoryPage