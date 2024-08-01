import { ReportCardType } from "@/typings/reports-typings";
import { ArrowDown, ArrowUp, TriangleIcon } from "lucide-react";
import { GenericCard } from "../../components/GenericCard";

function ReportsCards({
  iconSrc,
  label,
  value,
  percent,
  isDown,
}: ReportCardType) {
  return (
    <GenericCard>
      <div className="flex flex-col gap-y-[1rem] h-full min-w-[10rem] justify-between rounded-[10px]">
        <div className="flex justify-start flex-1">
          <div>
            <img src={iconSrc} />
            <span>{label}</span>
          </div>
          <div></div>
        </div>
        <div className="flex h-full items-center justify-between flex-1">
          <div>{value}</div>
          <div className="flex justify-center items-center gap-x-[3px]">
            {!isDown && (
              <TriangleIcon fill="#E55962" className="size-2 fill-[#0EBC8A]" />
            )}
            {isDown && (
              <TriangleIcon fill="#E55962" rotate={90} className="size-2 fill-[#E55962] rotate-[180deg]" />
            )}
            {percent}
          </div>
        </div>
      </div>
    </GenericCard>
  );
}

export default ReportsCards;
