import type React from "react"
import { MetricCardProps } from "../../@types/dashbaord"

export default function MetricCard({ title, value, percentChange, viewText, icon }: MetricCardProps) {
  let isPositive;
  if (percentChange) {
    isPositive = percentChange >= 0
  }

  return (
    <div className="border border-[#2E3591] rounded-2xl p-5 flex flex-col">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-[#797D8C] font-medium text-sm">{title}</h3>
        <div className="text-gray-700">{icon}</div>
      </div>

      <div className="text-3xl text-[#04103B] font-bold mb-5">{value}</div>

      <div className="flex justify-between items-center">
        <div className={`flex items-center rounded-full ${isPositive ? "bg-green-100" : "bg-red-100"} px-2 py-0.5`}>
          <span className={`text-xs font-medium ${isPositive ? "text-green-600" : "text-red-600"}`}>
            {isPositive ? "+" : ""}
            {percentChange}%
          </span>
        </div>

        <a href="#" className="text-amber-500 text-sm font-medium hover:underline">
          {viewText}
        </a>
      </div>
    </div>
  )
}

