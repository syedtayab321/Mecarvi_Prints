// types/couponTypes.ts
export interface Coupon {
  id: number;
  code: string;
  type: "Percentage" | "Fixed";
  amount: string;
  used: string;
  status: "Active" | "Inactive" | "Expired";
}

export type FormData = {
  userType: 'number' | 'customer';
  subject: string;
  phoneNumber: string;
  message: string;
};