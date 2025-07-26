"use client"
import { showerror, showsuccess } from '@/lib/toasts'
import { modules } from '@/modules/user-management/constants/config'
import { Loader } from 'lucide-react'
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'
import "react-quill/dist/quill.snow.css"
import striptags from 'striptags';
import { useGetPrivacyPolicy, useUpdatePrivacyPolicy } from '../../api/mutatoins'


const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <div className="h-64 border border-gray-300 rounded-md animate-pulse bg-gray-50"></div>,
})

const ProvacyPolicyView = () => {
  const [content, setContent] = useState("")
  const { privayPolicy, isLoading } = useGetPrivacyPolicy()
  const { updatePrivcyPolicy, isPending } = useUpdatePrivacyPolicy()


  useEffect(() => {
    if (privayPolicy) {
      setContent(privayPolicy.data.content)
    }
  }, [])
  const handleSubmit = async () => {
    if (!content) {
      showerror("Please enter content")
      return
    }
    try {
      const updatedData = new FormData()
      updatedData.append("content", striptags(content))
      const res = await updatePrivcyPolicy(updatedData)
      showsuccess(res.message)
    } catch (error: any) {
      console.log(error)
      showerror(Array.isArray(error) ? error[0] : error.message)

    }
  }

  return (
    <div>
      <div className=" w-full mb-8">
        <label className="block text-lg font-medium text-gray-700 mb-2">Content</label>
        <div className=" ">
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            style={{ height: "25rem" }}
            modules={modules}
            placeholder="Type Here..."
            className=" py-4 overflow-auto"
          />
        </div>
      </div>
      <div className="flex justify-center ">
        <button
          onClick={handleSubmit}
          type="submit"
          className="px-10 py-2 bg-main text-white font-medium rounded-md  focus:outline-none transition-colors"
        >
          {isPending ? <Loader size={25} className="mx-auto animate-spin" /> : "Update Privacy policy"}
        </button>
      </div>
    </div>
  )
}

export default ProvacyPolicyView