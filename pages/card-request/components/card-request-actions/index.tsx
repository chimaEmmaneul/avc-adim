import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

import CardRequestDetails from './CardRequestDetails'
import AcceptConfirmation from './AcceptConfirmation'
import RejectConfirmation from './RejectConfirmation'
import { RequestData } from '../../constants'
import { RequestItem } from '../../@types'


type CardRequestDataProps = {
  requestData: RequestItem
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  refetch?: () => void

}
const CardRequestActions = ({ requestData, isOpen, setIsOpen, refetch }: CardRequestDataProps) => {
  const [steps, setStep] = useState("request")

  const CardRequestSteps: Record<string, JSX.Element> = {
    request: <CardRequestDetails requestData={requestData} setStep={setStep} setIsOpen={setIsOpen} />,
    approve: <AcceptConfirmation requestData={requestData} setStep={setStep} setIsOpen={setIsOpen} />,
    reject: <RejectConfirmation requestData={requestData} setStep={setStep} setIsOpen={setIsOpen} />
  }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-xl font-medium"></DialogTitle>
        </DialogHeader>
        {CardRequestSteps[steps]}
      </DialogContent>
    </Dialog>
  )
}

export default CardRequestActions