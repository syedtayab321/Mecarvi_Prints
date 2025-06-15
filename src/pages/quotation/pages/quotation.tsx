// app/quotations/page.tsx
"use client";

import React, { useState } from "react";
import CommonCustomTable from "@/components/common/commonCustomTable";
import { useTableData } from "@/components/common/useTableData";
import { Quotation } from "../types/quotationType";
import RespondQuotationModal from "../models/QuotationRespondModal";

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
    avatar: "/images/chair1.jpg",
    quoteNo: "QUO-984321",
    date: "Nov 30, 2024",
    price: "$689.50",
    status: "Block",
  },
  {
    id: 3,
    name: "John D. Smith",
    avatar: "/images/chair1.jpg",
    quoteNo: "QUO-456789",
    date: "Mar 15, 2025",
    price: "$1,250.00",
    status: "Pending",
  },
  {
    id: 4,
    name: "Emily R. Johnson",
    avatar: "/images/chair1.jpg",
    quoteNo: "QUO-789123",
    date: "Jan 5, 2025",
    price: "$845.25",
    status: "Completed",
  },
];

const QuotationsPage = () => {
  const fetchData = React.useCallback(() => mockData, []);
  const [isRespondModalOpen, setIsRespondModalOpen] = useState(false);

  const handleCreateRespond = () => {
    setIsRespondModalOpen(true);
  };

  const handleRespondCreated = () => {
    setIsRespondModalOpen(false);
    reload(); // Refresh the table data after creating a coupon
  };

  const {
    paginatedData,
    currentPage,
    totalPages,
    setCurrentPage,
    setSearchQuery,
    setStatusFilter,
    isLoading,
    error,
    reload,
  } = useTableData<Quotation>(
    fetchData,
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
      width: "270px",
      render: (item: Quotation) => (
        <div className="flex items-center gap-3">
          <img
            src={item.avatar}
            alt={item.name}
            className="w-8 h-8 rounded-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/default-avatar.jpg";
            }}
          />
          <span>{item.name}</span>
        </div>
      ),
    },
    {
      key: "quoteNo",
      header: "Quote No",
      width: "180px",
    },
    {
      key: "date",
      header: "Date",
      width: "190px",
    },
    {
      key: "price",
      header: "Price",
      width: "190px",
      render: (item: Quotation) => (
        <span className="font-semibold">{item.price}</span>
      ),
    },
    {
      key: "status",
      header: "Status",
      width: "190px",
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
    // Update the actions column in your columns array
    {
      key: "actions",
      header: "Actions",
      width: "180px",
      render: (item: Quotation) => (
        <div className="flex gap-2">
          {/* View Button */}
          <button
            className="text-blue-600 hover:text-blue-800 p-1 rounded-full hover:bg-blue-50"
            title="View Details"
            onClick={() => console.log("View", item.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Respond Button - only show for Active or Pending status */}
          {(item.status === "Active" || item.status === "Pending") && (
            <button
              className="text-green-600 hover:text-green-800 p-1 rounded-full hover:bg-green-50"
              title="Respond"
              onClick={handleCreateRespond}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}

          {/* Cancel Button - only show for Active or Pending status */}
          {(item.status === "Active" || item.status === "Pending") && (
            <button
              className="text-yellow-600 hover:text-yellow-800 p-1 rounded-full hover:bg-yellow-50"
              title="Cancel"
              onClick={() => console.log("Cancel", item.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}

          {/* Delete Button */}
          <button
            className="text-red-600 hover:text-red-800 p-1 rounded-full hover:bg-red-50"
            title="Delete"
            onClick={() => console.log("Delete", item.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
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

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error.message}</span>
          <button onClick={reload} className="absolute top-0 right-0 px-4 py-3">
            <svg
              className="fill-current h-6 w-6 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Quotation Management
        </h1>
        <div className="flex gap-4">
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg flex items-center"
            onClick={reload}
            disabled={isLoading}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                clipRule="evenodd"
              />
            </svg>
            {isLoading ? "Loading..." : "Refresh"}
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg flex items-center"
            disabled={isLoading}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Export
          </button>
        </div>
      </div>
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
        // isLoading={isLoading}
      />

      <RespondQuotationModal
        isOpen={isRespondModalOpen}
        onClose={() => setIsRespondModalOpen(false)}
        onSuccess={() => {
          // Handle successful submission
          setIsRespondModalOpen(false);
          // Refresh data or show success message
        }}
        quotationData={{
          quoteNo: "QUO-103452",
          customerName: "Harriett E. Penix",
          date: "Apr 19, 2025",
        }}
      />
    </div>
  );
};

export default QuotationsPage;
