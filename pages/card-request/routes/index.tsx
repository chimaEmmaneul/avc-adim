"use client"
import type React from "react"
import CardRequestTable from "../components/card-request-table"
import { useGetAllCardRequest } from "../api/mutations"
import RequestTableSkeleton from "@/skeleonloaders/card-request-table"
import { useState } from "react"
import TableFilters from "../components/card-request-table-filter"

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
  const [country, setCountry] = useState<string>("All")
  const [status, setStatus] = useState<string>("All")
  const [fromDate, setFromDate] = useState<string>("")
  const [toDate, setToDate] = useState<string>("")
  const { allRequest, isLoading, allRequestRefetch } = useGetAllCardRequest({ country, status, start_date: fromDate, end_date: toDate })


  return (
    <>
      <TableFilters country={country} setCountry={setCountry} status={status} setStatus={setStatus} fromDate={fromDate} setFromDate={setFromDate} toDate={toDate} setToDate={setToDate} />
      {isLoading ? <RequestTableSkeleton /> : <CardRequestTable requests={allRequest?.data ?? []} refetch={allRequestRefetch} />}
    </>
  )
}
