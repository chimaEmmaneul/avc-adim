"use client"
import React, { useState } from 'react'

import { userData } from '@/constant/Users'
import Search from '@/shared/Search/Search'
import UserTable from '@/pages/user-management/components/users-table'

const Users = () => {
  const [search, setSearch] = useState("")
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='text-black font-semibold'>All users</h1>
        <Search searchTerm={search} setSearchTerm={setSearch} />
      </div>
      <UserTable data={userData} itemsPerPage={6} />
    </div>
  )
}

export default Users