import { ReportCardType, ReportProfitCardType } from "@/typings/reports-typings";
import { useEffect, useState } from "react";
import ReportsCards from "./Reports/ReportsCards";
import ProfitCard from "./Reports/ProfitCard";




const ListReports: ReportCardType[] = [
  {
    iconSrc: "",
    label: "Total Orders",
    value: "75",
    percent: "3%",
    isDown: false,
  },
  {
    iconSrc: "",
    label: "Total Delivered",
    value: "70",
    percent: "3%",
    isDown: true,
  },
  {
    iconSrc: "",
    label: "Cancelled",
    value: '05',
    percent: "3%",
    isDown: false,
  },
  {
    iconSrc: "",
    label: "Total Revenue",
    value: '$12k',
    percent: "3%",
    isDown: true,
  },
];


const ProfitCardData: ReportProfitCardType = {
    label: "Net Profit",
    value: "$ 6759.25",
    percent: "3%",
    isDown: false,
    statsData: null
}


function Reports() {

  const [getReports,setReports] = useState<ReportCardType[]>([])
  const [getProfitCardData, setProfitCardData] = useState<ReportProfitCardType>();


  useEffect(()=> {
     if(ListReports) {
         setReports(ListReports);
     }
     if(ProfitCardData) {
         setProfitCardData(ProfitCardData);
     }
  }, [])


  return (
    <div className="flex flex-row gap-x-[20px] w-full justify-center p-[20px]">
      <div className="flex w-full gap-x-[20px] flex-2">
        {getReports.map((item,i) => {
          return (
            <>
              <ReportsCards key={i} {...item} />
            </>
          );
        })}
      </div>
      <div className="flex justify-between w-full flex-1">
              {/* <ProfitCard {...getProfitCardData} /> */}
      </div>
    </div>
  );
}

export default Reports