export interface Quotation {
  id: number;
  name: string;
  avatar: string;
  quoteNo: string;
  date: string;
  price: string;
  status: 'Active' | 'Block' | 'Pending' | 'Completed';
}

export interface QuotationResponse {
  cost: string;
  shippingCost: string;
  details: string;
  validityDate: string;
  attachments: File[];
}

export interface QuotationState {
  quotations: Quotation[];
  loading: boolean;
  error: string | null;
  currentQuotation: Quotation | null;
}

export const initialQuotationState: QuotationState = {
  quotations: [],
  loading: false,
  error: null,
  currentQuotation: null,
};