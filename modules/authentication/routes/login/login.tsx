/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, Loader } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next-nprogress-bar";
import Cookies from 'js-cookie';


import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLogin } from "../../api/mutations";
import { LoginSchema, loginSchema } from "@/schema/authSchema";
import { AxiosError } from "axios";
import { showerror, showsuccess } from "@/lib/toasts";



export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const { login, isLoggingIn } = useLogin()

  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      const res = await login(data)
      console.log(res.token)
      if (res?.message?.["2fa_required"]) {
        showsuccess(res.data)
        router.push("/auth/verifyotp?tag=2fa")
        return
      } else {
        showsuccess("Logged in successfully")
        Cookies.set('token', res.token, { expires: 24 })
        router.push("/overview")
      }
    } catch (error: AxiosError | any) {
      console.log(error, "error")
      showerror(error.errors ?? "Something went wrong, try again")
    }

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-6">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <Image src="/img/avclogo.png" alt="AZANYPAY" width={124} height={52} className="mx-auto" />
          </div>
          <h2 className="text-2xl font-bold uppercase mb-4 text-black">Admin Login</h2>
          <p className="text-[#2B2B2B]">Manage the African Vision Card System Operations</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm text-black font-medium">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="example@example.com"
              className="w-full h-12 border-gray-300"
              {...register("email")}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm text-black font-medium">
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full h-12 border-gray-300 pr-10"
                {...register("password")}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                <Eye className="h-5 w-5" />
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <a href="/auth/forgot-password" className="text-main text-sm">
              Forgot Password?
            </a>
          </div>

          <Button type="submit" className="w-full py-3 bg-main  text-white h-12">
            {isLoggingIn ? <Loader className="animate-spin mx-auto" /> : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
}
