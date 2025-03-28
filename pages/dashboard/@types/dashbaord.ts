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
