// "use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
// import { useVerifyChangePasswordOtp } from "@/pages/authentication/api/mutations";
import { showerror, showsuccess } from "@/lib/toasts";
import { useVerifyChangePasswordOtp } from "@/modules/authentication/api/mutations";

const otpSchema = z.object({
  otp: z.string().length(4, "OTP required").regex(/^\d+$/, "Only numbers allowed"),
});

type OtpVerificationProps = {
  setStep: React.Dispatch<React.SetStateAction<number | null>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>

}
const Otpform = ({ setStep, setIsOpen }: OtpVerificationProps) => {
  const [otp, setOtp] = useState("");
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(otpSchema),
  });

  const { verifyChangePasswordOtp, isOtpverifying } = useVerifyChangePasswordOtp()

  const onSubmit = async (data: { otp: string }) => {
    try {
      await verifyChangePasswordOtp({ verification_code: data.otp })
      setStep(2)
      showsuccess("OTP verified successfully")
    } catch (error) {
      console.log(error)
      showerror("something went wrong")
    }
  };

  return (
    <div>
      <div className={cn("flex flex-col items-center justify-center  p-6")}>
        <h2 className="text-2xl md:text-[40px] font-bold mb-8">Verification</h2>
        <p className="text-gray-500 mb-4">Enter your 4 digits code that you received on your email.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center space-y-8">
          <InputOTP
            value={otp}
            onChange={(val) => {
              setOtp(val);
              setValue("otp", val);
            }}
            maxLength={4}
            className="flex space-x-2"
          >
            <InputOTPGroup className="flex space-x-4">
              {[...Array(4)].map((_, index) => (
                <InputOTPSlot
                  key={index}
                  index={index}
                  className={`w-14 h-14  outline-[#4D4D4D]  border-3 border-[#4D4D4D]  text-center ring-1 ring-ring  focus:border-guyana text-xl rounded-sm ${errors.otp && "border-red-500"
                    }`}
                />
              ))}
            </InputOTPGroup>
          </InputOTP>

          {errors.otp && <p className="text-red-500 text-sm">{errors.otp.message}</p>}

          <div className="flex items-center gap-4">
            <Button onClick={() => setIsOpen(false)} type="submit" className="w-full h-14 px-4 hover:bg-transparent bg-white text-black border  md:w-1/2 max-w-xs">
              Cancel
            </Button>

            <Button type="submit" className="w-full h-14  md:w-1/2 max-w-xs">
              {isOtpverifying ? "Verifying..." : "Continue"}
            </Button>
          </div>
        </form>

      </div>
    </div>


  );
}
export default Otpform;