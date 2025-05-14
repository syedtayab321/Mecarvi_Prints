// app/quotations/page.tsx
"use client";

import React from "react";
import CommonCustomTable from "@/pages/common/components/commonCustomTable";
import { useTableData } from "@/pages/common/components/useTableData";
import { Quotation } from "../types/quotationType";

const QuotationsPage = () => {
  const mockData: Quotation[] = [
    {
      id: 1,
      name: "Harriett E. Penix",
      avatar: "/images/chair1.jpg",
      quoteNo: "QUO-103452",
      date: "Apr 19, 2025",
      price: "$532.75",
      status: "Active",
    },
    {
      id: 2,
      name: "Carol L. Simon",
      avatar: "/avatars/2.jpg",
      quoteNo: "QUO-984321",
      date: "Nov 30, 2024",
      price: "$689.50",
      status: "Block",
    },
    {
      id: 3,
      name: "John D. Smith",
      avatar: "/avatars/3.jpg",
      quoteNo: "QUO-456789",
      date: "Mar 15, 2025",
      price: "$1,250.00",
      status: "Pending",
    },
    {
      id: 4,
      name: "Emily R. Johnson",
      avatar: "/avatars/4.jpg",
      quoteNo: "QUO-789123",
      date: "Jan 5, 2025",
      price: "$845.25",
      status: "Completed",
    },
  ];

  const {
    paginatedData,
    currentPage,
    totalPages,
    setCurrentPage,
    setSearchQuery,
    setStatusFilter,
  } = useTableData<Quotation>(
    () => mockData,
    ["name", "quoteNo", "date", "price"],
    "status"
  );

  const columns = [
    {
      key: "id",
      header: "ID",
      width: "80px",
    },
    {
      key: "name",
      header: "Customer",
      width: "200px",
      render: (item: Quotation) => (
        <div className="flex items-center gap-3">
          <img 
            src={item.avatar} 
            alt={item.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span>{item.name}</span>
        </div>
      ),
    },
    {
      key: "quoteNo",
      header: "Quote No",
      width: "150px",
    },
    {
      key: "date",
      header: "Date",
      width: "120px",
    },
    {
      key: "price",
      header: "Price",
      width: "120px",
      render: (item: Quotation) => (
        <span className="font-semibold">{item.price}</span>
      ),
    },
    {
      key: "status",
      header: "Status",
      width: "120px",
      render: (item: Quotation) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            item.status === "Active"
              ? "bg-green-100 text-green-600"
              : item.status === "Block"
              ? "bg-red-100 text-red-600"
              : item.status === "Pending"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-blue-100 text-blue-600"
          }`}
        >
          {item.status}
        </span>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      width: "120px",
      render: () => (
        <div className="flex gap-2">
          <button className="text-blue-600 hover:text-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="text-green-600 hover:text-green-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </button>
          <button className="text-red-600 hover:text-red-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      ),
    },
  ];

  const filterOptions = [
    { value: "Active", label: "Active" },
    { value: "Block", label: "Block" },
    { value: "Pending", label: "Pending" },
    { value: "Completed", label: "Completed" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Quotation Management</h1>
      <CommonCustomTable<Quotation>
        data={paginatedData}
        columns={columns}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        onSearch={setSearchQuery}
        onFilter={setStatusFilter}
        filterOptions={filterOptions}
        title="Quotations"
      />
    </div>
  );
};

export default QuotationsPage;