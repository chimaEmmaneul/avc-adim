export interface MetricCardProps {
  title: string;
  value: string;
  percentChange: number;
  viewText: string;
  icon: React.ReactNode;
}

export interface MetricData {
  id: string;
  title: string;
  value: string;
  percentChange: number;
  viewText: string;
  icon: React.ReactNode;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  transferred: number;
  country: string;
  email: string;
  joinDate: string;
}

export interface UsersTableProps {
  users: User[];
}
