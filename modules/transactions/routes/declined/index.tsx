"use client"
import React, { useState } from 'react'
import Search from '@/shared/Search/Search'
import TransactionTable from '../../components/transaction-table'
import { useGetAllDeclinedTransactions } from '../../api/mutations'
import { useDebounce } from 'use-debounce'
import TransactionTableSkeleton from '@/skeleonloaders/transaction-table'
import Pagination from '@/shared/Pagination'

const DeclinedTransactions = () => {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [debouncedValue] = useDebounce(search, 1000);
  const { declinedTransaction, isLoading } = useGetAllDeclinedTransactions({ search: debouncedValue, page })
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='text-black font-semibold'>Declined Transaction</h1>
        <Search searchTerm={search} setSearchTerm={setSearch} />
      </div>
      {isLoading ? <TransactionTableSkeleton /> : <TransactionTable data={declinedTransaction?.data ?? []} itemsPerPage={10} />}
      {(declinedTransaction?.data?.length ?? 0) > 0 && (
        <Pagination currentPage={page} setCurrentPage={setPage} totalPages={declinedTransaction?.meta.last_page as number} />
      )}
    </div>
  )
}

export default DeclinedTransactions