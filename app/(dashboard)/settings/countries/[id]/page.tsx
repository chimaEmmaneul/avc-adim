import CountriesDetailsView from '@/modules/setting/views/coutries/countrydetails'
import React from 'react'

const CountryDetailsPage = ({ params }: { params: { id: string } }) => {
  return (
    <CountriesDetailsView params={params} />
  )
}

export default CountryDetailsPage