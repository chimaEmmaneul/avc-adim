"use client"
import React, { useState } from 'react'
import {
  AlertDialog,
  AlertDialogContent,
} from "@/components/ui/alert-dialog"
import Otpform from './otpform';
import ResetPassword from './reset-password';


type RequestChangePasswordProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const RequestChangePassword = ({ isOpen, setIsOpen }: RequestChangePasswordProps) => {
  const [step, setStep] = useState<number | null>(1);


  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>

      <AlertDialogContent >
        {step === 1 && (
          <Otpform setStep={setStep} />
        )}

        {step === 2 && (
          <ResetPassword setStep={setStep} setIsOpen={setIsOpen} />
        )}
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default RequestChangePassword