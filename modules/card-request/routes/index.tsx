"use client"
import type React from "react"
import CardRequestTable from "../components/card-request-table"
import { useGetAllCardRequest } from "../api/mutations"
import RequestTableSkeleton from "@/skeleonloaders/card-request-table"
import { useState } from "react"
import TableFilters from "../components/card-request-table-filter"


export const CardRequest = () => {
  const [country, setCountry] = useState<string>("")
  const [status, setStatus] = useState<string>("all")
  const [fromDate, setFromDate] = useState<string>("")
  const [toDate, setToDate] = useState<string>("")
  const { allRequest, isLoading, allRequestRefetch } = useGetAllCardRequest({
    country,
    status,
    start_date: fromDate,
    end_date: toDate
  })


  return (
    <div className="">
      <TableFilters
        country={country}
        setCountry={setCountry}
        status={status}
        setStatus={setStatus}
        fromDate={fromDate}
        setFromDate={setFromDate}
        toDate={toDate}
        setToDate={setToDate}
      />
      {isLoading ?
        <RequestTableSkeleton /> :
        <CardRequestTable requests={allRequest?.data ?? []} refetch={allRequestRefetch} itemsPerPage={10} />}
    </div>
  )
}
