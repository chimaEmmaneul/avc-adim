"use client"
import React, { useState } from 'react'
import UserTable from '../../components/users-table'
import Search from '@/shared/Search/Search'
import { useGetAllPendingUser } from '../../api/mutations'
import { useDebounce } from 'use-debounce'
import UserTableSkeleton from '@/skeleonloaders/usertable'
import Pagination from '@/shared/Pagination'

const EmailUnverified = () => {
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [debouncedValue] = useDebounce(search, 1000);
  const { pendingUsers, isLoading } = useGetAllPendingUser({ search: debouncedValue, page });
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='text-black font-semibold'>Email Unverified</h1>
        <Search searchTerm={search} setSearchTerm={setSearch} />
      </div>

      {isLoading ? <UserTableSkeleton /> : <UserTable data={pendingUsers?.data.users.data ?? []} itemsPerPage={10} />}

      {(pendingUsers?.data?.users?.data?.length ?? 0) > 0 && (
        <Pagination currentPage={page} setCurrentPage={setPage} totalPages={pendingUsers?.data.users.meta.last_page as number} />
      )}
    </div>
  )
}

export default EmailUnverified