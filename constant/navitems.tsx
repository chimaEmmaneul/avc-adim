import { NavItem } from "@/@types/navitems";
import { Grid, Users } from "lucide-react";

export const NAV_ITEMS: NavItem[] = [
  {
    name: "Dashboard",
    path: "/overview",
    icon: <Grid className="w-5 h-5 mr-3" />,
  },
  {
    name: "User Management",
    path: "/user-management",
    icon: <Users className="w-5 h-5 mr-3" />,
    subItems: [
      { name: "All Users", path: "/user-management/all-users" },
      { name: "Active Users", path: "/user-management/active-users" },
      { name: "Email Unverified", path: "/user-management/email-unverified" },
      { name: "Banned Users", path: "/user-management/banned-users" },
      { name: "Email To Users", path: "/user-management/email-users" },
    ],
  },
  {
    name: "Transactions",
    path: "/transactions",
    icon: <Users className="w-5 h-5 mr-3" />,
    subItems: [
      { name: "All Transactions", path: "/transactions/all-transactions" },
      { name: "Confirmed", path: "/transactions/confirmed" },
      { name: "Pending", path: "/transactions/pending" },
      { name: "Declined", path: "/transactions/declined" },
    ],
  },
]