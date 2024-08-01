import { GenericCard } from "@/components/GenericCard";
import { ReportProfitCardType } from "@/typings/reports-typings";
import { ArrowDown, ArrowUp } from "lucide-react";

function ProfitCard({ label,
  value,
  percent,
  isDown ,
  statsData}: 
  ReportProfitCardType) {
  return (
    <GenericCard>
      <div className="flex flex-row min-w-[10rem] justify-between rounded-[10px]">
        <div className="flex justify-between">
          <div>{label}</div>
          <div>{value}</div>
          <div>
            {isDown && <ArrowDown />}
            {!isDown && <ArrowUp />}
            {percent}
          </div>
        </div>

        <div className="flex justify-start">
             
        </div>
      </div>
    </GenericCard>
  );
}

export default ProfitCard