"use client"
import React, { useState } from 'react'
import TransactionTable from '../../components/transaction-table'
import Search from '@/shared/Search/Search'
import { PENDING_TRANSACTIONS } from '../../constants/transactions'

const PendingTransactions = () => {

  const [search, setSearch] = useState("")
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='text-black font-semibold'>Pending Transaction</h1>
        <Search searchTerm={search} setSearchTerm={setSearch} />
      </div>
      <TransactionTable data={PENDING_TRANSACTIONS} itemsPerPage={8} />
    </div>
  )
}

export default PendingTransactions