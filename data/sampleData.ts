export const microbiomeData = [
  { name: 'Bacteroidetes', value: 45, category: 'Phylum' },
  { name: 'Firmicutes', value: 30, category: 'Phylum' },
  { name: 'Proteobacteria', value: 15, category: 'Phylum' },
  { name: 'Actinobacteria', value: 7, category: 'Phylum' },
  { name: 'Verrucomicrobia', value: 3, category: 'Phylum' },
]

export const timeSeriesData = [
  { name: 'Week 1', value: 120, value2: 85 },
  { name: 'Week 2', value: 135, value2: 92 },
  { name: 'Week 3', value: 125, value2: 88 },
  { name: 'Week 4', value: 140, value2: 95 },
  { name: 'Week 5', value: 155, value2: 102 },
  { name: 'Week 6', value: 160, value2: 108 },
  { name: 'Week 7', value: 165, value2: 112 },
  { name: 'Week 8', value: 170, value2: 115 },
]

export const diversityIndex = [
  { name: 'Sample A', value: 2.8 },
  { name: 'Sample B', value: 3.2 },
  { name: 'Sample C', value: 2.5 },
  { name: 'Sample D', value: 3.8 },
  { name: 'Sample E', value: 2.9 },
  { name: 'Sample F', value: 3.4 },
]

export const sampleTableData = [
  { id: 'S001', sampleType: 'Soil', location: 'Forest A', depth: '0-10cm', date: '2024-01-15', diversity: 3.2, ph: 6.5 },
  { id: 'S002', sampleType: 'Water', location: 'River B', depth: 'Surface', date: '2024-01-16', diversity: 2.8, ph: 7.2 },
  { id: 'S003', sampleType: 'Gut', location: 'Human', depth: 'Colon', date: '2024-01-17', diversity: 3.5, ph: 6.8 },
  { id: 'S004', sampleType: 'Soil', location: 'Forest C', depth: '10-20cm', date: '2024-01-18', diversity: 2.9, ph: 6.2 },
  { id: 'S005', sampleType: 'Ocean', location: 'Pacific', depth: '1000m', date: '2024-01-19', diversity: 4.1, ph: 8.1 },
  { id: 'S006', sampleType: 'Soil', location: 'Desert D', depth: '0-5cm', date: '2024-01-20', diversity: 1.8, ph: 8.5 },
  { id: 'S007', sampleType: 'Freshwater', location: 'Lake E', depth: '5m', date: '2024-01-21', diversity: 2.4, ph: 7.8 },
  { id: 'S008', sampleType: 'Gut', location: 'Mouse', depth: 'Cecum', date: '2024-01-22', diversity: 2.6, ph: 6.9 },
]

export const tableColumns = [
  { key: 'id', label: 'Sample ID', sortable: true },
  { key: 'sampleType', label: 'Sample Type', sortable: true },
  { key: 'location', label: 'Location', sortable: true },
  { key: 'depth', label: 'Depth', sortable: false },
  { key: 'date', label: 'Collection Date', sortable: true },
  { key: 'diversity', label: 'Diversity Index', sortable: true },
  { key: 'ph', label: 'pH Level', sortable: true },
]
