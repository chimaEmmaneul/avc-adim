import React from 'react'
import { useForm } from "react-hook-form"
import { RequestData } from '../../constants'
import { Check, ChevronDown, X } from 'lucide-react'
import { useRejectRequest } from '../../api/mutations'
import { showerror, showsuccess } from '@/lib/toasts'

export interface RejectionFormData {
  reason: string
  otherReason?: string
}

const rejectionReasons = [
  "Invalid user information",
  "Card not available at location",
  "Pickup location temporary closed",
  "Account verification issue",
  "Other reason",
]

type RejectConfirmationProps = {
  requestData: RequestData
  setStep: React.Dispatch<React.SetStateAction<string>>
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const RejectConfirmation = ({ requestData, setStep, setIsOpen }: RejectConfirmationProps) => {
  const { rejectRequest, isPending } = useRejectRequest()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RejectionFormData>({
    defaultValues: {
      reason: "",
      otherReason: "",
    },
  })

  const selectedReason = watch("reason")
  const showOtherReasonField = selectedReason === "Other reason"

  const onSubmit = async (data: RejectionFormData) => {
    try {
      await rejectRequest({ id: requestData.request_id, data })
      showsuccess("Request rejected successfully")
    } catch (error) {
      showerror("something went wrong")
    }
  }

  return (
    <div>
      <h2 className="text-xl font-medium mb-2">Confirm Rejection</h2>

      <p className="mb-6 text-gray-700">
        Are you sure you want to reject card pick-up <strong>{requestData.request_id}</strong>?
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label htmlFor="reason" className="block mb-2 text-sm font-medium text-gray-700">
            Rejection Reason:
          </label>

          <div className="relative">
            <select
              id="reason"
              {...register("reason", { required: "Please select a rejection reason" })}
              className={`w-full p-2.5 bg-white border ${errors.reason ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none pr-8`}
            >
              <option value="" disabled>
                Select a reason
              </option>
              {rejectionReasons.map((reason) => (
                <option key={reason} value={reason}>
                  {reason}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </div>
          </div>
          {errors.reason && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              {/* <E className="w-4 h-4 mr-1" /> */}
              {errors.reason.message}
            </p>
          )}
        </div>

        {showOtherReasonField && (
          <div className="mb-6">
            <label htmlFor="otherReason" className="block mb-2 text-sm font-medium text-gray-700">
              Please specify:
            </label>
            <textarea
              id="otherReason"
              {...register("otherReason", {
                required: showOtherReasonField ? "Please provide details for other reason" : false,
              })}
              rows={3}
              className={`w-full p-2.5 bg-white border ${errors.otherReason ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500`}
              placeholder="Please provide details..."
            />
            {errors.otherReason && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                {/* < className="w-4 h-4 mr-1" /> */}
                {errors.otherReason.message}
              </p>
            )}
          </div>
        )}

        <div className="flex gap-4 mt-8">
          <button
            type="button"
            onClick={() => { setIsOpen(false); setStep("request") }}
            className="flex-1 px-4 py-2 border border-amber-500 text-amber-500 rounded-md hover:bg-amber-50 transition-colors flex items-center justify-center"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-400 transition-colors flex items-center justify-center"
          >
            Confirm rejection
          </button>
        </div>
      </form>
    </div>)
}

export default RejectConfirmation