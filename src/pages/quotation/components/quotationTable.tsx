"use client";

import React, { FC } from "react";
import { FaEye, FaTrash, FaEdit, FaSearch, FaFilter } from "react-icons/fa";
import { Quotation } from "./../types/quotationType";

interface QuotationTableProps {
  quotations: Quotation[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onSearch: (query: string) => void;
  onFilter: (filter: string) => void;
}

const QuotationTable: FC<QuotationTableProps> = ({
  quotations,
  currentPage,
  totalPages,
  onPageChange,
  onSearch,
  onFilter,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Manage Quotations</h2>
        <div className="flex gap-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600  text-black"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
          <div className="relative">
            <select
              className="appearance-none pl-3 pr-8 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600  text-black"
              onChange={(e) => onFilter(e.target.value)}
            >
              <option value="">All Status</option>
              <option value="Active">Active</option>
              <option value="Block">Block</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
            <FaFilter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
          <button className="bg-violet-600 text-white px-4 py-2 rounded-md hover:bg-violet-700 text-sm">
            Import
          </button>
        </div>
      </div>

      <table className="min-w-full text-sm text-left border-collapse">
        <thead className="bg-gray-50 text-gray-500 uppercase text-xs border-b">
          <tr>
            <th className="p-3"><input type="checkbox" /></th>
            <th className="p-3">Customer</th>
            <th className="p-3">Quote No</th>
            <th className="p-3">Date</th>
            <th className="p-3">Seller</th>
            <th className="p-3">Product</th>
            <th className="p-3">Price</th>
            <th className="p-3">Status</th>
            <th className="p-3">Options</th>
          </tr>
        </thead>
        <tbody>
          {quotations.map((q) => (
            <tr key={q.id} className="border-b hover:bg-gray-50">
              <td className="p-3">
                <input type="checkbox" />
              </td>
              <td className="p-3 flex items-center gap-2">
                <img
                  src={q.avatar}
                  alt={q.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="font-medium text-gray-800">{q.name}</span>
              </td>
              <td className="p-3  text-black">{q.quoteNo}</td>
              <td className="p-3  text-black">{q.date}</td>
              <td className="p-3  text-black">{q.seller}</td>
              <td className="p-3  text-black">{q.product}</td>
              <td className="p-3  text-black">{q.price}</td>
              <td className="p-3  text-black">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    q.status === "Active"
                      ? "bg-green-100 text-green-600"
                      : q.status === "Block"
                      ? "bg-red-100 text-red-600"
                      : q.status === "Pending"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {q.status}
                </span>
              </td>
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
          Showing {quotations.length} of {quotations.length} entries
        </div>
        <div className="flex space-x-1">
          <button 
            className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50  text-black"
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
                  : "hover:bg-gray-100  text-black"
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ))}
          <button 
            className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50  text-black"
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

export default QuotationTable;