"use client"
import React, { useEffect } from "react";
import SidebarNavigation from "@/components/common/Sidebar/Sidebar";
import Header from "@/components/common/Header/Header";
import { useGetAdmin } from "@/pages/authentication/api/mutations";
import { useProfileStore } from "@/zustand/useProfileStore";
import { Profile } from "@/pages/authentication/@types";

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {


  const { setProfile } = useProfileStore()
  const { admin, isLoading, isError, error } = useGetAdmin()

  useEffect(() => {
    if (admin) {
      setProfile(admin as Profile);
    }
  }, [admin, setProfile]);


  if (isLoading) {
    return (
      <div>
        Loading ...
      </div>
    )
  }

  if (isError) {
    return (
      <div>
        {error?.message}
      </div>
    )
  }


  return (
    <main className=" flex bg-black ">
      <SidebarNavigation />
      <div className="flex flex-col w-full min-h-screen overflow-x-auto py-6 px-8 md:rounded-[36px]  bg-white ">
        <Header />
        {children}
      </div>
    </main>
  )
}