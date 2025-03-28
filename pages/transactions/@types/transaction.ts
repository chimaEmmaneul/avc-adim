export type Transaction = {
  id: string;
  username: string;
  transactionType: string;
  amount: string;
  paymentMethod: string;
  status: string;
};

export type SenderInfo = {
  sendingAmount: string;
  exchangeRate: string;
  totalFees: string;
  amountToConvert: string;
  willGetAmount: string;
  sendingPurpose: string;
};

export type RecipientInfo = {
  name: string;
  email: string;
  phoneNumber: string;
  country: string;
  stateCity: string;
  zipCode: string;
  address: string;
};

export type TransferInfo = {
  transactionId: string;
  transactionType: string;
  bankName: string;
  accountNumber: string;
  paymentMethod: string;
  exchangeRate: string;
  payableAmount: string;
  paymentStatus: string;
  remark: string;
  date: string;
};

export type TransferDetails = {
  transferDetails: {
    senderInfo: SenderInfo;
    recipientInfo: RecipientInfo;
    transferInfo: TransferInfo;
  };
};
