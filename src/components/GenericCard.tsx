import {
  Card,
  CardContent,
} from "@/components/ui/card";
import React from "react";

export function GenericCard({children}: {children: React.ReactNode}) {
  return (
    <Card className="w-[inherit] h-[inherit] bg-[#1F2029]">
      <CardContent style={{padding: '2rem' , height: '100%',width: '100%'}}>{children}</CardContent>
    </Card>
  );
}
