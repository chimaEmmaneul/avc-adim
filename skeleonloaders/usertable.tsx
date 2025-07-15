export default function UserTableSkeleton() {
  const skeletonRows = Array(8).fill(null)

  return (
    <div className="w-full overflow-x-auto mt-4">
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
          {skeletonRows.map((_, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className=" px-4 py-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
              </td>
              <td className="py-4 px-10 text-center">
                <div className="h-4 bg-gray-200 rounded w-64 animate-pulse"></div>
              </td>
              <td className="py-4 px-10 text-center">
                <div className="h-4 bg-gray-200 rounded w-64 animate-pulse"></div>
              </td>
              <td className="py-4 px-10 text-center">
                <div className="h-4 bg-gray-200 rounded w-44 animate-pulse"></div>
              </td>
              <td className="py-4 px-10 text-center">
                <div className="h-6  bg-gray-200 rounded-full w-44 animate-pulse"></div>
              </td>
              <td className="py-4 px-10 text-center">
                <div className="w-10 h-10 text-center bg-gray-200 rounded-full animate-pulse"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
