"use client"
import React, { useState } from 'react'

import Search from '@/shared/Search/Search'
import UserTable from '@/pages/user-management/components/users-table'
import { useDebounce } from 'use-debounce'
import { useGetAllBannedUsers } from '../../api/mutations'
import UserTableSkeleton from '@/skeleonloaders/usertable'

const BannedUsers = () => {
  const [search, setSearch] = useState("")
  const [debouncedValue] = useDebounce(search, 1000);
  const { bannedUsers, isLoading } = useGetAllBannedUsers({ search: debouncedValue });
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='text-black font-semibold'>Blocked Users</h1>
        <Search searchTerm={search} setSearchTerm={setSearch} />
      </div>
      {isLoading ? <UserTableSkeleton /> : <UserTable data={bannedUsers?.data.users.data ?? []} itemsPerPage={6} />}
    </div>
  )
}

export default BannedUsers