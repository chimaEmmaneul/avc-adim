"use client"
import React from 'react'
import { useForm, useFieldArray } from "react-hook-form"

type FormValues = {
  socialLinks: {
    name: string
    icon: string
    link: string
  }[]
}

const Footer = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      socialLinks: [
        { name: "Instagram", icon: "fab fa-instagram", link: "https://www.instagram.com/" },
        { name: "LinkedIn", icon: "fab fa-linkedin", link: "https://www.linkedin.com/" },
        { name: "Facebook", icon: "fab fa-facebook", link: "https://www.facebook.com/" },
      ],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "socialLinks",
  })

  const onSubmit = (data: FormValues) => {
    // Log the form data
    console.log("Form data:", data)

    alert("Form submitted successfully!")
  }

  return (
    <div className=" p-4 md:p-6">
      <h2 className="text-xl font-medium mb-6">Footer Section</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Social Links */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium">Social Links</label>
            <button
              type="button"
              onClick={() => append({ name: "", icon: "", link: "" })}
              className="px-3 py-1 bg-amber-500 text-white rounded-md text-sm flex items-center"
            >
              <span className="mr-1">+</span> Add
            </button>
          </div>

          <div className=" rounded-md">
            <div className="space-y-4">
              {fields.map((field, index) => (
                <div key={field.id} className="grid grid-cols-1 gap-4 p-4 border border-gray-200 rounded-md bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        {...register(`socialLinks.${index}.name` as const, {
                          required: "Name is required",
                        })}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Instagram"
                      />
                      {errors.socialLinks?.[index]?.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.socialLinks[index]?.name?.message}</p>
                      )}
                    </div>

                    {/* Icon Field */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Icon<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        {...register(`socialLinks.${index}.icon` as const, {
                          required: "Icon is required",
                        })}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="fab fa-instagram"
                      />
                      {errors.socialLinks?.[index]?.icon && (
                        <p className="mt-1 text-sm text-red-600">{errors.socialLinks[index]?.icon?.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Link Field with Remove Button */}
                  <div className="flex items-start gap-2">
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1">
                        Link<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        {...register(`socialLinks.${index}.link` as const, {
                          required: "Link is required",
                        })}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="https://www.example.com/"
                      />
                      {errors.socialLinks?.[index]?.link && (
                        <p className="mt-1 text-sm text-red-600">{errors.socialLinks[index]?.link?.message}</p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="mt-7 p-2 bg-black text-white rounded-md"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-amber-500 text-white font-medium rounded-md hover:bg-amber-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Footer