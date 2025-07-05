"use client"
import React, { useState } from 'react'
import Search from '@/shared/Search/Search'
import { useDebounce } from 'use-debounce'
import TransactionTable from '../../components/transaction-table'
import { PENDING_TRANSACTIONS } from '../../constants/transactions'
import { useGetAllPendingTransactions } from '../../api/mutations'
import TransactionTableSkeleton from '@/skeleonloaders/transaction-table'

const PendingTransactions = () => {

  const [search, setSearch] = useState("")
  const [debouncedValue] = useDebounce(search, 1000);
  const { pendingTransaction, isLoading } = useGetAllPendingTransactions({ search: debouncedValue })
  console.log(pendingTransaction) 
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='text-black font-semibold'>Pending Transaction</h1>
        <Search searchTerm={search} setSearchTerm={setSearch} />
      </div>
      {isLoading ? <TransactionTableSkeleton /> : <TransactionTable data={pendingTransaction?.data ?? []} itemsPerPage={10} />}
    </div>
  )
}

export default PendingTransactions