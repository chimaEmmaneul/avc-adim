"use client"
import React, { useState } from 'react'

import Search from '@/shared/Search/Search'
import { bannedUserData } from '@/constant/Users'
import UserTable from '@/pages/user-management/components/users-table'

const BannedUsers = () => {
  const [search, setSearch] = useState("")
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='text-black font-semibold'>Email Unverified</h1>
        <Search searchTerm={search} setSearchTerm={setSearch} />
      </div>
      <UserTable data={bannedUserData} itemsPerPage={6} />
    </div>
  )
}

export default BannedUsers