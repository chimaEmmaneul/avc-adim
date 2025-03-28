"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next-nprogress-bar";
import * as z from "zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: any) => {
    console.log("Login Data:", data);

    router.push("/dashboard")
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-6">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <Image src="/img/azanypay.png" alt="AZANYPAY" width={124} height={52} className="mx-auto" />
          </div>
          <h2 className="text-2xl font-bold uppercase mb-4 text-black">Admin Login</h2>
          <p className="text-[#2B2B2B]">Manage the Azany Pay System Operations</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field */}
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
            {errors.email && <p className="text-main text-sm">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
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
            {errors.password && <p className="text-main text-sm">{errors.password.message}</p>}
          </div>

          {/* Remember Me & Forgot Password */}
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

          {/* Login Button */}
          <Button type="submit" className="w-full py-3 bg-main hover:bg-red-700 text-white h-12">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
