export type MetricCardProps = {
  title: string;
  value: string;
  percentChange: number;
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
  name: string;
  value: number;
  color: string;
};

export type UserRegionAnalyticsProps = {
  regions: RegionData[];
};
