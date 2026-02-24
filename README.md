# Data Visualization Dashboard

A modern, interactive data visualization platform built with Next.js, designed for analyzing and exploring complex datasets similar to microbiome data platforms.

## Features

### 📊 Interactive Visualizations
- **Bar Charts**: Perfect for comparing categorical data and diversity indices
- **Line Charts**: Ideal for time series analysis and temporal trends
- **Pie Charts**: Great for showing composition and distribution
- **Data Tables**: Sortable, searchable tables with export functionality

### 🎨 Modern UI/UX
- Responsive design that works on all devices
- Clean, professional interface with Tailwind CSS
- Accessible components built with Radix UI
- Smooth transitions and micro-interactions

### 🔧 Technical Features
- **Search & Filter**: Real-time data filtering across all visualizations
- **Export Options**: Download data as CSV from tables
- **Sortable Tables**: Click column headers to sort data
- **Mobile Navigation**: Hamburger menu for mobile devices

### 📱 Dashboard Sections
- **Overview**: Key metrics and summary visualizations
- **Microbiome Analysis**: Detailed breakdown of microbial communities
- **Time Series**: Population dynamics and temporal analysis
- **Data Table**: Browseable and searchable sample database
- **Settings**: Configure visualization preferences

## Tech Stack

- **Framework**: Next.js 16 with TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **UI Components**: Radix UI + Custom components
- **Icons**: Lucide React
- **Build Tool**: Turbopack

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pkrawi3/react_data_viz.git
cd react_data_viz
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main dashboard page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── charts/           # Chart components
│   ├── Navigation.tsx    # Main navigation
│   └── DataTable.tsx     # Interactive data table
├── data/                 # Sample data
│   └── sampleData.ts     # Mock microbiome data
└── lib/                  # Utility functions
    └── utils.ts          # Helper functions
```

## Customization

### Adding New Charts
1. Create a new component in `components/charts/`
2. Use Recharts for consistent styling
3. Import and use in `app/page.tsx`

### Modifying Data
Update `data/sampleData.ts` to use your own datasets:
- Update the data structures
- Modify table columns in `tableColumns`
- Adjust chart data accordingly

### Styling
- Modify `app/globals.css` for global styles
- Use Tailwind classes for component styling
- CSS variables are defined for consistent theming

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Recharts Documentation](https://recharts.org/) - powerful charting library
- [Tailwind CSS](https://tailwindcss.com/) - utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - accessible UI components

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
