import React from "react"

export function RequestDetailsSkeleton() {
  const fields = [
    { label: "Request ID", width: "w-24" },
    { label: "User", width: "w-36" },
    { label: "Account Number", width: "w-28" },
    { label: "Email", width: "w-48" },
    { label: "Phone", width: "w-32" },
    { label: "Country", width: "w-20" },
    { label: "Pickup Location", width: "w-28" },
    { label: "Location Hour", width: "w-24" },
    { label: "Request Date", width: "w-40" },
    { label: "Card Type", width: "w-24" },
    { label: "Currency", width: "w-36" },
    { label: "Card fee paid", width: "w-24" },
  ]

  return (
    <div className="w-full bg-white rounded shadow">
      <div className="flex items-center justify-between border-b p-4">
        <h2 className="text-lg font-medium text-gray-800">Request Details</h2>
      </div>

      {/* Content area */}
      <div className="p-4">
        {/* Field rows */}
        {fields.map((field) => (
          <div key={field.label} className="flex py-2 justify-between border-b border-gray-100 last:border-0">
            <div className="w-1/3 text-gray-500 text-sm font-medium">{field.label}:</div>
            <div className="w-2/3">
              {/* Using only standard width classes */}
              <div className={`h-4 ${field.width} bg-gray-200 rounded`}>
                <div className="h-full w-full bg-gray-300 rounded opacity-50 animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}

        {/* Status field with pill */}
        <div className="flex py-2 justify-between mt-2">
          <div className="w-1/3 text-gray-500 text-sm font-medium">Status:</div>
          <div className="w-2/3">
            <div className="h-6 w-20 bg-amber-100 border border-amber-300 rounded-full overflow-hidden">
              <div className="h-full w-full bg-amber-200 rounded-full opacity-50 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="p-4 flex space-x-2 border-t border-gray-100">
        <div className="w-24 h-10 border border-amber-500 rounded overflow-hidden">
          <div className="h-full w-full bg-amber-100 opacity-50 animate-pulse"></div>
        </div>
        <div className="w-24 h-10 bg-amber-500 rounded overflow-hidden">
          <div className="h-full w-full bg-amber-600 opacity-50 animate-pulse"></div>
        </div>
        <div className="w-24 h-10 bg-red-500 rounded overflow-hidden">
          <div className="h-full w-full bg-red-600 opacity-50 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default RequestDetailsSkeleton