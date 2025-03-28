"use client"
import React, { useState } from 'react'
import Search from '@/shared/Search/Search'
import { DECLINED_TRANSACTIONS, } from '../../constants/transactions'
import TransactionTable from '../../components/transaction-table'

const DeclinedTransactions = () => {

  const [search, setSearch] = useState("")
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='text-black font-semibold'>Declined Transaction</h1>
        <Search searchTerm={search} setSearchTerm={setSearch} />
      </div>
      <TransactionTable data={DECLINED_TRANSACTIONS} itemsPerPage={6} />
    </div>
  )
}

export default DeclinedTransactions