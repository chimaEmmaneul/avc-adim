"use client"
import React, { useState } from 'react'
import Search from '@/shared/Search/Search'
import TransactionTableSkeleton from '@/skeleonloaders/transaction-table'
import TransactionTable from '../../components/transaction-table'
import { useDebounce } from 'use-debounce'
import { useGetAllConfirmedTransactions } from '../../api/mutations'
import Pagination from '@/shared/Pagination'

const ConfirmedTransaction = () => {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [debouncedValue] = useDebounce(search, 1000);
  const { confirmedTransactions, isLoading } = useGetAllConfirmedTransactions({ search: debouncedValue, page })
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='text-black font-semibold'>Confirmed Transaction</h1>
        <Search searchTerm={search} setSearchTerm={setSearch} />
      </div>

      {isLoading ? <TransactionTableSkeleton /> : <TransactionTable data={confirmedTransactions?.data ?? []} itemsPerPage={10} />}
      {(confirmedTransactions?.data?.length ?? 0) > 0 && (
        <Pagination currentPage={page} setCurrentPage={setPage} totalPages={confirmedTransactions?.meta.last_page as number} />
      )}
    </div>
  )
}

export default ConfirmedTransaction