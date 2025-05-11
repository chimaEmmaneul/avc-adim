"use client"
import React from 'react'
import { RequestData } from '../../constants'
import { StatusBadge } from '@/shared/statusbadge'
import { Button } from '@/components/ui/button'
import { useGetRequestDetails } from '../../api/mutations'
type CardRequestDetailsProps = {
  requestData: RequestData
  setStep: React.Dispatch<React.SetStateAction<string>>
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const CardRequestDetails = ({ requestData, setStep, setIsOpen }: CardRequestDetailsProps) => {
  const { requestDetails, isLoading } = useGetRequestDetails({ id: requestData.request_id })

  if (isLoading) return <div>Loading...</div>
  console.log(requestDetails, "requestData");
  return (
    <div className="space-y-4 py-2">
      <h1>Request Details</h1>
      <div className="grid grid-cols-2 gap-y-4 text-sm">
        <div className="text-muted-foreground">Request ID:</div>
        <div className="font-medium">{requestData.request_id}</div>

        <div className="text-muted-foreground">User:</div>
        <div className="font-medium">{`${requestData.first_name} ${requestData.last_name}`}</div>

        <div className="text-muted-foreground">Account Number:</div>
        <div className="font-medium">{requestData.account_number}</div>

        <div className="text-muted-foreground">Email:</div>
        <div className="font-medium">{requestData.email}</div>

        <div className="text-muted-foreground">Phone:</div>
        <div className="font-medium">{requestData.phone_number}</div>

        <div className="text-muted-foreground">Country:</div>
        <div className="font-medium">{requestData.country}</div>

        <div className="text-muted-foreground">Pickup Location:</div>
        <div className="font-medium">{requestData.pickup_location}</div>

        <div className="text-muted-foreground">Location Hour:</div>
        <div className="font-medium">{requestData.location_hour}</div>

        <div className="text-muted-foreground">Request Date:</div>
        <div className="font-medium">{requestData.request_date}</div>

        <div className="text-muted-foreground">Card Type:</div>
        <div className="font-medium">{requestData.card_type}</div>

        <div className="text-muted-foreground">Currency:</div>
        <div className="font-medium">{"USD"}</div>

        <div className="text-muted-foreground">Card fee paid:</div>
        <div className="font-medium">{requestData.card_fee}</div>

        <div className="text-muted-foreground">Status</div>
        <div>
          <StatusBadge status={requestData.status} />
        </div>
      </div>
      <div className="flex justify-between gap-2 pt-4">
        <Button
          variant="outline"
          className="border-main text-main hover:bg-amber-50 hover:text-amber-600"
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </Button>
        <div className="flex gap-2">
          <Button onClick={() => setStep("approve")} className="bg-main hover:bg-amber-600 text-white">Approve</Button>
          <Button onClick={() => setStep("reject")} className="bg-red-500 hover:bg-red-600 text-white">Reject</Button>
        </div>
      </div>
    </div>
  )
}

export default CardRequestDetails