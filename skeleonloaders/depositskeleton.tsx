export default function DepositSummarySkeleton() {
  return (
    <div className="w-full mt-6">
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Header */}
        <div className="p-6 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-200 rounded animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-40 animate-pulse"></div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Transaction details skeleton */}
          <div className="space-y-3">
            {[
              "Transaction ID",
              "Transaction Type",
              "Bank Name",
              "Account Number",
              "Payment Method",
              "Exchange Rate",
              "Payable Amount",
              "Payment Status",
              "Remark",
              "Date",
            ].map((_, index) => (
              <div key={index} className="flex justify-between items-center py-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
              </div>
            ))}
          </div>

          {/* Action buttons skeleton */}
          <div className="flex gap-3 justify-end pt-6">
            <div className="h-10 bg-yellow-200 rounded px-4 w-24 animate-pulse"></div>
            <div className="h-10 bg-yellow-200 rounded px-4 w-32 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
