"use client"

import { UserIcon } from "lucide-react"
import { ActionIcon } from "@/icon/icon"
import { StatusBadge } from "@/shared/statusbadge"
import { usePathname, useRouter } from "next/navigation"
import { User } from "../../@types"
import EmptyState from "@/components/common/emptystate"
import Image from "next/image"

interface UserTableProps {
  data: User[]
  itemsPerPage: number
  onDelete?: (userId: number) => void
}

const UserTable = ({ data }: UserTableProps) => {
  const router = useRouter()
  const pathname = usePathname()


  return (
    <div className="w-full mt-4">
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              {["", "USERNAME", "EMAIL", "PHONE", "STATUS", "ACTION"].map((header) => (
                <th key={header} className="text-center py-3 px-4 font-semibold text-sm text-black whitespace-nowrap">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>

            {data.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center py-4">
                  <EmptyState />
                </td>
              </tr>
            )}
            {data.map((user) => (
              <tr key={user.id} className="border-b border[#DEE2E6] text-[#6E768E] font-medium text-sm">
                <td> 

                  {user.profile_photo ?
                    <div className="w-10 h-10 rounded-[50%] bg-gray-200  flex items-center justify-center">
                      <Image src={user.profile_photo} alt="user image" width={50} height={50} className="flex self-center flex-shrink-0 rounded-[50%] " />
                    </div>
                    :
                    <div className="w-10 h-10 rounded-[50%] bg-gray-200  flex items-center justify-center">
                      <UserIcon size={16} className="text-gray-600 mx-auto" />
                    </div>
                  }
                </td>
                <td className="py-4 px-4 text-center  whitespace-nowrap">
                  {`${user?.first_name} ${user?.last_name}` || "N/A"}
                </td>
                <td className="py-4 px-4 whitespace-nowrap text-center">{user.email || "N/A"}</td>
                <td className="py-4 px-4 whitespace-nowrap text-center">{user.phone || "N/A"}</td>
                <td className="py-4 px-4 whitespace-nowrap text-center"><StatusBadge status={user.status?.toLowerCase()} /></td>
                <td className="py-4 px-4 whitespace-nowrap text-center">
                  <button
                    onClick={() => router.push(`${pathname}/${user.id}`)}
                    className="w-8 h-8 bg-main rounded-[4px] flex items-center mx-auto justify-center text-white"
                  >
                    <ActionIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserTable;