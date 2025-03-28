import React from "react";
import SidebarNavigation from "@/components/common/Sidebar/Sidebar";
import Header from "@/components/common/Header/Header";

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className=" flex bg-black ">
      <SidebarNavigation />
      <div className="flex flex-col w-full min-h-screen overflow-x-auto py-6 px-8 rounded-[36px]  bg-white ">
        <Header />
        {children}
      </div>
    </main>
  )
}