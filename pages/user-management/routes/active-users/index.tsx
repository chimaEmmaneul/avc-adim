"use client"
import React, { useState } from 'react'
import Search from '@/shared/Search/Search'
import { activeUserData } from '@/constant/Users'
import UserTable from '@/pages/user-management/components/users-table'
import { useGetAllActiveUsers } from '../../api/mutations'
import { useDebounce } from 'use-debounce';
import UserTableSkeleton from '@/skeleonloaders/usertable'

const ActiveUsers = () => {
  const [search, setSearch] = useState("")
  const [debouncedValue] = useDebounce(search, 1000);
  const { activeUsers, isLoading } = useGetAllActiveUsers({ search: debouncedValue });
  console.log(activeUsers, "admindata")

  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='text-black font-semibold'>Active users</h1>
        <Search searchTerm={search} setSearchTerm={setSearch} />
      </div>
      {isLoading ? <UserTableSkeleton /> : <UserTable data={activeUsers?.data.users ?? []} itemsPerPage={6} />}

    </div>
  )
}

export default ActiveUsers