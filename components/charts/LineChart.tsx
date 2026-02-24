"use client"

import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface DataPoint {
  name: string
  value: number
  value2?: number
}

interface LineChartProps {
  data: DataPoint[]
  title?: string
  color?: string
  color2?: string
  height?: number
}

export function LineChart({ data, title, color = "#8884d8", color2 = "#82ca9d", height = 300 }: LineChartProps) {
  return (
    <div className="w-full">
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
      <ResponsiveContainer width="100%" height={height}>
        <RechartsLineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2} />
          {data[0]?.value2 !== undefined && (
            <Line type="monotone" dataKey="value2" stroke={color2} strokeWidth={2} />
          )}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  )
}
