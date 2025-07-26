import PointConversionDetailsView from '@/modules/setting/views/point-conversion/pointconversiondetails'
import React from 'react'

const PointConversionDetailsPage = ({ params }: { params: { id: string } }) => {
  return (
    <PointConversionDetailsView params={params} />
  )
}

export default PointConversionDetailsPage