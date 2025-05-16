const RequestTableSkeleton = () => {
  const skeletonRows = Array(8).fill(null)

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left text-gray-500 text-sm uppercase">
            {["Request ID", "User", "Country", "Pickup Location", "Request Date", "Status", "Action"].map((header) => (
              <th key={header} className="py-4 px-6 font-medium whitespace-nowrap">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {skeletonRows.map((_, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="py-4 px-6">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
              </td>
              <td className="py-4 px-6">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-32 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded animate-pulse w-40"></div>
              </td>
              <td className="py-4 px-6">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
              </td>
              <td className="py-4 px-6">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-28"></div>
              </td>
              <td className="py-4 px-6">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-36"></div>
              </td>
              <td className="py-4 px-6">
                <div className="h-6 bg-gray-200 rounded-full animate-pulse w-20"></div>
              </td>
              <td className="py-4 px-6">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RequestTableSkeleton;
