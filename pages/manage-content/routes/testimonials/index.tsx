"use client"
import { Pencil, Plus, Trash2 } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import TestimonialForm from '../../components/testiminial-form'

const Testimonials = () => {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState('add')

  const testimonials = [
    {
      name: "Sarah Smith",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "John Anderson",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Linda Martinez",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "David Lee",
      image: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="">
      <div className="mb-8">
        <div className="mb-4">
          <label htmlFor="sectionTitle" className="block text-sm font-medium text-gray-700 mb-1">
            Section Title*
          </label>
          <input
            type="text"
            id="sectionTitle"
            className="w-full p-2 border border-gray-300 rounded"
            defaultValue="CLIENTS TESTIMONIALS"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="heading" className="block text-sm font-medium text-gray-700 mb-1">
            Heading*
          </label>
          <input
            type="text"
            id="heading"
            className="w-full p-2 border border-gray-300 rounded"
            defaultValue="What Our Client Says"
          />
        </div>

        <button className="w-full bg-main hover:bg-amber-600 text-white py-3 rounded transition-colors">
          Submit
        </button>
      </div>

      <div className="relative mb-4">
        <button onClick={() => { setType("add"); setOpen(true); }} className="absolute right-0 top-0 flex items-center gap-1 bg-main hover:bg-amber-600 text-white px-3 py-2 rounded transition-colors">
          <Plus size={16} />
          <span>Add Testimonial</span>
        </button>
      </div>

      <div className="overflow-x-auto mt-12">
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="pb-4 font-medium text-gray-600">IMAGE</th>
              <th className="pb-4 font-medium text-gray-600">NAME</th>
              <th className="pb-4"></th>
            </tr>
          </thead>
          <tbody>
            {testimonials.map((testimonial, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-[#DEE2E6]/30" : "bg-white"}>
                <td className="py-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                </td>
                <td className="py-3 text-gray-800">{testimonial.name}</td>
                <td className="py-3 text-right">
                  <div className="flex justify-end gap-2">
                    <button onClick={() => { setType("edit"); setOpen(true); }} className="p-1.5 bg-main hover:bg-amber-200 rounded transition-colors">
                      <Pencil size={16} className="text-white" />
                    </button>
                    <button className="p-1.5 bg-[#FF060A]  hover:bg-red-200 rounded transition-colors">
                      <Trash2 size={16} className="text-white" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <TestimonialForm open={open} setOpen={setOpen} type={type} />
    </div>
  )
}

export default Testimonials