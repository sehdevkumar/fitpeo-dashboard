
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { GenericCard } from "@/components/GenericCard";
const chartData = [
  { week: 5, value: Math.random()*100 },
  { week: 9, value: Math.random()*100 },
  { week: 11, value: Math.random()*100 },
  { week: 13, value: Math.random()*100 },
  { week: 15, value: Math.random()*100 },
  { week: 17, value: Math.random()*100 },
  { week: 19, value: Math.random()*100 },
  { week: 21, value: Math.random()*100 },
  { week: 23, value: Math.random()*100 },
  { week: 25, value: Math.random()*100 },
  { week: 27, value: Math.random()*100 },
];

const chartConfig = {
  week: {
    label: "Week",
    color: "red",
  },
  value: {
    label: "Value",
    color: "red",
  }
} satisfies ChartConfig;

export function ActivityBarChart() {
  return (
    <GenericCard>
      <h1 className="font-bold text-[25px]">Activity</h1>
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid stroke="#4B4C53" vertical={false} />
          <XAxis
            dataKey="week"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value}
          />

          <YAxis
            dataKey="value"
            tickLine={false}
            tickMargin={10}
            tickCount={4}
            axisLine={false}
            tickFormatter={(value, i) => 5 * i + (i === 0 ? "" : "k")}
          />

          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dashed" />}
          />
          <Bar
            dataKey="value"
            fill="#7094FC"
            radius={20}
            width={10}
            barSize={20}
          />
        </BarChart>
      </ChartContainer>
    </GenericCard>
  );
}
