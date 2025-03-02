"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "Jan", wins: 4, losses: 6, earnings: 120 },
  { name: "Feb", wins: 6, losses: 4, earnings: 180 },
  { name: "Mar", wins: 8, losses: 5, earnings: 240 },
  { name: "Apr", wins: 10, losses: 3, earnings: 300 },
  { name: "May", wins: 12, losses: 4, earnings: 360 },
  { name: "Jun", wins: 9, losses: 6, earnings: 270 },
]

export function UserStats() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="name" stroke="#888" />
          <YAxis yAxisId="left" stroke="#888" />
          <YAxis yAxisId="right" orientation="right" stroke="#888" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#333",
              borderColor: "#555",
              color: "white",
            }}
          />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="wins" stroke="#10b981" activeDot={{ r: 8 }} />
          <Line yAxisId="left" type="monotone" dataKey="losses" stroke="#ef4444" />
          <Line yAxisId="right" type="monotone" dataKey="earnings" stroke="#f59e0b" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

