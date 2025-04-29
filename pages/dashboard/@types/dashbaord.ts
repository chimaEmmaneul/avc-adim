export type MetricCardProps = {
  title: string;
  value: number | undefined;
  percentChange: number | undefined;
  viewText: string;
  icon: React.ReactNode;
};

export type MetricData = {
  id: string;
  title: string;
  value: string;
  percentChange: number;
  viewText: string;
  icon: React.ReactNode;
};

export type User = {
  id: string;
  name: string;
  avatar: string;
  transferred: number;
  country: string;
  email: string;
  joinDate: string;
};

export type UsersTableProps = {
  users: User[];
};

export type RegionData = {
  country_name: string;
  total_users: number;
  percentage: string;
  color: string;
};

export type UserRegionAnalyticsProps = {
  regions: RegionData[];
};

export interface UserAnalytics {
  country_name: string;
  total_users: number;
  percentage: string; // if you prefer it as number, we can cast it
}

export interface DashboardAnalytics {
  transfer: number;
  transfer_percentage: number;
  deposit: number;
  deposit_percentage: number;
  withdrawal: number;
  withdrawal_percentage: number;
  total_users: number;
  user_analytics: UserAnalytics[];
  top_users: any[];
}

export interface DashboardResponse {
  data: DashboardAnalytics;
}
