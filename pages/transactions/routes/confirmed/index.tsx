"use client"
import React, { useState } from 'react'
import Search from '@/shared/Search/Search'
import { cONFIRMED_TRANSACTIONS } from '../../constants/transactions'
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

      {isLoading ? "loading..." : <TransactionTable data={cONFIRMED_TRANSACTIONS} itemsPerPage={8} />}
    </div>
  )
}

export default ConfirmedTransaction