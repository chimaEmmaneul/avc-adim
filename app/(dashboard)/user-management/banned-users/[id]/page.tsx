import UserProfile from '@/shared/userProfile'
import React from 'react'

const UserDetailsPage = ({ params }: { params: { id: string } }) => {
  return (
    <UserProfile params={params} />
  )
}

export default UserDetailsPage