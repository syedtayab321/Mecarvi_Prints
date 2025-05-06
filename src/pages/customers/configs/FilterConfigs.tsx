import { FilterOption, CustomerStatus } from '@/pages/customers/types/customerTypes';

export const filters: FilterOption[] = [
  { label: 'All Customers', value: 'all' },
  { label: 'Banned Customers', value: 'banned' },
  { label: 'Subscription Plans', value: 'subscription' },
  { label: 'Affiliate Withdrawals', value: 'affiliate_withdrawal' },
  { label: 'Transactions', value: 'transaction' },
  { label: 'Customer Verification', value: 'verification' },
];