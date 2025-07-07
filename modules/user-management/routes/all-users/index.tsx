"use client"
import React, { useState } from 'react'

import Search from '@/shared/Search/Search'
// import UserTable from '@/pages/user-management/components/users-table'
import { useGetAllUsers } from '../../api/mutations'
import { useDebounce } from 'use-debounce'
import UserTableSkeleton from '@/skeleonloaders/usertable'
import UserTable from '../../components/users-table'

const Users = () => {
  const [search, setSearch] = useState("")
  const [debouncedValue] = useDebounce(search, 1000);
  const { allUsers, isLoading } = useGetAllUsers({ search: debouncedValue });
  console.log(allUsers, "admindata")
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='text-black font-semibold'>All users</h1>
        <Search searchTerm={search} setSearchTerm={setSearch} />
      </div>
      {isLoading ? <UserTableSkeleton /> : <UserTable data={allUsers?.data.users.data ?? []} itemsPerPage={6} />}
    </div>
  )
}

export default Users