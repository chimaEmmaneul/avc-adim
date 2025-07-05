"use client"
import React from 'react'
import { RequestData } from '../../constants'
import { StatusBadge } from '@/shared/statusbadge'
import { Button } from '@/components/ui/button'
import { useGetRequestDetails } from '../../api/mutations'
import { RequestItem } from '../../@types'
import RequestDetailsSkeleton from '@/skeleonloaders/request-details'
type CardRequestDetailsProps = {
  requestData: RequestItem
  setStep: React.Dispatch<React.SetStateAction<string>>
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const CardRequestDetails = ({ requestData, setStep, setIsOpen }: CardRequestDetailsProps) => {
  const { requestDetails, isLoading } = useGetRequestDetails({ id: requestData.id })
  if (isLoading) return <RequestDetailsSkeleton />

  console.log(requestDetails.data.status, "details")
  return (
    <div className="space-y-4 py-2">
      <h1>Request Details</h1>
      <div className="grid grid-cols-2 gap-y-4 text-sm">
        <div className="text-muted-foreground">Request ID:</div>
        <div className="font-medium">{requestData.id}</div>

        <div className="text-muted-foreground">User:</div>
        <div className="font-medium">{`${requestData.user.name}`}</div>

        <div className="text-muted-foreground">Account Number:</div>
        <div className="font-medium">{requestData.user.account_number}</div>

        <div className="text-muted-foreground">Email:</div>
        <div className="font-medium">{requestData.user.email}</div>

        <div className="text-muted-foreground">Phone:</div>
        <div className="font-medium">{requestData.user.phone}</div>

        <div className="text-muted-foreground">Country:</div>
        <div className="font-medium">{requestData.country}</div>

        <div className="text-muted-foreground">Pickup Location:</div>
        <div className="font-medium">{requestData.location.address}</div>

        <div className="text-muted-foreground">Location Hour:</div>
        <div className="font-medium">{requestData.location.service_hour}</div>

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

        {requestDetails?.data?.status == "pending" &&
        <div className="flex gap-2">
          <Button onClick={() => setStep("approve")} className="bg-main hover:bg-amber-600 text-white">Approve</Button>
          <Button onClick={() => setStep("reject")} className="bg-red-500 hover:bg-red-600 text-white">Reject</Button>
        </div>
        }
      </div>
    </div>
  )
}

export default CardRequestDetails