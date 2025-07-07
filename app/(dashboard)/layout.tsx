"use client"
import React from "react";
import SidebarNavigation from "@/components/common/Sidebar/Sidebar";
import Header from "@/components/common/Header/Header";

import { useAuth } from "@/hooks/useAuth";
import Loader from "@/skeleonloaders/loader";
import useGetCountries from "@/hooks/useGetCountries";

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  useGetCountries()
  const { isLoading } = useAuth()
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative w-40 h-40">
          {/* Outer semicircle with rounded edges */}
          <svg
            className="absolute inset-0 w-full h-full"
            style={{ animation: "spin 2s linear infinite" }}
            viewBox="0 0 160 160"
          >
            <circle
              cx="80"
              cy="80"
              r="72.5"
              fill="none"
              stroke="#d97706"
              strokeWidth="15"
              strokeLinecap="round"
              strokeDasharray="227.77 227.77"
              strokeDashoffset="113.885"
              transform="rotate(-90 80 80)"
            />
          </svg>

          {/* Inner semicircle with rounded edges */}
          <svg
            className="absolute inset-0 w-full h-full"
            style={{ animation: "spin 1s linear infinite" }}
            viewBox="0 0 160 160"
          >
            <circle
              cx="80"
              cy="80"
              r="42.5"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="15"
              strokeLinecap="round"
              strokeDasharray="133.52 133.52"
              strokeDashoffset="66.76"
              transform="rotate(-90 80 80)"
            />
          </svg>
        </div>
      </div>
    )
  }


  return (
    <main className=" flex bg-black">
      <SidebarNavigation />
      <div className="flex flex-col w-full min-h-screen overflow-x-auto py-6 px-2 sm:px-8 md:rounded-[36px]  bg-white ">
        <Header />
        {children}
      </div>
    </main>
  )
}