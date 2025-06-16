export interface Donation {
  id: number;
  customer: {
    name: string;
    avatar: string;
  };
  date: string;
  orderNo: string;
  charity: {
    name: string;
    logo: string;
  };
  amount: number;
  status: "Completed" | "Pending" | "Failed" | "Refunded";
}