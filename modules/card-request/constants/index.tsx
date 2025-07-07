export type RequestData = {
  request_id: string
  first_name: string
  last_name: string
  email: string
  country: string
  pickup_location: string
  request_date: string
  account_number?: string;
  phone_number?: string
  location_hour?: string
  card_type?: string;
  card_fee?: string;
  status: "approved" | "rejected" | "pending"
}

export const sampleData: RequestData[] = [
  {
    request_id: "REQ-20234",
    first_name: "Williams",
    last_name: "O Godwin",
    email: "williamsgodwin@gmail.com",
    country: "Kenya",
    pickup_location: "Nairobi City Center",
    request_date: "2025-05-01T12:30:00",
    status: "approved",
  },
  {
    request_id: "REQ-20234",
    first_name: "Sam",
    last_name: "Oguns",
    email: "samoguns88@gmail.com",
    country: "Nigeria",
    pickup_location: "Lagos Island",
    request_date: "2025-05-02T12:30:00",
    status: "rejected",
  },
  {
    request_id: "REQ-20234",
    first_name: "Taiwo",
    last_name: "Hassan",
    email: "taiwohassan@gmail.com",
    country: "Ghana",
    pickup_location: "Kumasi City",
    request_date: "2025-05-03T12:30:00",
    status: "pending",
  },
  {
    request_id: "REQ-20234",
    first_name: "Sumsuddeen",
    last_name: "Giwa",
    email: "samsuddengiwa@gmail.com",
    country: "Kenya",
    pickup_location: "Nairobi City Center",
    request_date: "2025-05-04T12:30:00",
    status: "approved",
  },
  {
    request_id: "REQ-20234",
    first_name: "Awolola",
    last_name: "Tobiloba",
    email: "awololtob@gmail.com",
    country: "Nigeria",
    pickup_location: "Lagos Island",
    request_date: "2025-05-05T12:30:00",
    status: "pending",
  },
  {
    request_id: "REQ-20234",
    first_name: "Kazeem",
    last_name: "Akeem",
    email: "kazeemakeem34@gmail.com",
    country: "Ghana",
    pickup_location: "Kumasi City",
    request_date: "2025-05-06T12:30:00",
    status: "rejected",
  },
  {
    request_id: "REQ-20234",
    first_name: "Abass",
    last_name: "Odunola",
    email: "abassodunola56@gmail.com",
    country: "Kenya",
    pickup_location: "Nairobi City Center",
    request_date: "2025-05-07T12:30:00",
    status: "approved",
  },
  {
    request_id: "REQ-20234",
    first_name: "Abah",
    last_name: "Gift",
    email: "abahgift406@gmail.com",
    country: "Nigeria",
    pickup_location: "Lagos Island",
    request_date: "2025-05-08T12:30:00",
    status: "rejected",
  },
]