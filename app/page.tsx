"use client"

import { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { BarChart } from '@/components/charts/BarChart'
import { LineChart } from '@/components/charts/LineChart'
import { PieChart } from '@/components/charts/PieChart'
import { DataTable } from '@/components/DataTable'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  microbiomeData, 
  timeSeriesData, 
  diversityIndex, 
  sampleTableData, 
  tableColumns 
} from '@/data/sampleData'

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview')

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Samples</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,234</div>
                  <p className="text-xs text-muted-foreground">
                    +12% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42</div>
                  <p className="text-xs text-muted-foreground">
                    +3 new this week
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg Diversity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3.2</div>
                  <p className="text-xs text-muted-foreground">
                    Shannon Index
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Data Points</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8.5K</div>
                  <p className="text-xs text-muted-foreground">
                    +20% from last month
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Microbiome Composition</CardTitle>
                  <CardDescription>Distribution of major bacterial phyla</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart data={microbiomeData} height={350} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Diversity Index by Sample</CardTitle>
                  <CardDescription>Shannon diversity index across different samples</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart data={diversityIndex} height={350} color="#10b981" />
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case 'microbiome':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Microbiome Analysis</CardTitle>
                <CardDescription>Detailed breakdown of microbial communities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <PieChart data={microbiomeData} title="Phylum Distribution" />
                  <BarChart data={microbiomeData} title="Relative Abundance (%)" color="#8b5cf6" />
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case 'time-series':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Temporal Analysis</CardTitle>
                <CardDescription>Changes in microbial populations over time</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart 
                  data={timeSeriesData} 
                  title="Population Dynamics (Weeks)"
                  color="#3b82f6"
                  color2="#ef4444"
                  height={400}
                />
              </CardContent>
            </Card>
          </div>
        )

      case 'data-table':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Sample Database</CardTitle>
                <CardDescription>Browse and search through all collected samples</CardDescription>
              </CardHeader>
              <CardContent>
                <DataTable 
                  data={sampleTableData} 
                  columns={tableColumns}
                  title="Microbiome Samples"
                />
              </CardContent>
            </Card>
          </div>
        )

      case 'settings':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>Configure your data visualization preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-md">
                    <h3 className="font-medium mb-2">Data Export</h3>
                    <p className="text-sm text-gray-600 mb-3">Configure export formats and data retention</p>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-sm">Include metadata in exports</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-sm">Auto-save visualizations</span>
                      </label>
                    </div>
                  </div>
                  <div className="p-4 border rounded-md">
                    <h3 className="font-medium mb-2">Visualization Preferences</h3>
                    <p className="text-sm text-gray-600 mb-3">Customize chart appearance and behavior</p>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-sm">Show tooltips on hover</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-sm">Animate chart transitions</span>
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
    </div>
  )
}
