"use client"
import React, { useState } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, TooltipProps } from 'recharts'
import { UserRegionAnalyticsProps } from '../../@types/dashbaord';

const DonoughtChart = ({ regions }: UserRegionAnalyticsProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const totalUsers = regions.reduce((sum, region) => sum + region.total_users, 0)

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index)
  }

  const onPieLeave = () => {
    setActiveIndex(null)
  }


  const formatNumber = (num: number): string => {
    return num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num.toString()
  }
  const formatTooltipValue = (value: number) => {
    return [`${formatNumber(value)} Users`, `${((value / totalUsers) * 100).toFixed(1)}%`]
  }

  const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload }) => {
    if (active && payload && payload.length > 0) {
      const data = payload[0]; // Don't access .payload again
      const percentage = ((data.value as number / totalUsers) * 100).toFixed(1);

      return (
        <div className="bg-white p-4 border rounded-lg shadow-lg border-gray-200">
          <p className="font-bold text-gray-800 mb-2">{data.name}</p>
          <p className="text-gray-600 mb-1">Users: {formatNumber(data.value as number)}</p>
          <p className="text-sm text-gray-500">
            Percentage: {percentage}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <div className="w-full h-[500px]  relative mx-auto mb-6 md:mb-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={regions}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={140}
              paddingAngle={2}
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
                  stroke={activeIndex === index ? "#ffffff" : "transparent"}
                  strokeWidth={activeIndex === index ? 3 : 0}
                  style={{
                    filter: activeIndex === index ? 'brightness(1.1)' : 'none',
                    cursor: 'pointer'
                  }}
                />
              ))}
            </Pie>
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: 'transparent' }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl font-bold">100%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonoughtChart