import React from 'react'
import CardPickupTable from '../components/card-pickup-table'
import { sampleLocations } from '../constants'
import AddNewLocation from '../components/add-new-location'

const CardPickupLocation = () => {
  return (
    <div>
      <AddNewLocation />
      <CardPickupTable locations={sampleLocations ?? []} />
    </div>
  )
}

export default CardPickupLocation