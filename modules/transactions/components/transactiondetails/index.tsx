"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import { useGetTransactionDetails } from '../../api/mutations'
import Deposite from '../deposit'
import WithDrawal from '../withdrawal'
import Transfer from '../transfer'
import DepositSummarySkeleton from '@/skeleonloaders/depositskeleton'

const TransactionDetails = () => {
  const pathname = usePathname()
  const transaction_id = pathname?.split("/").pop()
  const { transactionDetails, isLoading } = useGetTransactionDetails({ transaction_id })


  const renderTransactionDetails = (type: string) => {
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
      {isLoading ? <DepositSummarySkeleton /> : renderTransactionDetails(transactionDetails?.data.type as string)}
    </>
  )
}

export default TransactionDetails