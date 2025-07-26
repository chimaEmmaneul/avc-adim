"use client"
import React, { useState } from 'react'
import CardPickupTable from '../components/card-pickup-table'
import AddNewLocation from '../components/add-new-location'
import { useGetAllPickupLocation } from '../api/mutations'
import CardPickUpLoader from '@/skeleonloaders/card-pickup'
import Pagination from '@/shared/Pagination'

const CardPickupLocation = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const { pickupLocations, isLoading, isError } = useGetAllPickupLocation({ page: currentPage })

  if (isLoading) return <CardPickUpLoader />
  return (
    <div>
      <AddNewLocation />
      <CardPickupTable locations={pickupLocations?.data ?? []} />
      <Pagination currentPage={pickupLocations?.meta.current_page as number} setCurrentPage={setCurrentPage} totalPages={pickupLocations?.meta.last_page as number} />
    </div>
  )
}

export default CardPickupLocation