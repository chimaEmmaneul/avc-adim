"use client";

import { Suspense, useState } from "react";
import { useForm } from "react-hook-form";
import Cookies from 'js-cookie';
import { zodResolver } from "@hookform/resolvers/zod";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { OtpSchema, otpSchema } from "@/schema/authSchema";
import { useVerify2fa, useVerifyOtp } from "../../api/mutations";
import { showerror, showsuccess } from "@/lib/toasts";
import { AxiosError } from "axios";
import { Loader } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";



const Otpform = () => {
  const [otp, setOtp] = useState("");
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams?.get("email")
  const tag = searchParams?.get("tag")
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(otpSchema),
  });
  const { verifyOtp, isOtpverifying } = useVerifyOtp()
  const { verify2fa, isOtpverifying2fa } = useVerify2fa()
  const onSubmit = async (data: OtpSchema) => {
    try {
      if (tag === "2fa") {
        const response = await verify2fa(data);
        const expiresAt = new Date(response.expires_at);
        Cookies.set('token', response.token, { expires: 24 })
        showsuccess("Logged in successfully")
        router.push("/overview")
      } else {
        const response = await verifyOtp(data);
        router.push(`/auth/reset-password?email=${encodeURIComponent(email!)}`)
        showsuccess(response.message)
      }
    } catch (error: AxiosError | any) {
      console.log(error)
      showerror(error.message)
    }
  };

  return (
    <div>
      <div className={cn(" min-h-screen flex flex-col items-center justify-center  p-6")}>
        <h2 className="text-2xl md:text-[40px] font-bold mb-8">Verification</h2>
        <p className="text-gray-500 mb-4">Enter your 4 digits code that you received on your email.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center space-y-8">
          <InputOTP
            value={otp}
            onChange={(val) => {
              setOtp(val);
              setValue("verification_code", val);
            }}
            maxLength={4}
            className="flex space-x-2"
          >
            <InputOTPGroup className="flex space-x-4">
              {[...Array(4)].map((_, index) => (
                <InputOTPSlot
                  key={index}
                  index={index}
                  className={`w-14 h-14  outline-[#4D4D4D]  border-3 border-[#4D4D4D]  text-center ring-1 ring-ring  focus:border-guyana text-xl rounded-sm ${errors.verification_code && "border-red-500"
                    }`}
                />
              ))}
            </InputOTPGroup>
          </InputOTP>

          {errors.verification_code && <p className="text-red-500 text-sm">{errors.verification_code.message}</p>}

          <Button type="submit" className="w-full h-14  md:w-1/2 max-w-xs">
            {isOtpverifying || isOtpverifying2fa ? <Loader size={30} className="animate-spin" /> : "Continue"}
          </Button>
        </form>
      </div>
    </div>


  );
}

export default function Page() {
  return (
    <>
      <Suspense>
        <Otpform />
      </Suspense>
    </>
  )
}