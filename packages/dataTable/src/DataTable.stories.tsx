import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './index';
import { type ColDef } from 'ag-grid-community';
import React from 'react';

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: { 
    controls: { expanded: true },
    layout: 'padded',
  },
  args: {
    domLayout: "autoHeight",
    defaultColDef: {
      flex: 1
    }
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof DataTable>;

const sampleRowData = [
  { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  { make: "Ford", model: "F-Series", price: 33850, electric: false },
  { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  { make: "BMW", model: "3 Series", price: 41450, electric: false },
  { make: "Rivian", model: "R1T", price: 73000, electric: true },
];

const basicColumnDefs: ColDef[] = [
  { field: "make", headerName: "Make" },
  { field: "model", headerName: "Model" },
  { field: "price", headerName: "Price" },
  { field: "electric", headerName: "Electric" }
];

export const Default: Story = {
  args: {
    rowData: sampleRowData,
    columnDefs: basicColumnDefs,
  },
};

export const WithFormatting: Story = {
  args: {
    rowData: sampleRowData,
    columnDefs: [
      { field: "make", headerName: "Make", sortable: true, filter: true },
      { field: "model", headerName: "Model", sortable: true, filter: true },
      { 
        field: "price", 
        headerName: "Price",
        sortable: true,
        filter: 'agNumberColumnFilter',
        valueFormatter: (params) => `$${params.value.toLocaleString()}`,
      },
      { 
        field: "electric", 
        headerName: "Electric",
        filter: true,
        cellRenderer: (params: any) => params.value ? '✓' : '✗',
      }
    ],

  },
};

export const Sortable: Story = {
  args: {
    rowData: sampleRowData,
    columnDefs: basicColumnDefs.map(col => ({ ...col, sortable: true })),
  },
};

export const Filterable: Story = {
  args: {
    rowData: sampleRowData,
    columnDefs: basicColumnDefs.map(col => ({ ...col, filter: true })),
  },
};

export const RowSelection: Story = {
  args: {
    rowData: sampleRowData,
    columnDefs: basicColumnDefs,
  },
  render: (props) => {
    const [mode, setMode] = React.useState<"singleRow" | "multiRow">("multiRow");
    
    return (
      <div>
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="selection-mode" style={{ marginRight: '8px' }}>
            Selection Mode:
          </label>
          <select 
            id="selection-mode"
            value={mode} 
            onChange={(e) => setMode(e.target.value as "singleRow" | "multiRow")}
            style={{ padding: '8px' }}
          >
            <option value="singleRow">Single Row</option>
            <option value="multiRow">Multi Row</option>
          </select>
        </div>

        <DataTable 
          rowSelection={{
            mode,
          }} 
          {...props} 
        />
      </div>
    );
  }
};

export const Pagination: Story = {
  args: {
    rowData: sampleRowData,
    columnDefs: basicColumnDefs,
    pagination: true,
    paginationPageSize: 3,
    paginationPageSizeSelector: [3, 5, 10],
  },
};

export const Empty: Story = {
  args: {
    rowData: [],
    columnDefs: basicColumnDefs,
  },
};

export const LargeDataset: Story = {
  args: {
    rowData: Array.from({ length: 100 }, (_, i) => ({
      make: `Make ${i}`,
      model: `Model ${i}`,
      price: Math.floor(Math.random() * 100000),
      electric: Math.random() > 0.5,
    })),
    columnDefs: basicColumnDefs.map(col => ({ 
      ...col, 
      sortable: true, 
      filter: true 
    })),
    pagination: true,
    paginationPageSize: 20,
  },
};