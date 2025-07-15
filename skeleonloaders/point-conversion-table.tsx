export function PointConversionTableSkeleton() {
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-lg border border-gray-200">
        <div className="bg-gray-50 px-6 py-4">
          <div className="grid grid-cols-5 gap-4">
            <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
          </div>
        </div>

        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className={`px-6 py-4 border-t border-gray-200 ${index % 2 === 1 ? "bg-gray-50" : "bg-white"}`}
          >
            <div className="grid grid-cols-5 gap-4 items-center">
              <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded animate-pulse w-16"></div>
              <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-gray-300 rounded animate-pulse"></div>
                <div className="w-8 h-8 bg-gray-300 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}