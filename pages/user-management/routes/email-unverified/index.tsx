"use client"
import React, { useState } from 'react'
import UserTable from '../../components/users-table'
import { unverifiedUserData, } from '@/constant/Users'
import Search from '@/shared/Search/Search'

const EmailUnverified = () => {
  const [search, setSearch] = useState("")
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='text-black font-semibold'>Email Unverified</h1>
        <Search searchTerm={search} setSearchTerm={setSearch} />
      </div>
      <UserTable data={unverifiedUserData} itemsPerPage={6} />
    </div>
  )
}

export default EmailUnverified