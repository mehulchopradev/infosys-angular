export type Address = {
  state: string;
  country: string;
  postalCode: number;
}

export type User = {
  username: string;
  password: string;
  address: Address;
  contactNos?: string[]
}