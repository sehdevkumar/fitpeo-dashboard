import Header from "@/components/Header";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import Sidebar from "@/components/Sidebar";
import Reports from "./Reports";
import Activities from "./Activities";
import Orders from "./Orders";



export function Dashboard() {
  return (
    <div className="grid h-screen w-full pl-[56px]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <LayoutWrapper>
          <h2>Dashboard</h2>
          <div className="w-full h-full flex flex-col gap-y-5">
             <Reports/>
             <Activities/>
             <Orders/>
          </div>
        </LayoutWrapper>
      </div>
    </div>
  );
}
