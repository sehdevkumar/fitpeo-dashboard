import {
  Card,
  CardContent,
} from "@/components/ui/card";
import React from "react";

export function GenericCard({children}: {children: React.ReactNode}) {
  return (
    <Card className="w-[120px] h-[180px] min-h-max min-w-max bg-[#1F2029]">
      <CardContent style={{padding: '2rem' , height: '100%',width: '100%'}}>{children}</CardContent>
    </Card>
  );
}
