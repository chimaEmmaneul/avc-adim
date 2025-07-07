export type MetricCardProps = {
  title: string;
  value: number | undefined;
  percentChange: number | undefined;
  viewText: string;
  icon: React.ReactNode;
  isMoney?: boolean;
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
  first_name: string;
  total_transferred: number;
  total_deposited: number;
  country_name: string;
  email: string;
  created_date: string;
  profile_photo: string;
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
  percentage: string;
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
  top_users: TopUser[];
}

export type TopUser = {
  id: string;
  first_name: string;
  email: string;
  created_date: string;
  country_name: string;
  total_transferred: number;
  total_deposited: number;
  profile_photo: string;
};

export interface DashboardResponse {
  data: DashboardAnalytics;
}

export type ConfigData = {
  markup_percent: number;
  card_fee: number;
};

export type ConfigResponse = {
  success: boolean;
  message: string;
  data: ConfigData;
};
