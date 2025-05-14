"use client"
import React, { useState } from 'react'
import Search from '@/shared/Search/Search'
import { DECLINED_TRANSACTIONS, } from '../../constants/transactions'
import TransactionTable from '../../components/transaction-table'
import { useGetAllDeclinedTransactions } from '../../api/mutations'
import { useDebounce } from 'use-debounce'
import TransactionTableSkeleton from '@/skeleonloaders/transaction-table'

const DeclinedTransactions = () => {

  const [search, setSearch] = useState("")
  const [debouncedValue] = useDebounce(search, 1000);
  const { declinedTransaction, isLoading } = useGetAllDeclinedTransactions({ search: debouncedValue })
  console.log(declinedTransaction) 
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='text-black font-semibold'>Declined Transaction</h1>
        <Search searchTerm={search} setSearchTerm={setSearch} />
      </div>
      {isLoading ? <TransactionTableSkeleton /> : <TransactionTable data={DECLINED_TRANSACTIONS} itemsPerPage={8} />}
    </div>
  )
}

export default DeclinedTransactions