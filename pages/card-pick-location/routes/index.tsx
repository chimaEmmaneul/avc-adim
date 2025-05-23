"use client"
import React from 'react'
import CardPickupTable from '../components/card-pickup-table'
import { sampleLocations } from '../constants'
import AddNewLocation from '../components/add-new-location'
import { useGetAllPickupLocation } from '../api/mutations'

const CardPickupLocation = () => {
  const { pickupLocations, isLoading, isError } = useGetAllPickupLocation()
  console.log(pickupLocations, "pic")
  return (
    <div>
      <AddNewLocation />
      <CardPickupTable locations={pickupLocations?.data ?? []} />
    </div>
  )
}

export default CardPickupLocation