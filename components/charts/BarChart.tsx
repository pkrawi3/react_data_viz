"use client"

import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface DataPoint {
  name: string
  value: number
  category?: string
}

interface BarChartProps {
  data: DataPoint[]
  title?: string
  color?: string
  height?: number
}

export function BarChart({ data, title, color = "#8884d8", height = 300 }: BarChartProps) {
  return (
    <div className="w-full">
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
      <ResponsiveContainer width="100%" height={height}>
        <RechartsBarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill={color} />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  )
}
