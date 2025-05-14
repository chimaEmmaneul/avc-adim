"use client"
import type React from "react"
import CardRequestTable from "../components/card-request-table"
import { useGetAllCardRequest } from "../api/mutations"
import RequestTableSkeleton from "@/skeleonloaders/card-request-table"

export type RequestData = {
  request_id: string
  first_name: string
  last_name: string
  email: string
  country: string
  pickup_location: string
  request_date: string
  status: string
}


export const CardRequest = () => {
  const { allRequest, isLoading, allRequestRefetch } = useGetAllCardRequest()


  return (
    <>
      {isLoading ? <RequestTableSkeleton /> : <CardRequestTable requests={allRequest?.data ?? []} refetch={allRequestRefetch} />}
    </>
  )
}
