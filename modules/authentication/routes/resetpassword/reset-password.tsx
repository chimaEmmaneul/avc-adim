"use client";

import { useForm } from "react-hook-form";
import { ArrowLeft, Loader } from "lucide-react";
import { useRouter } from "next-nprogress-bar";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ResetPasswordSchema, ResetPasswordType } from "@/schema/authSchema";
import { useResetPassword } from "../../api/mutations";
import { useSearchParams } from "next/navigation";
import { decryptEmail } from "@/lib/utils";
import { showerror, showsuccess } from "@/lib/toasts";
import { AxiosError } from "axios";

export default function ResetPasswordView() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ResetPasswordSchema),
  });
  const searchParams = useSearchParams()
  const email = searchParams?.get("email")
  const router = useRouter();
  const { resetPassword, isResettingPassword } = useResetPassword()
  const onSubmit = async (data: ResetPasswordType) => {
    const decryptedemail = decryptEmail(email!)
    console.log(decryptedemail);

    try {
      const res = await resetPassword({ ...data, email: decryptedemail })
      console.log(res)
      showsuccess(res.message)
    } catch (error: AxiosError | any) {
      console.log(error)
      showerror(error.message)

    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-[400px] p-6  text-center">
        <h2 className="text-3xl font-bold mb-2">Set New Password</h2>
        <p className="text-gray-500 mb-6">
          Set the new password for your account so you can login and access all Super Admin features.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="text-left">
            <label htmlFor="password" className="font-medium mb-1 inline-block">Enter New Password:</label>
            <Input
              id="password"
              type="password"
              placeholder="Enter new password..."
              {...register("password")}
              className="h-12  bg-gray-100 "
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <div className="text-left">
            <label htmlFor="confirmPassword" className="font-medium mb-1 inline-block">Confirm Password:</label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm new password..."
              {...register("password_confirmation")}
              className="h-12  bg-gray-100 "
            />
            {errors.password_confirmation && <p className="text-red-500 text-sm">{errors.password_confirmation.message}</p>}
          </div>

          <Button type="submit" className="w-full md:w-3/5 h-12 bg-main/90 !mt-12 text-white hover:bg-main">
            {isResettingPassword ? <Loader size={30} className="animate-spin mx-auto" /> : " Create new password"}
          </Button>
        </form>

        <div className="mt-4 flex justify-center">
          <button
            onClick={() => router.push("/auth/login")}
            className="flex items-center gap-2 text-sm text-gray-700 hover:underline"
          >
            <ArrowLeft size={16} /> Back To Login
          </button>
        </div>
      </div>
    </div>
  );
}
