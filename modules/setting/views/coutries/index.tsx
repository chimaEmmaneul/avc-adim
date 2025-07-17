"use client"

import { useState, useEffect } from "react"
import { CountryTableSkeleton } from "@/skeleonloaders/country-table"
import CountryListTable from "../../components/countrylist-table"
import Pagination from "@/shared/Pagination"
import { useGetCountry } from "../../api/mutation"
import Search from "@/shared/Search/Search"
import { useDebounce } from "use-debounce"


export default function CountriesView() {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [debouncedValue] = useDebounce(search, 800);
  const { countries, isLoading } = useGetCountry({ search: debouncedValue, page })

  return (
    <div className="w-full">
      <div className='flex items-center justify-end'>
        <Search searchTerm={search} setSearchTerm={setSearch} placeholder='Search by country name' />
      </div>
      {isLoading ? <CountryTableSkeleton /> : <CountryListTable countries={countries?.data ?? []} />}

      {(countries?.data.length ?? 0) > 0 &&
        <Pagination currentPage={1} setCurrentPage={setPage} totalPages={countries?.meta.last_page as number} />
      }
    </div>
  )
}
