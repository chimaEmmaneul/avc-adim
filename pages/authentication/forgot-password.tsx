"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next-nprogress-bar";
import { forgotPasswordSchema } from '@/schema/authSchema';



const ForgotPasswordView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const router = useRouter();

  const onSubmit = (data: any) => {
    console.log("Forgot Password Data:", data);
    router.push("/auth/otp")
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-6  text-center">
        <h2 className="text-4xl font-bold mb-6">Forgot Password</h2>
        <p className="text-gray-500 mb-6">
          Enter your email for the verification process, <br />
          we will send a 4-digit code to your email.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

          <div className="text-left">
            <label htmlFor="email" className="font-[500] inline-block mb-1">Email Address:</label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address..."
              {...register("email")}
              className="h-12 bg-[#EEEEEE] border-none outline-none "
            />
            {errors.email && <p className="text-main text-sm">{errors.email.message}</p>}
          </div>


          <Button type="submit" className="w-full md:w-1/3 h-12 mx-auto bg-main/90 hover:bg-main text-white mt-10 transition transform active:scale-95">
            Continue
          </Button>
        </form>


        <div className="mt-2 text-center flex items-center justify-center">
          <button
            onClick={() => router.push("/auth/login")}
            className="flex   items-center gap-2 text-sm text-gray-700 hover:underline"
          >
            <ArrowLeft size={16} /> Back To Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordView


/* eslint-disable @typescript-eslint/no-explicit-any */





