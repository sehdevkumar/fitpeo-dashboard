import FeedbackList from "./Orders/Feedbacks";
import OrdersTable from "./Orders/OrdersTable";

export default function Orders() {
  return (
     
     <div className="grid gap-4 justify-between p-4 sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-2 xl:grid-cols-2">
        <div className="flex flex-wrap flex-1 gap-4 w-full">
        <OrdersTable/>
        </div>
        <div className="flex min-w-max justify-center md:justify-start">
          <div className="w-full max-w-full flex flex-1">
            <FeedbackList/>
          </div>
        </div>
      </div>

  )
}
