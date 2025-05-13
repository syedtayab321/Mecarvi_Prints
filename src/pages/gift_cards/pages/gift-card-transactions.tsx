// app/giftCardTransactions/page.tsx
"use client";

import React from "react";
import GenericTable from "@/pages/common/components/commonCustomTable";
import { useTableData } from "@/pages/common/components/useTableData";
import { GiftCardTransaction } from "../types/giftCardTypes";

const GiftCardTransactionsPage = () => {
  const mockData: GiftCardTransaction[] = [
    {
      id: 1,
      senderName: "Alex Johnson",
      senderAvatar: "/images/avatars/1.jpg",
      receiverName: "Taylor Smith",
      orderNumber: "GC-2023-001",
      orderDate: "Jun 10, 2023",
      orderTotal: "$150.00",
      giftAmount: "$100.00",
      status: "Completed",
    },
    {
      id: 2,
      senderName: "Maria Garcia",
      senderAvatar: "/images/avatars/2.jpg",
      receiverName: "Jamie Wilson",
      orderNumber: "GC-2023-002",
      orderDate: "Jun 12, 2023",
      orderTotal: "$200.00",
      giftAmount: "$200.00",
      status: "Pending",
    },
    {
      id: 3,
      senderName: "David Kim",
      senderAvatar: "/images/avatars/3.jpg",
      receiverName: "Casey Brown",
      orderNumber: "GC-2023-003",
      orderDate: "Jun 15, 2023",
      orderTotal: "$75.00",
      giftAmount: "$50.00",
      status: "Failed",
    },
    {
      id: 4,
      senderName: "Sarah Williams",
      senderAvatar: "/images/avatars/4.jpg",
      receiverName: "Jordan Miller",
      orderNumber: "GC-2023-004",
      orderDate: "Jun 18, 2023",
      orderTotal: "$300.00",
      giftAmount: "$250.00",
      status: "Refunded",
    },
  ];

  const {
    paginatedData,
    currentPage,
    totalPages,
    setCurrentPage,
    setSearchQuery,
    setStatusFilter,
  } = useTableData<GiftCardTransaction>(
    () => mockData,
    ["senderName", "receiverName", "orderNumber"],
    "status"
  );

  const columns = [
    {
      key: "id",
      header: "ID",
      width: "80px",
    },
    {
      key: "senderName",
      header: "Sender",
      width: "180px",
      render: (item: GiftCardTransaction) => (
        <div className="flex items-center gap-3">
          <img 
            src={item.senderAvatar} 
            alt={item.senderName}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span>{item.senderName}</span>
        </div>
      ),
    },
    {
      key: "receiverName",
      header: "Receiver",
      width: "150px",
    },
    {
      key: "orderNumber",
      header: "Order #",
      width: "140px",
    },
    {
      key: "orderDate",
      header: "Date",
      width: "120px",
    },
    {
      key: "orderTotal",
      header: "Order Total",
      width: "120px",
      render: (item: GiftCardTransaction) => (
        <span className="font-semibold">{item.orderTotal}</span>
      ),
    },
    {
      key: "giftAmount",
      header: "Gift Amount",
      width: "120px",
      render: (item: GiftCardTransaction) => (
        <span className="text-green-600 font-semibold">{item.giftAmount}</span>
      ),
    },
    {
      key: "status",
      header: "Status",
      width: "120px",
      render: (item: GiftCardTransaction) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            item.status === "Pending"
              ? "bg-yellow-100 text-yellow-600"
              : item.status === "Completed"
              ? "bg-green-100 text-green-600"
              : item.status === "Failed"
              ? "bg-red-100 text-red-600"
              : item.status === "Refunded"
              ? "bg-blue-100 text-blue-600"
              : "bg-gray-100 text-gray-600"
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
          <button className="text-purple-600 hover:text-purple-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      ),
    },
  ];

  const filterOptions = [
    { value: "Pending", label: "Pending" },
    { value: "Completed", label: "Completed" },
    { value: "Failed", label: "Failed" },
    { value: "Refunded", label: "Refunded" },
    { value: "Expired", label: "Expired" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Gift Card Transactions</h1>
      <GenericTable<GiftCardTransaction>
        data={paginatedData}
        columns={columns}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        onSearch={setSearchQuery}
        onFilter={setStatusFilter}
        filterOptions={filterOptions}
        title="Transaction History"
      />
    </div>
  );
};

export default GiftCardTransactionsPage;