/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, TooltipProps } from "recharts"
import { ChevronRight } from "lucide-react"
import { UserRegionAnalyticsProps } from "../../@types/dashbaord"

const UserRegionAnalytics = ({ regions }: UserRegionAnalyticsProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const totalUsers = regions.reduce((sum, region) => sum + region.total_users, 0)

  const formatNumber = (num: number): string => {
    return num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num.toString()
  }

  const formatTooltipValue = (value: number) => {
    return [`${formatNumber(value)} Users`, `${((value / totalUsers) * 100).toFixed(1)}%`]
  }

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index)
  }

  const onPieLeave = () => {
    setActiveIndex(null)
  }

  const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 border rounded shadow-lg">
          <p className="font-bold text-gray-800">{data.name}</p>
          <p className="text-gray-600">Value: {data.value}</p>
          <p className="text-sm text-gray-500">
            Percentage: {((data.value / data.total) * 100).toFixed(2)}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-100">
      <div className="flex gap-5 items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">User Region Analytics</h2>
        <button className="flex items-center text-gray-500 hover:text-gray-700 text-sm">
          More <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <div className="w-48 h-48 relative mb-6 md:mb-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={regions}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={0}
                dataKey="total_users"
                nameKey="country_name"
                onMouseEnter={onPieEnter}
                onMouseLeave={onPieLeave}
                animationDuration={800}
              >
                {regions.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    stroke={activeIndex === index ? "#fff" : "none"}
                    strokeWidth={activeIndex === index ? 2 : 0}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={formatTooltipValue}
                content={<CustomTooltip />}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-xl font-bold">100%</p>
            </div>
          </div>
        </div>

        <div className="md:ml-10 space-y-4 w-full md:w-auto">
          {regions.map((region, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-12 p-2 rounded-md transition-colors"
              style={{
                backgroundColor: activeIndex === index ? `${region.color}15` : "transparent",
                cursor: "pointer",
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="flex items-center">
                <span className="h-3 w-3 rounded-full mr-2" style={{ backgroundColor: region.color }}></span>
                <span className="text-gray-600">{region.country_name}</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="font-medium">{formatNumber(region.total_users)}</span>
                <span className="text-gray-400 w-12">Users</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserRegionAnalytics;