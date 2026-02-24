"use client"

import { useState } from 'react'
import { Search, Filter, Download, ChevronUp, ChevronDown } from 'lucide-react'
import { Button } from './ui/button'

interface Column {
  key: string
  label: string
  sortable?: boolean
}

interface DataTableProps {
  data: Record<string, any>[]
  columns: Column[]
  title?: string
  searchable?: boolean
}

export function DataTable({ data, columns, title, searchable = true }: DataTableProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

  const filteredData = data.filter(row =>
    columns.some(column =>
      String(row[column.key]).toLowerCase().includes(searchTerm.toLowerCase())
    )
  )

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortColumn) return 0
    
    const aValue = a[sortColumn]
    const bValue = b[sortColumn]
    
    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1
    return 0
  })

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  const exportToCSV = () => {
    const headers = columns.map(col => col.label).join(',')
    const rows = sortedData.map(row => 
      columns.map(col => `"${row[col.key]}"`).join(',')
    )
    const csv = [headers, ...rows].join('\n')
    
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'data.csv'
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="w-full">
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
      
      {searchable && (
        <div className="flex items-center gap-4 mb-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Button onClick={exportToCSV} variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </div>
      )}

      <div className="overflow-x-auto border border-gray-200 rounded-md">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {column.sortable ? (
                    <button
                      onClick={() => handleSort(column.key)}
                      className="flex items-center gap-1 hover:text-gray-700"
                    >
                      {column.label}
                      {sortColumn === column.key && (
                        sortDirection === 'asc' ? 
                          <ChevronUp className="h-4 w-4" /> : 
                          <ChevronDown className="h-4 w-4" />
                      )}
                    </button>
                  ) : (
                    column.label
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {sortedData.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No data found
        </div>
      )}
    </div>
  )
}
