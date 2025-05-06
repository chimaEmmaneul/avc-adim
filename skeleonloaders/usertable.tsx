export default function UserTableSkeleton() {
  // Create an array of 5 items to match the number of rows in the example
  const skeletonRows = Array(6).fill(null)

  return (
    <div className="w-full overflow-x-auto mt-4">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            {["", "USERNAME", "EMAIL", "PHONE", "STATUS", "ACTION"].map((header) => (
              <th key={header} className="text-left py-3 px-4 font-semibold text-sm text-black whitespace-nowrap">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {skeletonRows.map((_, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="">
                <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
              </td>
              <td className="py-4 px-4">
                <div className="h-4 bg-gray-200 rounded w-64 animate-pulse"></div>
              </td>
              <td className="py-4 px-4">
                <div className="h-4 bg-gray-200 rounded w-64 animate-pulse"></div>
              </td>
              <td className="py-4 px-4">
                <div className="h-4 bg-gray-200 rounded w-42 animate-pulse"></div>
              </td>
              <td className="py-4 px-4">
                <div className="h-6 bg-gray-200 rounded-full w-20 animate-pulse"></div>
              </td>
              <td className="py-4 px-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
