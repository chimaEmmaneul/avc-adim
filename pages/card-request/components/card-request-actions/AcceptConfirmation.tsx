import React from 'react'
import { RequestData } from '../../constants'
import { useApproveRequest } from '../../api/mutations'
import { showerror, showsuccess } from '@/lib/toasts'


type AcceptConfirmationProps = {
  requestData: RequestData
  setStep: React.Dispatch<React.SetStateAction<string>>
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const AcceptConfirmation = ({ requestData, setStep, setIsOpen }: AcceptConfirmationProps) => {
  const { approveRequest, isPending } = useApproveRequest()
  const handleApprove = async () => {
    try {
      await approveRequest({ id: requestData.request_id })
      showsuccess("Request Approved Successfully")
    } catch (error) {
      showerror("something went wrong")
    }
  }

  return (
    <div className="">
      <div className="p-2">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-medium text-gray-800">Confirm Approval</h2>
        </div>

        <div className="border-t border-gray-200 -mx-6 mb-6"></div>

        <div className="space-y-4 mb-8">
          <p className="text-gray-700">
            Are you sure you want to approve card pick-up <span className="font-semibold">{requestData.request_id}</span>?
          </p>
          <p className="text-gray-700">
            This will notify the user that their card is ready for pick-up at the selected location
          </p>
        </div>

        <div className="flex gap-4">
          <button onClick={() => { setIsOpen(false); setStep("request") }} className="flex-1 px-4 py-2.5 border border-amber-500 text-amber-500 font-medium rounded-md hover:bg-amber-50 transition-colors">
            Cancel
          </button>
          <button onClick={handleApprove} className="flex-1 px-4 py-2.5 bg-amber-500 text-white font-medium rounded-md hover:bg-amber-600 transition-colors">
            Confirm Approval
          </button>
        </div>
      </div>
    </div>
  )
}

export default AcceptConfirmation