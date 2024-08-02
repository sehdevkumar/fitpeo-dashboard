import {
  ReportCardType,
  ReportProfitCardType,
} from "@/typings/reports-typings";
import { useEffect, useState } from "react";
import ReportsCards from "./Reports/ReportsCards";
import ProfitCard from "./Reports/ProfitCard";
import { CircleDollarSign, PackageOpen, ShoppingBag } from "lucide-react";

const ListReports: ReportCardType[] = [
  {
    color: "#4165FF",
    iconSrc: <PackageOpen className="size-8 fill-[#4165FF]" />,
    label: "Total Orders",
    value: "75",
    percent: "3%",
    isDown: false,
  },
  {
    color: "#00CB8C",
    iconSrc: <ShoppingBag className="size-8 fill-[#00CB8C]" />,
    label: "Total Delivered",
    value: "70",
    percent: "3%",
    isDown: true,
  },
  {
    color: "#F45C5C",
    iconSrc: <ShoppingBag className="size-8 fill-[#F45C5C]" />,
    label: "Cancelled",
    value: "05",
    percent: "3%",
    isDown: false,
  },
  {
    color: "#EEB4E4",
    iconSrc: <CircleDollarSign className="size-8 fill-[#EEB4E4]" />,
    label: "Total Revenue",
    value: "$12k",
    percent: "3%",
    isDown: true,
  },
];

const ProfitCardData: ReportProfitCardType = {
  label: "Net Profit",
  value: "$ 6759.25",
  percent: "3%",
  isDown: false,
  statsData: null,
};

function Reports() {
  const [getReports, setReports] = useState<ReportCardType[]>([]);
  const [getProfitCardData, setProfitCardData] =
    useState<ReportProfitCardType>();

  useEffect(() => {
    if (ListReports) {
      setReports(ListReports);
    }
    if (ProfitCardData) {
      setProfitCardData(ProfitCardData);
    }
  }, []);

  return (
    <div className="grid gap-4 justify-between p-4 sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-2 xl:grid-cols-2">
      <div className="flex flex-wrap gap-4 w-full">
        {getReports.map((item, i) => (
          <div key={i} className=" flex-1  max-w-fit">
            <ReportsCards {...item} />
          </div>
        ))}
      </div>
      <div className="flex min-w-max justify-center md:justify-start">
        <div className="w-full max-w-full flex">
          <ProfitCard {...getProfitCardData} />
        </div>
      </div>
    </div>
  );
}

export default Reports;
