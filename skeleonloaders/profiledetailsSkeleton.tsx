export default function ProfileLoadingSkeleton() {
  return (
    <div className="min-h-screen">
      <div className="w-full mx-auto">
        <div className="flex items-center justify-center mb-4">
          <div className="animate-pulse bg-gray-300 w-48 h-48 rounded-[50%]"></div>
        </div>

        {/* Information Form Section */}
        <div className="bg-white rounded-lg  p-2">
          {/* Section Title */}
          <div className="animate-pulse bg-gray-300 h-6 w-40 rounded mb-6"></div>

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="space-y-2">
              <div className="animate-pulse bg-gray-300 h-4 w-20 rounded"></div>
              <div className="animate-pulse bg-gray-200 h-10 w-full rounded border"></div>
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <div className="animate-pulse bg-gray-300 h-4 w-20 rounded"></div>
              <div className="animate-pulse bg-gray-200 h-10 w-full rounded border"></div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <div className="animate-pulse bg-gray-300 h-4 w-12 rounded"></div>
              <div className="animate-pulse bg-gray-200 h-10 w-full rounded border"></div>
            </div>

            {/* Country */}
            <div className="space-y-2">
              <div className="animate-pulse bg-gray-300 h-4 w-16 rounded"></div>
              <div className="animate-pulse bg-gray-200 h-10 w-full rounded border"></div>
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <div className="animate-pulse bg-gray-300 h-4 w-24 rounded"></div>
              <div className="animate-pulse bg-gray-200 h-10 w-full rounded border"></div>
            </div>

            {/* City */}
            <div className="space-y-2">
              <div className="animate-pulse bg-gray-300 h-4 w-8 rounded"></div>
              <div className="animate-pulse bg-gray-200 h-10 w-full rounded border"></div>
            </div>

            {/* State */}
            <div className="space-y-2">
              <div className="animate-pulse bg-gray-300 h-4 w-10 rounded"></div>
              <div className="animate-pulse bg-gray-200 h-10 w-full rounded border"></div>
            </div>

            {/* Zip Code */}
            <div className="space-y-2">
              <div className="animate-pulse bg-gray-300 h-4 w-16 rounded"></div>
              <div className="animate-pulse bg-gray-200 h-10 w-full rounded border"></div>
            </div>
          </div>

          {/* Address - Full Width */}
          <div className="mt-6 space-y-2">
            <div className="animate-pulse bg-gray-300 h-4 w-16 rounded"></div>
            <div className="animate-pulse bg-gray-200 h-10 w-full rounded border"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
