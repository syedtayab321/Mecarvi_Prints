export interface Business {
  id: number;
  businessName: string;
  name: string;
  email: string;
  phone: string;
  percentage: string;
  allowedBalance: string;
  usedBalance: string;
  status: "Active" | "Block" | "Pending" | "Completed";
}

export interface BusinessVerification {
  id: number;
  businessName: string;
  businessEmail: string;
  description: string;
  status: "Verified" | "Pending" | "Rejected" | "In Review";
}