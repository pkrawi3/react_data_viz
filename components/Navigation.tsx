"use client"

import { useState } from 'react'
import { Menu, X, Database, BarChart3, PieChart, Activity, Settings } from 'lucide-react'
import { Button } from './ui/button'

interface NavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'microbiome', label: 'Microbiome Analysis', icon: PieChart },
    { id: 'time-series', label: 'Time Series', icon: Activity },
    { id: 'data-table', label: 'Data Table', icon: Database },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Database className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-bold text-gray-900">DataViz Platform</h1>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigationItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => onTabChange(item.id)}
                    className={`${
                      activeTab === item.id
                        ? 'border-blue-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {item.label}
                  </button>
                )
              })}
            </div>
          </div>
          
          <div className="sm:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onTabChange(item.id)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`${
                    activeTab === item.id
                      ? 'bg-blue-50 border-blue-500 text-blue-700'
                      : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
                  } block pl-3 pr-4 py-2 border-l-4 text-base font-medium w-full text-left`}
                >
                  <Icon className="h-4 w-4 mr-2 inline" />
                  {item.label}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
