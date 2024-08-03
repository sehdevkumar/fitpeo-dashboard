import { GenericCard } from "@/components/GenericCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Order } from "@/typings/order-typings";
import { BadgeIcon } from "lucide-react";
import { useEffect, useState } from "react";
const orders: Order[] = [
  {
    customer: "Wade Warren",
    orderNo: 15478256,
    amount: 124.0,
    status: "Delivered",
  },
  {
    customer: "Jane Cooper",
    orderNo: 48965786,
    amount: 365.02,
    status: "Delivered",
  },
  {
    customer: "Guy Hawkins",
    orderNo: 78958215,
    amount: 45.88,
    status: "Cancelled",
  },
  {
    customer: "Kristin Watson",
    orderNo: 20965732,
    amount: 65.0,
    status: "Pending",
  },
  {
    customer: "Cody Fisher",
    orderNo: 95715620,
    amount: 545.0,
    status: "Delivered",
  },
  {
    customer: "Savannah Nguyen",
    orderNo: 78514568,
    amount: 128.2,
    status: "Delivered",
  },
];

function OrdersTable() {
  const [getOrders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    setOrders(orders);
  }, []);

  return (
    <GenericCard>
        <h1 className="font-bold text-[25px]">Recent Orders</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead className="hidden sm:table-cell">Order No.</TableHead>
            <TableHead className="hidden sm:table-cell">Amount</TableHead>
            <TableHead className="hidden md:table-cell">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {getOrders.map((order,index) => {
            return (
              <>
                <TableRow key={index}>
                  <TableCell className="flex gap-[0.5rem]">
                    <div className="font-medium">
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="font-medium">{order.customer}</div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {order.orderNo}
                  </TableCell>

                  <TableCell className="hidden md:table-cell">
                    ${order.amount}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {order.status === "Delivered" && (
                      <p className="bg-[#2EA687] text-center p-[.1rem] max-w-[100px] rounded-lg">
                        {order.status}
                      </p>
                    )}
                    {order.status === "Cancelled" && (
                      <p className="bg-[#603130]  text-center p-[.1rem] max-w-[100px] rounded-lg">
                        {order.status}
                      </p>
                    )}
                    {order.status === "Pending" && (
                      <p className="bg-[#603130]  text-center p-[.1rem] max-w-[100px] rounded-lg">
                        {order.status}
                      </p>
                    )}
                  </TableCell>
                </TableRow>
              </>
            );
          })}
        </TableBody>
      </Table>
    </GenericCard>
  );
}

export default OrdersTable;
