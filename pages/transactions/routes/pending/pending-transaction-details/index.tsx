"use client"

import { Button } from "@/components/ui/button"
import Sender from "./sender"
import Recipient from "./receiver"
import TransferSummary from "./transfer-summary"
import { TRANSACTION_DETAILS } from "@/pages/transactions/constants/transactions"
import TransactionProgress from "@/pages/transactions/components/transaction-progress"


export default function PendingTransactionDetails() {
  const { transferDetails } = TRANSACTION_DETAILS

  return (
    <div className="w-full">
      <div className="flex justify-end mb-6">
        <Button variant="default" className="bg-black text-white hover:bg-gray-800 rounded-md" >
          Go Back
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Sender {...transferDetails.senderInfo} />
        <Recipient {...transferDetails.recipientInfo} />
      </div>
      <TransferSummary {...transferDetails.transferInfo} />
      <TransactionProgress />
    </div>
  )
}

