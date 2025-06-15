export interface Order {
  id: string;
  orderNumber: string;
  customer: string;
  date: string;
  total: number;
  paymentMethod: string;
  status: string;
  paymentStatus?: string;
  type?: string;
  trackingNumber?: string;
  seller?: string;
  cancelReason?: string;
  returnReason?: string;
  returnTotal?: number;
  returnTracking?: string;
  returnStatus?: string;
  refundReason?: string;
  refundTotal?: number;
  refundMethod?: string;
  approvedBy?: string;
  deliveryDate?: string;
}


export type TableColumn = {
  header: string;
  field: string;
  type?: 'text' | 'badge' | 'progress' | 'date' | 'avatar' | 'currency';
};