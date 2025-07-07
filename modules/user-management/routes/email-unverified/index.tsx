"use client"
import React, { useState } from 'react'
import UserTable from '../../components/users-table'
import Search from '@/shared/Search/Search'
import { useGetAllPendingUser } from '../../api/mutations'
import { useDebounce } from 'use-debounce'
import UserTableSkeleton from '@/skeleonloaders/usertable'

const EmailUnverified = () => {
  const [search, setSearch] = useState("")
  const [debouncedValue] = useDebounce(search, 1000);
  const { pendingUsers, isLoading } = useGetAllPendingUser({ search: debouncedValue });
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='text-black font-semibold'>Email Unverified</h1>
        <Search searchTerm={search} setSearchTerm={setSearch} />
      </div>

      {isLoading ? <UserTableSkeleton /> : <UserTable data={pendingUsers?.data.users.data ?? []} itemsPerPage={6} />}
    </div>
  )
}

export default EmailUnverified