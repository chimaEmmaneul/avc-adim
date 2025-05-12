"use client"
import type React from "react"
import CardRequestTable from "../components/card-request-table"
import { useGetAllCardRequest } from "../api/mutations"

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
  const { allRequest, isLoading } = useGetAllCardRequest()
  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }
  return (
    <>
      <CardRequestTable requests={allRequest?.data ?? []} />
    </>
  )
}
