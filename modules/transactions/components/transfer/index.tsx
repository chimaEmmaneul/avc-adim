"use client"
import { Button } from "@/components/ui/button"
import Sender from "./sender"
import Recipient from "./receiver"
import TransferSummary from "./transfer-summary"

import { Transaction } from "../../@types/transaction"

type TransferProps = {
  transferInfo: Transaction | undefined
}
export default function Transfer({ transferInfo }: TransferProps) {



  return (
    <div className="w-full">
      <div className="flex justify-end mb-6">
        <Button variant="default" className="bg-black text-white hover:bg-gray-800 rounded-md" >
          Go Back
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Sender senderInfo={transferInfo} />
        <Recipient recipientInfo={transferInfo} />
      </div>
      <TransferSummary transferInfo={transferInfo} />
      {/* <TransactionProgress /> */}
    </div>
  )
}

