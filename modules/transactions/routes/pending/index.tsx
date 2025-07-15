"use client"
import React, { useState } from 'react'
import Search from '@/shared/Search/Search'
import { useDebounce } from 'use-debounce'
import TransactionTable from '../../components/transaction-table'
import { useGetAllPendingTransactions } from '../../api/mutations'
import TransactionTableSkeleton from '@/skeleonloaders/transaction-table'
import Pagination from '@/shared/Pagination'

const PendingTransactions = () => {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [debouncedValue] = useDebounce(search, 1000);
  const { pendingTransaction, isLoading } = useGetAllPendingTransactions({ search: debouncedValue, page })
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='text-black font-semibold'>Pending Transaction</h1>
        <Search searchTerm={search} setSearchTerm={setSearch} />
      </div>
      {isLoading ? <TransactionTableSkeleton /> : <TransactionTable data={pendingTransaction?.data ?? []} itemsPerPage={10} />}
      {(pendingTransaction?.data?.length ?? 0) > 0 && (
        <Pagination currentPage={page} setCurrentPage={setPage} totalPages={pendingTransaction?.meta.last_page as number} />
      )}
    </div>
  )
}

export default PendingTransactions