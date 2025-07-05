import { NavItem } from "@/@types/navitems";
// import { DashboardIcon, SettingsIcon, TransactionIcon, UserIcon } from "@/icon/icon";
import { BadgeDollarSign, Bolt, BookType, CreditCard, FileText, LayoutGridIcon, LocateIcon, UserRoundCog } from "lucide-react";

export const NAV_ITEMS: NavItem[] = [
  {
    name: "Dashboard",
    path: "/overview",
    icon: <LayoutGridIcon />,
  },
  {
    name: "User Management",
    path: "/user-management",
    icon: <UserRoundCog />,
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
    icon: <BadgeDollarSign />,
    subItems: [
      { name: "All Transactions", path: "/transactions/all-transactions" },
      { name: "Confirmed", path: "/transactions/confirmed" },
      { name: "Pending", path: "/transactions/pending" },
      { name: "Declined", path: "/transactions/declined" },
    ],
  },
  {
    name: "Card Requessts",
    path: "/card-requests",
    icon: <CreditCard />,
  },
  {
    name: " Pickup Locations",
    path: "/card-pickup-location",
    icon: <LocateIcon />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <Bolt />,
  },
  {
    name: "Manage Blogs",
    path: "/manage-blogs",
    icon: <FileText />,
  },
  {
    name: "Manage Conent",
    path: "/manage-content",
    icon: <BookType />,
    subItems: [
      { name: "Testimonials", path: "/manage-content/testimonials" },
      { name: "Contact Us", path: "/manage-content/contact-us" },
      { name: "Footer", path: "/manage-content/footer" },
    ],
  },
]