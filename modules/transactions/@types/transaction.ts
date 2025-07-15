// export type Transaction = {
//   id: string;
//   username: string;
//   transactionType: string;
//   amount: string;
//   paymentMethod: string;
//   status: string;
// };

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

export type Request = {
  search: string;
  page: number;
};
export type TransactionResponse = {
  success: boolean;
  message: string;
  data: Transaction[];
  meta: PaginationMeta;
};
export type TransactionDetailsResponse = {
  success: boolean;
  message: string;
  data: Transaction;
};

export interface PaginationMeta {
  current_page: number;
  total: number;
  per_page: number;
  last_page: number;
}
export type Transaction = {
  id: number;
  transaction_id: string;
  reference: string;
  type: "deposit" | "withdrawal" | string;
  status: "successful" | "pending" | "failed" | string;
  sending_amount: number;
  recieved_amount: number;
  remark: string;
  currency_code: string;
  reciever_currency: string | null;
  reward_point: number;
  sender: CardHolder;
  recipient: CardHolder;
  user: UserInfo;
  date: string;
};

export type CardHolder = {
  id: number;
  cvv: string;
  address: string | null;
  balance: number;
  user_id: number;
  zip_code: string | null;
  card_number: string;
  expiry_date: string;
  account_name: string;
  currency_code: string;
  account_number: string;
};

export type UserInfo = {
  name: string;
  email: string;
  phone: string;
  country: string;
  account_number: string;
  address: string;
  state: string;
  city: string;
};
