"use client"

import { useState, useEffect } from "react"
import { CountryTableSkeleton } from "@/skeleonloaders/country-table"
import CountryListTable from "../../components/countrylist-table"
import Pagination from "@/shared/Pagination"

interface Country {
  name: string
  currencyCode: string
  continent: string
  flagUrl: string
}

const countries: Country[] = [
  {
    name: "United States",
    currencyCode: "USD",
    continent: "North America",
    flagUrl: "/placeholder.svg?height=32&width=32",
  },
  {
    name: "Guatemala",
    currencyCode: "GTQ",
    continent: "North America",
    flagUrl: "/placeholder.svg?height=32&width=32",
  },
  { name: "Germany", currencyCode: "EUR", continent: "Europe", flagUrl: "/placeholder.svg?height=32&width=32" },
  { name: "France", currencyCode: "EUR", continent: "Europe", flagUrl: "/placeholder.svg?height=32&width=32" },
  { name: "Belgium", currencyCode: "EUR", continent: "Europe", flagUrl: "/placeholder.svg?height=32&width=32" },
  { name: "Austria", currencyCode: "EUR", continent: "Europe", flagUrl: "/placeholder.svg?height=32&width=32" },
  { name: "Philippines", currencyCode: "PHP", continent: "Asia", flagUrl: "/placeholder.svg?height=32&width=32" },
  { name: "Benin", currencyCode: "XOF", continent: "Africa", flagUrl: "/placeholder.svg?height=32&width=32" },
  { name: "Brazil", currencyCode: "BRL", continent: "South America", flagUrl: "/placeholder.svg?height=32&width=32" },
  { name: "Burkina Faso", currencyCode: "XOF", continent: "Africa", flagUrl: "/placeholder.svg?height=32&width=32" },
  { name: "Cambodia", currencyCode: "KHR", continent: "Asia", flagUrl: "/placeholder.svg?height=32&width=32" },
  { name: "Cameroon", currencyCode: "XAF", continent: "Africa", flagUrl: "/placeholder.svg?height=32&width=32" },
  { name: "Colombia", currencyCode: "COP", continent: "South America", flagUrl: "/placeholder.svg?height=32&width=32" },
]



export default function CountriesView() {
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <CountryTableSkeleton />
  }

  return (
    <div className="w-full">
      <CountryListTable countries={countries} />
      <Pagination currentPage={1} setCurrentPage={() => { }} totalPages={1} />
    </div>
  )
}
