"use client"
import React from 'react'
import UsersTable from '../../components/dashboard-user-table'
import { DASHBOARD_USERS, } from '../../constants/user'
import MetricCard from '../../components/metric-card'
import UserRegionAnalytics from '../../components/user-region-analytics'
import { useGetDashboardAnalytics, useGetMarkupConfig } from '../../api/mutation'
import { CartIcon, ChartIcon } from '@/icon/icon'
import ConversionRateSettings from '../../components/conversion-rate-settings'
import DonoughtChart from '../../components/chart'

const Overview = () => {
  const { dashboardData, isLoading } = useGetDashboardAnalytics()
  const { markupConfig, isLoading: isLoadingConfig } = useGetMarkupConfig()
  console.log(markupConfig, "config")


  const user_analytics = dashboardData?.data.user_analytics || [];

  const colors = [
    "#F9CA24", "#4CAF50", "#6D1A36", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF",
    "#E91E63", "#8BC34A", "#FF5722", "#00BCD4", "#9C27B0", "#3F51B5", "#CDDC39",
    "#795548", "#FF9800", "#009688", "#607D8B", "#C2185B", "#7B1FA2", "#388E3C",
    "#F44336", "#1E88E5"
  ]


  const userAnalyticsWithColor = user_analytics.map((user, index) => ({
    ...user,
    color: colors[index] || "#000000" 
  }));


  return (
    <div className='space-y-8'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <MetricCard
          title="Total Deposits"
          value={dashboardData?.data.deposit ?? 0}
          percentChange={dashboardData?.data.deposit_percentage ?? 0}
          viewText="View Report"
          icon={<ChartIcon />}
        />
        <MetricCard
          title="Total Transfers"
          value={dashboardData?.data.transfer ?? 0}
          percentChange={dashboardData?.data.transfer_percentage ?? 0}
          viewText="View Report"
          icon={<CartIcon />}
        />
          <MetricCard
          title="Total Users"
          value={dashboardData?.data.total_users ?? 0}
          percentChange={0}
          viewText="View Report"
          icon={<CartIcon />}
          isMoney={false}
        />
      </div>
      <div className='w-full grid grid-cols-1 lg:grid-cols-2  gap-6'>
        <div>
        <ConversionRateSettings config={markupConfig?.data ?? { markup_percent: 0, card_fee: 0 }} isLoadingConfig={isLoadingConfig} />
          <DonoughtChart regions={userAnalyticsWithColor} />
        </div>
        <UserRegionAnalytics regions={userAnalyticsWithColor} />
      </div>
      <UsersTable users={dashboardData?.data.top_users ?? []} />
    </div>
  )
}

export default Overview;