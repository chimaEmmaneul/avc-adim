// hooks/useAuth.js
'use client'

import { useEffect } from 'react'
import { useGetAdmin } from "@/pages/authentication/api/mutations"
import { useProfileStore } from "@/zustand/useProfileStore"
import { showerror } from "@/lib/toasts"
import { redirect, useRouter } from "next/navigation"
import Cookies from "js-cookie"

export function useAuth() {
  const router = useRouter()
  const { setProfile } = useProfileStore()
  const { admin, isLoading, isError, error } = useGetAdmin()

  useEffect(() => {
    if (admin) {
      setProfile(admin)
    }

    if (isError && !isLoading) {
      showerror("Unauthenticated")
      Cookies.remove("token")
      redirect("/auth/login")
    }
  }, [admin, isError, isLoading, router, setProfile])


  return { isLoading, isAuthenticated: !!admin }
}