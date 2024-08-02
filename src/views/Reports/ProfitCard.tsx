import { GenericCard } from "@/components/GenericCard";
import { ReportProfitCardType } from "@/typings/reports-typings";
import { ArrowDown, ArrowUp, TriangleIcon } from "lucide-react";
import { ProfitDonutChart } from "./ProfitChart";

function ProfitCard({ label,
  value,
  percent,
  isDown ,
  statsData}: 
  ReportProfitCardType) {
  return (
    <GenericCard>
      <div className="flex w-full flex-wrap flex-row h-full justify-between rounded-[10px]">
        <div className="flex justify-between h-full flex-col place-content-between">
          <div className="h-full flex-1">{label}</div>
          <div className="text-[50px] font-bold flex-1">{value}</div>
          <div className="flex justify-start items-center flex-1 gap-x-[3px]">
            {!isDown && (
              <TriangleIcon fill="#E55962" className="size-3 fill-[#0EBC8A]" />
            )}
            {isDown && (
              <TriangleIcon
                fill="#E55962"
                rotate={90}
                className="size-3 fill-[#E55962] rotate-[180deg]"
              />
            )}
            {percent}
          </div>
        </div>

        <div className="flex  justify-start ">
           
           <ProfitDonutChart/>

        </div>
      </div>
    </GenericCard>
  );
}

export default ProfitCard