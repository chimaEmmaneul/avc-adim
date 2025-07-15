export function TransactionTableSkeleton() {
  // Create an array of 5 items to render 5 skeleton rows
  const skeletonRows = Array(9).fill(null)

  return (
    <div className="w-full mt-4">
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              {["TRX ID", "USERNAME", "TRANSACTION TYPE", "AMOUNT/CONVERTION", "PAYMENTETHOD", "STATUS", ""].map(
                (header) => (
                  <th
                    key={header}
                    className="text-left py-3 px-4 font-semibold whitespace-nowrap text-sm text-[#6E768E]"
                  >
                    {header}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {skeletonRows.map((_, index) => (
              <tr
                key={index}
                className="border-b border-[#DEE2E6] text-[#6E768E] font-medium text-sm cursor-pointer even:bg-[#DEE2E6]/30 odd:bg-white"
              >
                {/* TRX ID */}
                <td className="px-4 py-4">
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                </td>

                {/* USERNAME */}
                <td className="py-4 px-2">
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                </td>

                {/* TRANSACTION TYPE */}
                <td className="py-4 px-4">
                  <div className="h-4 w-28 bg-gray-200 rounded animate-pulse"></div>
                </td>

                {/* AMOUNT/CONVERTION */}
                <td className="py-4 px-4">
                  <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                </td>

                {/* PAYMENTETHOD */}
                <td className="py-4 px-4">
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                </td>

                {/* STATUS */}
                <td className="py-4 px-4">
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                </td>

                {/* Action button */}
                <td className="py-4 px-4">
                  <div className="w-8 h-8 bg-gray-200 rounded-[4px] animate-pulse"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TransactionTableSkeleton
