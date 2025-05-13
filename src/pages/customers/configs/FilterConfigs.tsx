import { FilterOption, CustomerStatus } from '@/pages/customers/types/customerTypes';

export const filters: FilterOption[] = [
  { label: 'All Customers', value: 'all' },
  { label: 'Banned Customers', value: 'banned' },
];