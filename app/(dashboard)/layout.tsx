"use client"
import React, { useEffect } from "react";
import SidebarNavigation from "@/components/common/Sidebar/Sidebar";
import Header from "@/components/common/Header/Header";

import { useAuth } from "@/hooks/useAuth";
import Loader from "@/skeleonloaders/loader";

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { isLoading } = useAuth()

  if (isLoading) {
    return (
      <Loader />
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