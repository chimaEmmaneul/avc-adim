"use client"
import { useState } from "react"
import RequestChangePassword from "./component/change-password"

export default function SettingsPage() {
  const [is2FAEnabled, setIs2FAEnabled] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="w-full ">
        <div className="bg-white border border-gray-200 rounded-md shadow-sm">
          <div className="p-6">
            <h2 className="text-xl border-b border-gray-200  pb-4  font-medium text-gray-800 mb-6">Security settings</h2>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-3 sm:space-y-0">
                <div className="w-full sm:w-1/4">
                  <p className="text-sm font-medium text-gray-700">2FA</p>
                </div>
                <div className="w-full sm:w-1/2">
                  <p className="text-sm text-gray-600">Enable / Disable 2FA</p>
                </div>
                <div className="w-full sm:w-1/4 flex sm:justify-end">
                  <button
                    onClick={() => setIs2FAEnabled(!is2FAEnabled)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${is2FAEnabled ? "bg-green-500" : "bg-gray-200"}`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${is2FAEnabled ? "translate-x-6" : "translate-x-1"}`}
                    />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-3 sm:space-y-0">
                <div className="w-full sm:w-1/4">
                  <p className="text-sm font-medium text-gray-700">Password</p>
                </div>
                <div className="w-full sm:w-1/2">
                  <p className="text-sm text-gray-600">••••••••••••••••</p>
                </div>
                <div className="w-full sm:w-1/4 flex sm:justify-end">
                  <button onClick={() => setIsOpen(true)} className="text-main  text-sm font-medium">Change Password</button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-4  flex justify-end">
            <button className="px-4 py-2 bg-main text-white font-medium rounded  focus:outline-none focus:ring-2  focus:ring-offset-2">
              Save
            </button>
          </div>
        </div>
      </div>

      <RequestChangePassword isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

