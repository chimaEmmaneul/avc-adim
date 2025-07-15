"use client"
import React, { useState } from 'react'
import TransactionTable from '../../components/transaction-table'
import Search from '@/shared/Search/Search'
import { useDebounce } from 'use-debounce'
import { useGetAllTransactions } from '../../api/mutations'
import TransactionTableSkeleton from '@/skeleonloaders/transaction-table'
import Pagination from '@/shared/Pagination'

const AllTransactions = () => {

  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [debouncedValue] = useDebounce(search, 1000);
  const { allTransactions, isLoading } = useGetAllTransactions({ search: debouncedValue, page });

  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='text-black font-semibold'>All Transaction</h1>
        <Search searchTerm={search} setSearchTerm={setSearch} />
      </div>

      {isLoading ? <TransactionTableSkeleton /> : <TransactionTable data={allTransactions?.data ?? []} itemsPerPage={10} />}
      {(allTransactions?.data?.length ?? 0) > 0 && (
        <Pagination currentPage={page} setCurrentPage={setPage} totalPages={allTransactions?.meta.last_page as number} />
      )}
    </div>
  )
}

export default AllTransactions