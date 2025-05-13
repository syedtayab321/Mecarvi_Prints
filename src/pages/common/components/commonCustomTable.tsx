// components/FinanceTable/FinanceTable.tsx
"use client";

import React, { FC } from "react";
import { FaEye, FaTrash, FaEdit, FaSearch, FaFilter } from "react-icons/fa";

interface FinanceTableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onSearch: (query: string) => void;
  onFilter?: (filter: string) => void;
  filterOptions?: FilterOption[];
  title: string;
}

export interface TableColumn<T> {
  key: string;
  header: string;
  render?: (item: T) => React.ReactNode;
  width?: string;
}

interface FilterOption {
  value: string;
  label: string;
}

const CommonCustomTable = <T,>({
  data,
  columns,
  currentPage,
  totalPages,
  onPageChange,
  onSearch,
  onFilter,
  filterOptions,
  title,
}: FinanceTableProps<T>) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <div className="flex gap-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600 text-black"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
          {onFilter && filterOptions && (
            <div className="relative">
              <select
                className="appearance-none pl-3 pr-8 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600 text-black"
                onChange={(e) => onFilter(e.target.value)}
              >
                <option value="">All Status</option>
                {filterOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <FaFilter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          )}
          {/* <button className="bg-violet-600 text-white px-4 py-2 rounded-md hover:bg-violet-700 text-sm">
            Import
          </button> */}
        </div>
      </div>

      <table className="min-w-full text-sm text-left border-collapse">
        <thead className="bg-gray-50 text-gray-500 uppercase text-xs border-b">
          <tr>
            <th className="p-3"><input type="checkbox" /></th>
            {columns.map((column) => (
              <th key={column.key} className="p-3" style={{ width: column.width }}>
                {column.header}
              </th>
            ))}
            <th className="p-3">Options</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-3">
                <input type="checkbox" />
              </td>
              {columns.map((column) => (
                <td key={column.key} className="p-3 text-black">
                  {column.render ? column.render(item) : (item as any)[column.key]}
                </td>
              ))}
              <td className="p-3 flex items-center gap-3">
                <button className="text-blue-600 hover:text-blue-800">
                  <FaEye size={14} />
                </button>
                <button className="text-green-600 hover:text-green-800">
                  <FaEdit size={14} />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <FaTrash size={14} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-500">
          Showing {data.length} of {data.length} entries
        </div>
        <div className="flex space-x-1">
          <button 
            className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50 text-black"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            «
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`px-3 py-1 border rounded ${
                currentPage === page
                  ? "bg-violet-600 text-white"
                  : "hover:bg-gray-100 text-black"
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ))}
          <button 
            className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50 text-black"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommonCustomTable;