import React from 'react'
import { useApproveRequest } from '../../api/mutations'
import { showerror, showsuccess } from '@/lib/toasts'
import { RequestItem } from '../../@types'
import { Loader } from 'lucide-react'
import { AxiosError } from 'axios'


type AcceptConfirmationProps = {
  requestData: RequestItem
  setStep: React.Dispatch<React.SetStateAction<string>>
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const AcceptConfirmation = ({ requestData, setStep, setIsOpen }: AcceptConfirmationProps) => {
  const { approveRequest, isPending } = useApproveRequest()
  const handleApprove = async () => {
    try {
      const response = await approveRequest({ id: requestData.id })
      showsuccess(response.message)
      setIsOpen(false)
      setStep("request")
    } catch (error: AxiosError | any) {
      showerror(error.message)
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
            Are you sure you want to approve card pick-up of <span className="font-semibold">{requestData.user.name}</span>?
          </p>
          <p className="text-gray-700">
            This will notify the user that their card is ready for pick-up at the selected location
          </p>
        </div>

        <div className="flex gap-4">
          <button onClick={() => { setIsOpen(false); setStep("request") }} className="flex-1 px-4 py-2.5 border border-main text-amber-500 font-medium rounded-md hover:bg-amber-50 transition-colors">
            Cancel
          </button>
          <button onClick={handleApprove} className="flex-1 px-4 py-2.5 bg-main text-white font-medium rounded-md hover:bg-amber-600 transition-colors">
            {isPending ? <Loader className='mx-auto animate-spin' /> : "Confirm Approval"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default AcceptConfirmation