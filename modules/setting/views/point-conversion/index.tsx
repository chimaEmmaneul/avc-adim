"use client"

import { useState } from "react"
import PointConversionTable from "../../components/point-conversion-table"
import Pagination from "@/shared/Pagination"
import { PointConversionTableSkeleton } from "@/skeleonloaders/point-conversion-table"
import { useGetConversion } from "../../api/mutation"



export default function PointConversionView() {
  const [page, setPage] = useState(1)
  const { conversion, isLoading } = useGetConversion({ page })

  return (
    <div className="w-full">

      {isLoading ? <PointConversionTableSkeleton /> : <PointConversionTable currencies={conversion?.data ?? []} />}

      {(conversion?.data.length ?? 0) > 0 &&
        <Pagination currentPage={1} setCurrentPage={setPage} totalPages={conversion?.meta.last_page as number} />
      }
    </div>
  )
}
