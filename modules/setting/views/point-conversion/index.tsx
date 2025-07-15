"use client"

import { useState, useEffect } from "react"
import { Edit, Pen, Trash2 } from "lucide-react"
import PointConversionTable from "../../components/point-conversion-table"
import Pagination from "@/shared/Pagination"
import { PointConversionTableSkeleton } from "@/skeleonloaders/point-conversion-table"

interface Currency {
  name: string
  code: string
  flag: string
  exchangeRate: string
}

const currencyData: Currency[] = [
  {
    name: "United States dollar",
    code: "USD",
    flag: "/placeholder.svg?height=32&width=32",
    exchangeRate: "10 PTS = 1.0000 USD",
  },
  {
    name: "Guatemalan quetzal",
    code: "GTQ",
    flag: "/placeholder.svg?height=32&width=32",
    exchangeRate: "10 PTS = 7.7700 GTQ",
  },
  {
    name: "Euro",
    code: "EUR",
    flag: "/placeholder.svg?height=32&width=32",
    exchangeRate: "10 PTS = 0.9300 EUR",
  },
  {
    name: "Euro",
    code: "EUR",
    flag: "/placeholder.svg?height=32&width=32",
    exchangeRate: "10 PTS = 0.9300 EUR",
  },
  {
    name: "Euro",
    code: "EUR",
    flag: "/placeholder.svg?height=32&width=32",
    exchangeRate: "10 PTS = 0.9300 EUR",
  },
  {
    name: "Euro",
    code: "EUR",
    flag: "/placeholder.svg?height=32&width=32",
    exchangeRate: "10 PTS = 0.9300 EUR",
  },
  {
    name: "Philippine peso",
    code: "PHP",
    flag: "/placeholder.svg?height=32&width=32",
    exchangeRate: "10 PTS = 57.2300 PHP",
  },
  {
    name: "West African CFA franc",
    code: "XOF",
    flag: "/placeholder.svg?height=32&width=32",
    exchangeRate: "10 PTS = 608.7800 XOF",
  },
  {
    name: "Brazilian real",
    code: "BRL",
    flag: "/placeholder.svg?height=32&width=32",
    exchangeRate: "10 PTS = 5.0800 BRL",
  },
  {
    name: "West African CFA franc",
    code: "XOF",
    flag: "/placeholder.svg?height=32&width=32",
    exchangeRate: "10 PTS = 608.6950 XOF",
  },
  {
    name: "Cambodian riel",
    code: "KHR",
    flag: "/placeholder.svg?height=32&width=32",
    exchangeRate: "10 PTS = 4066.8600 KHR",
  },
  {
    name: "Central African CFA franc",
    code: "XAF",
    flag: "/placeholder.svg?height=32&width=32",
    exchangeRate: "10 PTS = 608.7800 XAF",
  },
]



export default function PointConversionView() {
  const [loading, setLoading] = useState(true)
  const [currencies, setCurrencies] = useState<Currency[]>([])

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setCurrencies(currencyData)
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])


  if (loading) {
    return <PointConversionTableSkeleton />
  }

  return (
    <div className="w-full">
      <PointConversionTable currencies={currencyData} />
      <Pagination currentPage={1} setCurrentPage={() => { }} totalPages={1} />
    </div>
  )
}
