"use client"
import { Pencil, Plus, Trash2 } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import AddTestimonials from '../../components/testiminial-form'
import TestimonialForm from '../../components/testiminial-form'
import { useDeleteTestimonial, useGetTestimonial } from '../../api/mutatoins'
import { TestimonialData } from '../../@types/testimoinals'
import TestimonialSkeletonLoader from '@/skeleonloaders/testimonials'
import Pagination from '@/shared/Pagination'
import { showerror, showsuccess } from '@/lib/toasts'
import DeleteTestimonial from '../../components/deletetestimonial'

const Testimonials = () => {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState('add')
  const [page, setPage] = useState(1)
  const [isOpen, setIsOpen] = useState(false)
  const [id, setId] = useState<string>("")
  const [testimonialData, setTestimonialData] = useState<TestimonialData | null>(null)
  const { testimonials, isLoading } = useGetTestimonial()


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
        <button onClick={() => { setType("add"); setOpen(true); }} className="absolute right-0 top-0 flex items-center gap-1 bg-main  text-white px-3 py-2 rounded transition-colors">
          <Plus size={16} />
          <span>Add Testimonial</span>
        </button>
      </div>

      {isLoading ? (
        <TestimonialSkeletonLoader />
      ) :
      <div className="overflow-x-auto mt-12">
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="pb-4 font-medium text-gray-600">IMAGE</th>
              <th className="pb-4 font-medium text-gray-600">NAME</th>
                <th className="pb-4 font-medium text-gray-600">POST</th>
                <th className="pb-4 font-medium text-gray-600">NOTE</th>
              <th className="pb-4"></th>
            </tr>
          </thead>
          <tbody>
              {testimonials?.data?.map((testimonial: TestimonialData, index: number) => (
              <tr key={index} className={index % 2 === 0 ? "bg-[#DEE2E6]/30" : "bg-white"}>
                <td className="py-3">
                    <div className="flex items-center justify-center w-14 h-14 rounded-[50%] overflow-hidden">
                      <img
                        src={testimonial.user_image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                </td>
                <td className="py-3 text-gray-800">{testimonial.name}</td>
                  <td className="py-3 text-gray-800">{testimonial.post}</td>
                  <td className="py-3 text-gray-800 max-w-[250px] line-clamp-3 overflow-hidden leading-[2.2]">{testimonial.note}</td>
                <td className="py-3 text-right">
                  <div className="flex justify-end gap-2">
                      <button onClick={() => { setType("edit"); setTestimonialData(testimonial); setOpen(true); }} className="p-1.5 bg-main  rounded transition-colors">
                      <Pencil size={16} className="text-white" />
                    </button>
                      <button className="p-1.5 bg-main rounded transition-colors">
                        <Trash2 size={16} onClick={() => { setIsOpen(true); setId(testimonial.id) }} className="text-white" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
          <Pagination currentPage={page} setCurrentPage={setPage} totalPages={Number(testimonials?.meta.last_page)} />
      </div>
      }
      <TestimonialForm open={open} setOpen={setOpen} type={type} testimonialData={testimonialData} setTestimonialData={setTestimonialData} />
      <DeleteTestimonial id={id} open={isOpen} setOpen={setIsOpen} />
    </div>
  )
}

export default Testimonials