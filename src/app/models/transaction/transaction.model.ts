export interface Transaction {
  credit_card: unknown;
  amount: number;
  comment: string;
  date: number;
  currency: string;
}

export const CURRENCIES = [
  'CAD',
  'EUR',
  'KYD',
  'MWK',
  'NAD',
  'USD',
]