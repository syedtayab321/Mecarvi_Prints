// app/giftCards/page.tsx
"use client";

import React from "react";
import GenericTable from "@/pages/common/components/commonCustomTable";
import { useTableData } from "@/pages/common/components/useTableData";
import { GiftCard } from "../types/giftCardTypes";
const GiftCardsPage = () => {
  const mockData: GiftCard[] = [
    {
      id: 1,
      customer: {
        name: "Alex Johnson",
        avatar: "/images/avatars/1.jpg",
        email: "alex@example.com"
      },
      receiverName: "Taylor Smith",
      orderDate: "May 15, 2023",
      orderTotal: "$100.00",
      status: "Processed",
    },
    {
      id: 2,
      customer: {
        name: "Maria Garcia",
        avatar: "/images/avatars/2.jpg",
        email: "maria@example.com"
      },
      receiverName: "Jamie Wilson",
      orderDate: "May 18, 2023",
      orderTotal: "$250.00",
      status: "Shipped",
    },
    {
      id: 3,
      customer: {
        name: "David Kim",
        avatar: "/images/avatars/3.jpg",
        email: "david@example.com"
      },
      receiverName: "Casey Brown",
      orderDate: "May 20, 2023",
      orderTotal: "$50.00",
      status: "Pending",
    },
    {
      id: 4,
      customer: {
        name: "Sarah Williams",
        avatar: "/images/avatars/4.jpg",
        email: "sarah@example.com"
      },
      receiverName: "Jordan Miller",
      orderDate: "May 22, 2023",
      orderTotal: "$200.00",
      status: "Delivered",
    },
  ];

  const {
    paginatedData,
    currentPage,
    totalPages,
    setCurrentPage,
    setSearchQuery,
    setStatusFilter,
  } = useTableData<GiftCard>(
    () => mockData,
    ["customer.name", "customer.email", "receiverName", "orderTotal"],
    "status"
  );

  const columns = [
    {
      key: "id",
      header: "ID",
      width: "80px",
    },
    {
      key: "customer",
      header: "Customer",
      width: "200px",
      render: (item: GiftCard) => (
        <div className="flex items-center gap-3">
          <img 
            src={item.customer.avatar} 
            alt={item.customer.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <div className="font-medium">{item.customer.name}</div>
            <div className="text-xs text-gray-500">{item.customer.email}</div>
          </div>
        </div>
      ),
    },
    {
      key: "receiverName",
      header: "Receiver Name",
      width: "150px",
    },
    {
      key: "orderDate",
      header: "Order Date",
      width: "120px",
    },
    {
      key: "orderTotal",
      header: "Order Total",
      width: "120px",
      render: (item: GiftCard) => (
        <span className="font-semibold">{item.orderTotal}</span>
      ),
    },
    {
      key: "status",
      header: "Status",
      width: "120px",
      render: (item: GiftCard) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            item.status === "Pending"
              ? "bg-yellow-100 text-yellow-600"
              : item.status === "Processed"
              ? "bg-blue-100 text-blue-600"
              : item.status === "Shipped"
              ? "bg-purple-100 text-purple-600"
              : item.status === "Delivered"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
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
        </div>
      ),
    },
  ];

  const filterOptions = [
    { value: "Pending", label: "Pending" },
    { value: "Processed", label: "Processed" },
    { value: "Shipped", label: "Shipped" },
    { value: "Delivered", label: "Delivered" },
    { value: "Cancelled", label: "Cancelled" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Gift Card Management</h1>
      <GenericTable<GiftCard>
        data={paginatedData}
        columns={columns}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        onSearch={setSearchQuery}
        onFilter={setStatusFilter}
        filterOptions={filterOptions}
        title="Gift Card Orders"
      />
    </div>
  );
};

export default GiftCardsPage;