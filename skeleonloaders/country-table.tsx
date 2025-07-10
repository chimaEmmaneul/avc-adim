export function CountryTableSkeleton() {
  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">NAME</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">CURRENCY CODE</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">FLAG</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">CONTINENT</th>
              <th className="text-right py-3 px-4 font-medium text-gray-700 text-sm"></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }).map((_, index) => (
              <tr key={index} className={index % 2 === 1 ? "bg-gray-50" : "bg-white"}>
                <td className="py-3 px-4">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
                </td>
                <td className="py-3 px-4">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-12"></div>
                </td>
                <td className="py-3 px-4">
                  <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse"></div>
                </td>
                <td className="py-3 px-4">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
                </td>
                <td className="py-3 px-4 text-right">
                  <div className="flex justify-end gap-2">
                    <div className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}