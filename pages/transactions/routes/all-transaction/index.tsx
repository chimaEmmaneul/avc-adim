"use client"
import React, { useState } from 'react'
import TransactionTable from '../../components/transaction-table'
import Search from '@/shared/Search/Search'
import { TRANSACTIONS } from '../../constants/transactions'

const AllTransactions = () => {

  const [search, setSearch] = useState("")
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='text-black font-semibold'>All Transaction</h1>
        <Search searchTerm={search} setSearchTerm={setSearch} />
      </div>
      <TransactionTable data={TRANSACTIONS} itemsPerPage={6} />
    </div>
  )
}

export default AllTransactions