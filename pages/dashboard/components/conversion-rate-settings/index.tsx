export default function ConversionRateSettings() {
  return (
    <div className="">
      <h1 className="text font-semibold text-[#1C2A53] mb-8">Conversion Rate Settings</h1>

      <div className="flex flex-wrap gap-6">
        <div className="border border-[#1e3a8a] rounded-xl p-3 min-w-[150px]">
          <div className="text-gray-500 mb-2">Conversion Rate Markup</div>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-[#04103B]">1.2%</div>
            <a href="#" className="text-[#d97706] text-[10px] hover:underline">
              Edit Rate
            </a>
          </div>
        </div>

        <div className="border border-[#1e3a8a] rounded-xl p-3 min-w-[150px]">
          <div className="text-gray-500 mb-2">Update Frequency</div>
          <div className="flex items-center gap-4 justify-between">
            <div className="text-2xl font-bold text-[#04103B]">Hourly</div>
            <a href="#" className="text-[#d97706] text-[10px] hover:underline">
              Edit Frequency
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
