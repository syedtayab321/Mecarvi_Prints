// types/quotation.ts
export interface Quotation {
  id: number;
  name: string;
  avatar: string;
  quoteNo: string;
  date: string;
  seller: string;
  product: string;
  price: string;
  status: "Active" | "Block" | "Pending" | "Completed";
}