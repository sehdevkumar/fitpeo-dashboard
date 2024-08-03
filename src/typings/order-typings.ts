export interface Order {
  customer: string;
  orderNo: number;
  amount: number;
  status: "Delivered" | "Cancelled" | "Pending";
}
export interface Feedback {
  customer: string;
  rating: number;
  comment: string;
}
