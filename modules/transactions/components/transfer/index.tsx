"use client"
import { Button } from "@/components/ui/button"
import Sender from "./sender"
import Recipient from "./receiver"
import TransferSummary from "./transfer-summary"

import { Transaction } from "../../@types/transaction"
import { useRouter } from "next-nprogress-bar"

type TransferProps = {
  transferInfo: Transaction | undefined
}
export default function Transfer({ transferInfo }: TransferProps) {
  const router = useRouter()


  return (
    <div className="w-full">
      <div className="flex justify-start">
        <button onClick={() => router.back()} className="bg-main text-white px-4 py-2 rounded-md font-medium">Go Back</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-6">
        <Sender senderInfo={transferInfo} />
        <Recipient recipientInfo={transferInfo} />
      </div>
      <TransferSummary transferInfo={transferInfo} />
    </div>
  )
}

