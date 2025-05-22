import { UserStatus } from '@/@types/users'
import React from 'react'

const RenderStatusBadge = (status: string) => {
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
    case "approved":
      return " text-green-600 border-green-200"
    case "pending":
      return " text-amber-600 border-amber-200"
    default:
      return null
  }
}

export default RenderStatusBadge;

export const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const getStatusStyles = () => {
    switch (status) {
      case "approved":
        return " text-green-600 border border-green-500"
      case "active":
        return " text-green-600 border border-green-600"
      case "pending":
        return " text-amber-600 border border-amber-500"
      case "rejected":
        return " text-red-600 border border-red-500"
      case "suspended":
        return " text-red-600 border border-red-500"
      default:
        return " text-gray-600 border border-gray-500"
    }
  }

  return <span className={`px-3 py-1 rounded-full text-sm capitalize ${getStatusStyles()}`}>{status}</span>
}