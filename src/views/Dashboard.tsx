import Header from "@/components/Header";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import Sidebar from "@/components/Sidebar";



export function Dashboard() {
  return (
      <div className="grid h-screen w-full pl-[56px]">
        <Sidebar/>
        <div className="flex flex-col">
          <Header/>
          <LayoutWrapper>
              Hello 
          </LayoutWrapper>
        </div>
      </div>
  );
}
