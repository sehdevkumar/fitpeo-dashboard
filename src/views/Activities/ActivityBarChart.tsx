
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { GenericCard } from "@/components/GenericCard";
const chartData = [
  { week: 5,value: },
  { week: 9 },
  { week: 11 },
  { week: 13 },
  { week: 15 },
  { week: 17 },
  { week: 19},
  { week: 21},
  { week: 23 },
  { week: 25 },
  { week: 27 },
];

const chartConfig = {
  week: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  }
} satisfies ChartConfig;

export function ActivityBarChart() {
  return (
    <GenericCard>
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />

          <YAxis
            dataKey="desktop"
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
            dataKey="desktop"
            fill="var(--color-desktop)"
            radius={20}
            width={10}
            barSize={20}
          />
        </BarChart>
      </ChartContainer>
    </GenericCard>
  );
}
