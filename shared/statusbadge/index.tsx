import { UserStatus } from '@/@types/users'
import React from 'react'

const RenderStatusBadge = (status: UserStatus) => {
  switch (status) {
    case UserStatus.ACTIVE:
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-[#28C76F] text-[#28C76F]">
          ACTIVE
        </span>
      )
    case UserStatus.BANNED:
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-[#FF0004] text-[#FF0004]">
          BANNED
        </span>
      )
    case UserStatus.EMAIL_UNVERIFIED:
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          EMAIL UNVERIFIED
        </span>
      )
    default:
      return null
  }
}

export default RenderStatusBadge;