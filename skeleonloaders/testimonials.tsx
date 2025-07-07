
export default function TestimonialSkeletonLoader() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white">
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th className="pb-4 font-medium text-gray-600">IMAGE</th>
            <th className="pb-4 font-medium text-gray-600">NAME</th>
            <th className="pb-4 font-medium text-gray-600">NOTE</th>
            <th className="pb-4"></th>
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((_, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-[#DEE2E6]/30" : "bg-white"}>
              <td className="py-2">
                <div className="flex items-center justify-center w-14 h-14 rounded-[50%] overflow-hidden">
                  <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
                </div>
              </td>
              <td className="py-2">
                <div className="h-4 bg-gray-300 rounded w-24 animate-pulse"></div>
              </td>
              <td className="py-2">
                <div className="h-4 bg-gray-300 rounded w-20 animate-pulse"></div>
              </td>
              <td className="py-2 text-right">
                <div className="flex justify-end gap-2">
                  <div className="w-7 h-7 bg-gray-300 rounded animate-pulse"></div>
                  <div className="w-7 h-7 bg-gray-300 rounded animate-pulse"></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
