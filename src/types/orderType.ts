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

export interface OrderProof {
  id: number;
  customer: string;
  orderNumber: string;
  email: string;
  orderDate: string;
  description: string;
  status: "Pending" | "Approved" | "Rejected" | "Completed";
}

export interface OrderVerification {
  id: number;
  customer: {
    name: string;
    avatar: string;
  };
  orderNumber: string;
  email: string;
  orderDate: string;
  description: string;
  status: "Pending" | "Verified" | "Rejected" | "Completed";
}

export type AllOrder = {
  id: number;
  customer: {
    name: string;
    avatar: string;
  };
  orderNumber: string;
  orderDate: string;
  orderTotal: string;
  paymentMethod: string;
  paymentStatus: "Paid" | "Pending" | "Failed" | "Refunded";
  orderStatus: "Processing" | "Shipped" | "Delivered" | "Cancelled";
};

export type CompletedOrder = {
  id: number;
  customer: {
    name: string;
    avatar: string;
  };
  orderNumber: string;
  orderDate: string;
  orderType: string;
  orderTotal: string;
  paymentMethod: string;
  seller: string;
  trackingNumber?: string;
};

export type PendingOrder = {
  id: number;
  customer: {
    name: string;
    avatar: string;
  };
  orderNumber: string;
  orderDate: string;
  orderType: string;
  orderTotal: string;
  paymentMethod: string;
};

export type ProcessingOrder = {
  id: number;
  customer: {
    name: string;
    avatar: string;
  };
  orderNumber: string;
  orderDate: string;
  orderType: string;
  orderTotal: string;
  paymentMethod: string;
  trackingNumber?: string;
};

export interface RefundOrder {
  id: number;
  customer: string;
  orderNumber: string;
  orderDate: string;
  orderTotal: string;
  seller: string;
  refundReason: string;
  refundTotal: string;
  refundMethod: string;
  approvedBy: string;
  status: "Pending" | "Approved" | "Rejected" | "Processed";
}

export type ReplacementOrder = {
  id: number;
  customer: {
    name: string;
    avatar: string;
  };
  orderNumber: string;
  orderDate: string;
  orderTotal: string;
  seller: string;
  refundReason: string;
  refundTotal: string;
  refundMethod: string;
  approvedBy: string;
  status: "Pending" | "Approved" | "Rejected" | "Completed";
};

export type ReturnOrder = {
  id: number;
  customer: {
    name: string;
    avatar: string;
  };
  orderNumber: string;
  orderDate: string;
  orderTotal: string;
  seller: string;
  returnReason: string;
  returnTotal: string;
  returnTrack: string;
};