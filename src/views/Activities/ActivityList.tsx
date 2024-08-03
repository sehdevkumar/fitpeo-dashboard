import { GenericCard } from "@/components/GenericCard";
import { ChevronRight, Goal, Soup, SquareMenu } from "lucide-react";
import React, { useEffect, useState } from "react";

interface ActivityType {
  icon: React.ReactNode | undefined;
  value: string;
  color:string;
}

const ActivityData: ActivityType[] = [
  {
    icon: <Goal />,
    value: "Goals",
    color: "#633237",
  },
  {
    icon: <Soup />,
    value: "Popular Dishes",
    color: "#2B3168",
  },
  ,
  {
    icon: <SquareMenu />,
    value: "Menus",
    color: "#204A60",
  },
];

function ActivityList() {
  const [getData, setData] = useState<ActivityType[]>([]);

  useEffect(() => {
    setData(ActivityData);
  }, []);

  return (
    <GenericCard>
      <div className="flex flex-col w-full justify-between h-full">
        {getData?.map((d) => {
          return (
            <div key={d.value} className="flex justify-between">
              <div
                className="p-[2px] w-[60px] h-[60px] min-h-max min-w-max flex justify-center items-center rounded-full"
                style={{ background: `${d.color}` }}
              >
                {d.icon}
              </div>
              <div className="text-left">{d.value}</div>
              <ChevronRight className="flex justify-self-end" />
            </div>
          );
        })}
      </div>
    </GenericCard>
  );
}

export default ActivityList;
