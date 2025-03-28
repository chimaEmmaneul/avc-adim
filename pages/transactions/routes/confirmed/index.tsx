"use client"
import React, { useState } from 'react'
import Search from '@/shared/Search/Search'
import { cONFIRMED_TRANSACTIONS } from '../../constants/transactions'
import TransactionTable from '../../components/transaction-table'

const ConfirmedTransaction = () => {

  const [search, setSearch] = useState("")
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='text-black font-semibold'>Confirmed Transaction</h1>
        <Search searchTerm={search} setSearchTerm={setSearch} />
      </div>
      <TransactionTable data={cONFIRMED_TRANSACTIONS} itemsPerPage={8} />
    </div>
  )
}

export default ConfirmedTransaction