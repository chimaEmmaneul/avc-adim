"use client"
import React, { useState } from 'react'
import Search from '@/shared/Search/Search'
import TransactionTableSkeleton from '@/skeleonloaders/transaction-table'
import TransactionTable from '../../components/transaction-table'
import { useDebounce } from 'use-debounce'
import { useGetAllConfirmedTransactions } from '../../api/mutations'

const ConfirmedTransaction = () => {

  const [search, setSearch] = useState("")
  const [debouncedValue] = useDebounce(search, 1000);
  const { confirmedTransactions, isLoading } = useGetAllConfirmedTransactions({ search: debouncedValue })
  console.log(confirmedTransactions) 
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='text-black font-semibold'>Confirmed Transaction</h1>
        <Search searchTerm={search} setSearchTerm={setSearch} />
      </div>

      {isLoading ? <TransactionTableSkeleton /> : <TransactionTable data={confirmedTransactions?.data ?? []} itemsPerPage={8} />}
    </div>
  )
}

export default ConfirmedTransaction