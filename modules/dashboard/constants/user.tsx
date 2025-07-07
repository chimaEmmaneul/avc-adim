import { FileText, Users } from "lucide-react";
import { MetricData } from "../@types/dashbaord";
import { CartIcon, ChartIcon } from "@/icon/icon";

export const DASHBOARD_USERS = [
  {
    id: "1",
    name: "Nicholas Patrick",
    avatar: "/img/user.png",
    transferred: 2540.58,
    country: "United States",
    email: "test@gmail.com",
    joinDate: "15th February 2025",
  },
  {
    id: "2",
    name: "Cordell Edwards",
    avatar: "/img/user.png",
    transferred: 1567.8,
    country: "United States",
    email: "test@gmail.com",
    joinDate: "15th February 2025",
  },
  {
    id: "3",
    name: "Derrick Spencer",
    avatar: "/img/user.png",
    transferred: 1640.26,
    country: "United States",
    email: "test@gmail.com",
    joinDate: "15th February 2025",
  },
  {
    id: "4",
    name: "Larissa Burton",
    avatar: "/img/user.png",
    transferred: 2340.58,
    country: "United States",
    email: "test@gmail.com",
    joinDate: "15th February 2025",
  },
];

export const METRIC: MetricData[] = [
  {
    id: "1",
    title: "Total Withdrawals",
    value: "$25.1 M",
    percentChange: 15,
    viewText: "View Report",
    icon: <CartIcon />,
  },
  {
    id: "2",
    title: "Total Deposits",
    value: "$40.4 M",
    percentChange: -3.5,
    viewText: "View Report",
    icon: <ChartIcon />,
  },
  {
    id: "3",
    title: "Total Transfers",
    value: "$13.5M",
    percentChange: 15,
    viewText: "View More",
    icon: <FileText size={20} />,
  },
  {
    id: "4",
    title: "Total Users",
    value: "403.5k",
    percentChange: 10,
    viewText: "View More",
    icon: <Users size={20} />,
  },
]

export const REGIONAL_DATA = [
  { name: "Asia", value: 22500, color: "#F9CA24" },
  { name: "Caribbean", value: 76800, color: "#4CAF50" },
  { name: "USA", value: 98800, color: "#6D1A36" },
]