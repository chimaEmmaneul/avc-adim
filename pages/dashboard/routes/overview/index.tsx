"use client"
import React from 'react'
import UsersTable from '../../components/dashboard-user-table'
import { DASHBOARD_USERS, } from '../../constants/user'
import MetricCard from '../../components/metric-card'
import UserRegionAnalytics from '../../components/user-region-analytics'
import { useGetDashboardAnalytics, useGetMarkupConfig } from '../../api/mutation'
import { CartIcon, ChartIcon } from '@/icon/icon'
import ConversionRateSettings from '../../components/conversion-rate-settings'

const Overview = () => {
  const { dashboardData, isLoading } = useGetDashboardAnalytics()
  const { markupConfig, isLoading: isLoadingConfig } = useGetMarkupConfig()
  console.log(markupConfig, "config")


  const user_analytics = dashboardData?.data.user_analytics || [];

  const colors = ["#F9CA24", "#4CAF50", "#6D1A36", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"];

  const userAnalyticsWithColor = user_analytics.map((user, index) => ({
    ...user,
    color: colors[index] || "#000000" 
  }));


  return (
    <div className='space-y-8'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Withdrawals"
          value={dashboardData?.data.withdrawal}
          percentChange={dashboardData?.data.withdrawal_percentage}
          viewText="View Report"
          icon={<CartIcon />}
        />
        <MetricCard
          title="Total Deposits"
          value={dashboardData?.data.deposit}
          percentChange={dashboardData?.data.deposit_percentage}
          viewText="View Report"
          icon={<ChartIcon />}
        />
        <MetricCard
          title="Total Transfers"
          value={dashboardData?.data.transfer}
          percentChange={dashboardData?.data.transfer_percentage}
          viewText="View Report"
          icon={<CartIcon />}
        />
          <MetricCard
          title="Total Users"
          value={dashboardData?.data.total_users}
          percentChange={0}
          viewText="View Report"
          icon={<CartIcon />}
        />
      </div>
      <div className='flex flex-col sm:flex-row w-full gap-4'>
        <ConversionRateSettings config={markupConfig?.data ?? { markup_percent: 0, card_fee: 0 }} isLoadingConfig={isLoadingConfig} />
        <UserRegionAnalytics regions={userAnalyticsWithColor} />
      </div>
      <UsersTable users={DASHBOARD_USERS} />
    </div>
  )
}

export default Overview