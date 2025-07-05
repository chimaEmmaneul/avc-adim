"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import { useGetTransactionDetails } from '../../api/mutations'
import { TRANSACTION_DETAILS } from '../../constants/transactions'
import Deposite from '../deposit'
import WithDrawal from '../withdrawal'
import Transfer from '../transfer'

const TransactionDetails = () => {
  const { transferDetails: { transferInfo } } = TRANSACTION_DETAILS
  const pathname = usePathname()
  const transaction_id = pathname?.split("/").pop()!
  const { transactionDetails, isLoading } = useGetTransactionDetails({ transaction_id })
  console.log(transactionDetails, "trasacitnodeta")

  if (isLoading) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  const renderTransactionDetails = (type: string) => {
    console.log(type, "type")
    switch (type) {
      case "deposit":
        return <Deposite depositeInfo={transactionDetails?.data} />
      case "withdrawal":
        return <WithDrawal withdrawalInfo={transactionDetails?.data} />
      case "transfer":
        return <Transfer transferInfo={transactionDetails?.data} />
      default:
        break;
    }
  }

  return (
    <>
      {renderTransactionDetails(transactionDetails?.data.type as string)}
    </>
  )
}

export default TransactionDetails