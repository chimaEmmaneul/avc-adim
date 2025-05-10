import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

import CardRequestDetails from './CardRequestDetails'
import AcceptConfirmation from './AcceptConfirmation'
import RejectConfirmation from './RejectConfirmation'
import { RequestData } from '../../constants'


type CardRequestDataProps = {
  requestData: RequestData
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>

}
const CardRequestActions = ({ requestData, isOpen, setIsOpen }: CardRequestDataProps) => {
  const [steps, setStep] = useState("request")

  const CardRequestSteps: Record<string, JSX.Element> = {
    request: <CardRequestDetails requestData={requestData} setStep={setStep} setIsOpen={setIsOpen} />,
    accept: <AcceptConfirmation />,
    reject: <RejectConfirmation />
  }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-xl font-medium">Request Details</DialogTitle>
          {/* <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={() => setIsOpen(false)}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button> */}
        </DialogHeader>
        {CardRequestSteps[steps]}
      </DialogContent>
    </Dialog>
  )
}

export default CardRequestActions