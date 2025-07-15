"use client"
import React, { useState } from 'react'

import Search from '@/shared/Search/Search'
import { useGetAllUsers } from '../../api/mutations'
import { useDebounce } from 'use-debounce'
import UserTableSkeleton from '@/skeleonloaders/usertable'
import UserTable from '../../components/users-table'
import Pagination from '@/shared/Pagination'

const Users = () => {
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [debouncedValue] = useDebounce(search, 800);
  const { allUsers, isLoading } = useGetAllUsers({ search: debouncedValue, page });
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='text-black font-semibold'>All users</h1>
        <Search searchTerm={search} setSearchTerm={setSearch} />
      </div>
      {isLoading ? <UserTableSkeleton /> : <UserTable data={allUsers?.data.users.data ?? []} itemsPerPage={allUsers?.data.users.meta.per_page as number} />}

      {(allUsers?.data?.users?.data?.length ?? 0) > 0 && (
        <Pagination currentPage={page} setCurrentPage={setPage} totalPages={allUsers?.data.users.meta.last_page as number} />
      )}
    </div>
  )
}

export default Users