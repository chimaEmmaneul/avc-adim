"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import "react-quill/dist/quill.snow.css"
import { ChevronDown } from "lucide-react"
import { modules } from "../../constants/config"
import { useSendEmail } from "../../api/mutations"
import { showerror, showsuccess } from "@/lib/toasts"

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <div className="h-64 border border-gray-300 rounded-md animate-pulse bg-gray-50"></div>,
})

export default function EmailUsers() {
  const [subject, setSubject] = useState("")
  const [content, setContent] = useState("")
  const [selectedUser, setSelectedUser] = useState("")
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { sendEmail, isSendingEmail } = useSendEmail()
  const users = ["all", "active", "blocked", "unverified", "banned", "suspended"]


  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    try {
      const response = await sendEmail({
        type: selectedUser,
        subject,
        message: content,
      })
      showsuccess("Email sent successfully!")
    } catch (error) {
      console.log(error)
      showerror("something went wrong")
    }
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="user" className="block text-sm font-medium text-gray-700 mb-1">
              User<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <button
                type="button"
                className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {selectedUser || "Select Users"}
                <ChevronDown className="h-4 w-4 ml-2" />
              </button>

              {dropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-300 max-h-60 overflow-auto">
                  {users.map((user) => (
                    <div
                      key={user}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSelectedUser(user)
                        setDropdownOpen(false)
                      }}
                    >
                      {user}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Write Here..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-1">Details</label>
          <div className=" ">
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              modules={modules}
              placeholder="Type Here..."
              className=""
            />
          </div>
        </div>

        <div className="flex justify-center ">
          <button
            type="submit"
            className="px-10 py-2 bg-main text-white font-medium rounded-md  focus:outline-none transition-colors"
          >
            Send Email
          </button>
        </div>
      </form>
    </div>
  )
}

