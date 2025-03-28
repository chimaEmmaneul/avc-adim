import React from 'react'
import UsersTable from '../../components/dashboard-user-table'
import { DASHBOARD_USERS, METRIC, REGIONAL_DATA } from '../../constants/user'
import MetricCard from '../../components/metric-card'
import UserRegionAnalytics from '../../components/user-region-analytics'

const Overview = () => {
  return (
    <div className='space-y-8'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {METRIC.map((metric) => (
          <MetricCard
            key={metric.id}
            title={metric.title}
            value={metric.value}
            percentChange={metric.percentChange}
            viewText={metric.viewText}
            icon={metric.icon}
          />
        ))}
      </div>
      <UserRegionAnalytics regions={REGIONAL_DATA} />
      <UsersTable users={DASHBOARD_USERS} />
    </div>
  )
}

export default Overview