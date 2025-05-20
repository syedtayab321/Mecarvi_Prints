// app/coupons/page.tsx
"use client";

import React from "react";
import CommonCustomTable from "@/pages/common/commonCustomTable";
import { useTableData } from "@/pages/common/useTableData";
import { Coupon } from "../types/couponsTypes";

const CouponsPage = () => {
  const mockData: Coupon[] = [
    {
      id: 1,
      code: "SUMMER25",
      type: "Percentage",
      amount: "25%",
      used: "45/100",
      status: "Active",
    },
    {
      id: 2,
      code: "FREESHIP",
      type: "Fixed",
      amount: "$10.00",
      used: "82/200",
      status: "Active",
    },
    {
      id: 3,
      code: "WELCOME10",
      type: "Percentage",
      amount: "10%",
      used: "120/500",
      status: "Active",
    },
    {
      id: 4,
      code: "EXPIRED50",
      type: "Fixed",
      amount: "$50.00",
      used: "100/100",
      status: "Expired",
    },
    {
      id: 5,
      code: "FLASH30",
      type: "Percentage",
      amount: "30%",
      used: "75/150",
      status: "Active",
    },
    {
      id: 6,
      code: "MEMBERSHIP",
      type: "Fixed",
      amount: "$15.00",
      used: "0/50",
      status: "Inactive",
    },
  ];

  const {
    paginatedData,
    currentPage,
    totalPages,
    setCurrentPage,
    setSearchQuery,
    setStatusFilter,
  } = useTableData<Coupon>(
    () => mockData,
    ["code", "type", "amount", "status"],
    "status"
  );

  const columns = [
    {
      key: "id",
      header: "ID",
      width: "80px",
    },
    {
      key: "code",
      header: "Code",
      width: "150px",
      render: (item: Coupon) => (
        <span className="font-mono font-medium bg-gray-100 px-2 py-1 rounded">
          {item.code}
        </span>
      ),
    },
    {
      key: "type",
      header: "Type",
      width: "120px",
    },
    {
      key: "amount",
      header: "Amount",
      width: "120px",
      render: (item: Coupon) => (
        <span className="font-semibold">
          {item.type === "Percentage" ? item.amount : `$${parseFloat(item.amount.replace('$', '')).toFixed(2)}`}
        </span>
      ),
    },
    {
      key: "used",
      header: "Used",
      width: "120px",
      render: (item: Coupon) => {
        const [used, total] = item.used.split('/');
        const percentage = (parseInt(used) / parseInt(total)) * 100;
        return (
          <div className="flex flex-col">
            <span className="text-sm">{item.used}</span>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
              <div 
                className="bg-blue-600 h-1.5 rounded-full" 
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>
        );
      },
    },
    {
      key: "status",
      header: "Status",
      width: "120px",
      render: (item: Coupon) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            item.status === "Active"
              ? "bg-green-100 text-green-600"
              : item.status === "Expired"
              ? "bg-red-100 text-red-600"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {item.status}
        </span>
      ),
    },
    {
      key: "actions",
      header: "Options",
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
    { value: "Inactive", label: "Inactive" },
    { value: "Expired", label: "Expired" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Coupon Management</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Create Coupon
        </button>
      </div>
      <CommonCustomTable<Coupon>
        data={paginatedData}
        columns={columns}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        onSearch={setSearchQuery}
        onFilter={setStatusFilter}
        filterOptions={filterOptions}
        title="Coupons List"
      />
    </div>
  );
};

export default CouponsPage;