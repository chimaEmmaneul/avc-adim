"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Eye, EyeOff } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const passwordSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
      .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
      .regex(/[0-9]/, { message: "Password must contain at least one number" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

type PasswordFormValues = z.infer<typeof passwordSchema>

type ResetPasswordProps = {
  setStep: React.Dispatch<React.SetStateAction<number | null>>
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ResetPassword({ setStep, setIsOpen }: ResetPasswordProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  })

  function onSubmit(data: PasswordFormValues) {
    console.log("Password reset successful", data)
    setIsOpen(false)
    setStep(1)
    // Here you would typically call an API to reset the password
  }

  return (
    <div className="bg-white rounded-lg max-w-md w-full p-6 ">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Set New Password</h2>
        <p className="text-gray-500">
          Set the new password for your account so you can login and access all Super Admin features.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-1">
          <label htmlFor="password" className="block text-sm font-medium">
            Enter New Password:
          </label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password..."
              className="pr-10 bg-[#EEEEEE] h-14"
              {...register("password")}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <div className="space-y-1">
          <label htmlFor="confirmPassword" className="block text-sm font-medium">
            Confirm Password:
          </label>
          <div className="relative">
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password..."
              className="pr-10 bg-[#EEEEEE] h-14"
              {...register("confirmPassword")}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
        </div>

        <div className="flex gap-3 pt-2 mb-4">
          <Button onClick={() => { setIsOpen(false); setStep(1) }} type="button" variant="outline" className="flex-1 h-12">
            Cancel
          </Button>
          <Button type="submit" className="flex-1 bg-gray-900 hover:bg-gray-800 h-12">
            Create new password
          </Button>
        </div>
      </form>
    </div>
  )
}
