export interface SalesReport {
  id: number;
  productName: string;
  productImage: string;
  totalEarning: number;
  refunds: number;
  createDate: string;
  status: "Completed" | "Pending" | "Refunded";
}

export interface Referral {
  id: number;
  username: string;
  avatar: string;
  referralCount: number;
  earned: number;
  joinDate: string;
  status: "Active" | "Inactive" | "Suspended";
}