"use client"
import React from 'react'
import AddNewLocationForm from './plckup-location-form'

const AddNewLocation = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className='my-4'>
      <button onClick={() => setIsOpen(true)} className='bg-main text-white px-4 py-2 rounded-md'>Add New Location</button>
      <AddNewLocationForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}

export default AddNewLocation