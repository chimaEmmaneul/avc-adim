export default function BlogFormSkeleton() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="mb-8">
        <div className="h-6 bg-gray-200 rounded animate-pulse w-32"></div>
      </div>

      <div className="space-y-6">
        {/* Blog Title */}
        <div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-20 mb-2"></div>
          <div className="h-10 bg-gray-200 rounded animate-pulse w-full"></div>
        </div>

        {/* Category */}
        <div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-16 mb-2"></div>
          <div className="h-10 bg-gray-200 rounded animate-pulse w-full"></div>
        </div>

        {/* Banner Upload */}
        <div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-24 mb-2"></div>
          <div className="border-2 border-dashed border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-4">
              <div className="h-8 bg-gray-200 rounded animate-pulse w-16"></div>
              <div className="h-8 bg-gray-200 rounded animate-pulse w-20"></div>
            </div>
          </div>
        </div>

        {/* Short Description */}
        <div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-28 mb-2"></div>
          <div className="h-32 bg-gray-200 rounded animate-pulse w-full"></div>
        </div>

        {/* Meta Title */}
        <div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-20 mb-2"></div>
          <div className="h-10 bg-gray-200 rounded animate-pulse w-full"></div>
        </div>

        {/* Meta Keywords */}
        <div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-24 mb-2"></div>
          <div className="h-10 bg-gray-200 rounded animate-pulse w-full"></div>
        </div>

        {/* Second Short Description */}
        <div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-28 mb-2"></div>
          <div className="h-32 bg-gray-200 rounded animate-pulse w-full"></div>
        </div>

        {/* Save Button */}
        <div className="pt-4">
          <div className="h-12 bg-gray-200 rounded animate-pulse w-full"></div>
        </div>
      </div>
    </div>
  )
}
