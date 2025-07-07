export default function CardPickUpLoader() {
  return (
    <table className="">
      <thead className="bg-gray-50">
        <tr>
          {["Location ID", "Location Name", "Country", "Service Days", "Service Hours", "Address", "Action"].map(
            (header) => (
              <th
                key={header}
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase whitespace-nowrap tracking-wider"
              >
                {header}
              </th>
            ),
          )}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {Array.from({ length: 8 }).map((_, index) => (
          <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
            <td className="px-4 py-4 whitespace-nowrap">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
            </td>
            <td className="px-4 py-4 whitespace-nowrap">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
            </td>
            <td className="px-4 py-4 whitespace-nowrap">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
            </td>
            <td className="px-4 py-4 whitespace-nowrap">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
            </td>
            <td className="px-4 py-4 whitespace-nowrap">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
            </td>
            <td className="px-4 py-4 min-w-[100px]">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-40"></div>
            </td>
            <td className="px-4 py-4 whitespace-nowrap">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
