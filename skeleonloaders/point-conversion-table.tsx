export function PointConversionTableSkeleton() {
  return (
    <div className="w-full">
      <div className="w-full overflow-x-auto">
        <table className="w-full">
          <thead className="w-full">
            <tr className="border-b border-gray-200">
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Name</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                Currency Code
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                Exchange Rate
              </th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-700 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, index) => (
              <tr key={index} className={`border-t border-gray-200 `}>
                <td className="px-6 py-4">
                  <div style={{ height: "16px" }} className="h-4 bg-gray-300 rounded animate-pulse"></div>
                </td>
                <td className="px-6 py-4">
                  <div style={{ height: "16px", width: "64px" }} className="h-4 bg-gray-300 rounded animate-pulse w-16"></div>
                </td>
                <td className="px-6 py-4">
                  <div style={{ height: "16px" }} className="h-4 bg-gray-300 rounded animate-pulse w-20"></div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex gap-2 justify-end">
                    <div style={{ height: "32px", width: "32px" }} className="w-8 h-8 bg-gray-300 rounded animate-pulse"></div>
                    <div style={{ height: "32px", width: "32px" }} className="w-8 h-8 bg-gray-300 rounded animate-pulse"></div>
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
