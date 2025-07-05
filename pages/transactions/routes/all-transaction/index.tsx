"use client"
import React, { useState } from 'react'
import TransactionTable from '../../components/transaction-table'
import Search from '@/shared/Search/Search'
import { TRANSACTIONS } from '../../constants/transactions'
import { useDebounce } from 'use-debounce'
import { useGetAllTransactions } from '../../api/mutations'
import TransactionTableSkeleton from '@/skeleonloaders/transaction-table'

const AllTransactions = () => {

  const [search, setSearch] = useState("")
  const [debouncedValue] = useDebounce(search, 1000);
  const { allTransactions, isLoading } = useGetAllTransactions({ search: debouncedValue })
  console.log(allTransactions)

  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='text-black font-semibold'>All Transaction</h1>
        <Search searchTerm={search} setSearchTerm={setSearch} />
      </div>

      {isLoading ? <TransactionTableSkeleton /> : <TransactionTable data={allTransactions?.data ?? []} itemsPerPage={10} />}
    </div>
  )
}

export default AllTransactions