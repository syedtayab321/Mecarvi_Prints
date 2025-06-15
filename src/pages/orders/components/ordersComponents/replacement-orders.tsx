"use client";

import React, { useState } from "react";
import CommonCustomTable from "@/components/common/commonCustomTable";
import { useTableData } from "@/components/common/useTableData";

type ReplacementOrder = {
  id: number;
  customer: {
    name: string;
    avatar: string;
  };
  orderNumber: string;
  orderDate: string;
  orderTotal: string;
  seller: string;
  refundReason: string;
  refundTotal: string;
  refundMethod: string;
  approvedBy: string;
  status: "Pending" | "Approved" | "Rejected" | "Completed";
};

const mockData: ReplacementOrder[] = [
  {
    id: 1,
    customer: {
      name: "Liam Rodriguez",
      avatar: "/images/avatar16.jpg"
    },
    orderNumber: "ORD-6001",
    orderDate: "Apr 28, 2023",
    orderTotal: "$95.99",
    seller: "Electronics Hub",
    refundReason: "Defective product",
    refundTotal: "$95.99",
    refundMethod: "Original Payment",
    approvedBy: "Manager",
    status: "Approved"
  },
  {
    id: 2,
    customer: {
      name: "Mia Lee",
      avatar: "/images/avatar17.jpg"
    },
    orderNumber: "ORD-6002",
    orderDate: "Apr 30, 2023",
    orderTotal: "$150.00",
    seller: "Home Appliances",
    refundReason: "Wrong color",
    refundTotal: "$150.00",
    refundMethod: "Store Credit",
    approvedBy: "Supervisor",
    status: "Completed"
  },
  {
    id: 3,
    customer: {
      name: "Benjamin Walker",
      avatar: "/images/avatar18.jpg"
    },
    orderNumber: "ORD-6003",
    orderDate: "May 2, 2023",
    orderTotal: "$75.50",
    seller: "Fashion Store",
    refundReason: "Size exchange",
    refundTotal: "$0.00",
    refundMethod: "Replacement",
    approvedBy: "-",
    status: "Pending"
  }
];

const ReplacementOrdersTable = () => {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<ReplacementOrder | null>(null);

  const fetchData = React.useCallback(() => mockData, []);
  
  const handleViewDetails = (order: ReplacementOrder) => {
    setSelectedOrder(order);
    setIsDetailsModalOpen(true);
  };

  const handleApprove = (orderId: number) => {
    console.log("Approve replacement for order", orderId);
    alert(`Replacement approved for order #${orderId}`);
  };

  const handleReject = (orderId: number) => {
    console.log("Reject replacement for order", orderId);
    alert(`Replacement rejected for order #${orderId}`);
  };

  const handleComplete = (orderId: number) => {
    console.log("Complete replacement for order", orderId);
    alert(`Replacement completed for order #${orderId}`);
  };

  const {
    paginatedData,
    currentPage,
    totalPages,
    setCurrentPage,
    setSearchQuery,
    isLoading,
    error,
    reload,
  } = useTableData<ReplacementOrder>(fetchData, ["customer.name", "orderNumber", "orderDate", "orderTotal"]);

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
      render: (item: ReplacementOrder) => (
        <div className="flex items-center gap-3">
          <img
            src={item.customer.avatar}
            alt={item.customer.name}
            className="w-8 h-8 rounded-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/default-avatar.jpg";
            }}
          />
          <span>{item.customer.name}</span>
        </div>
      ),
    },
    {
      key: "orderNumber",
      header: "Order Number",
      width: "150px",
    },
    {
      key: "orderDate",
      header: "Order Date",
      width: "150px",
    },
    {
      key: "orderTotal",
      header: "Order Total",
      width: "150px",
      render: (item: ReplacementOrder) => (
        <span className="font-semibold">{item.orderTotal}</span>
      ),
    },
    {
      key: "seller",
      header: "Seller",
      width: "150px",
    },
    {
      key: "refundReason",
      header: "Reason",
      width: "150px",
    },
    {
      key: "refundTotal",
      header: "Refund Amount",
      width: "150px",
      render: (item: ReplacementOrder) => (
        <span className="font-semibold text-red-600">{item.refundTotal}</span>
      ),
    },
    {
      key: "refundMethod",
      header: "Method",
      width: "150px",
    },
    {
      key: "approvedBy",
      header: "Approved By",
      width: "150px",
    },
    {
      key: "status",
      header: "Status",
      width: "150px",
      render: (item: ReplacementOrder) => (
        <span className={`px-2 py-1 rounded-full text-xs ${
          item.status === "Approved" ? "bg-green-100 text-green-800" :
          item.status === "Rejected" ? "bg-red-100 text-red-800" :
          item.status === "Completed" ? "bg-blue-100 text-blue-800" :
          "bg-yellow-100 text-yellow-800"
        }`}>
          {item.status}
        </span>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      width: "250px",
      render: (item: ReplacementOrder) => (
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => handleViewDetails(item)}
            className="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-50 text-sm"
            title="View Details"
          >
            Details
          </button>
          
          {item.status === "Pending" && (
            <>
              <button
                onClick={() => handleApprove(item.id)}
                className="text-green-600 hover:text-green-800 p-1 rounded hover:bg-green-50 text-sm"
                title="Approve Replacement"
              >
                Approve
              </button>
              <button
                onClick={() => handleReject(item.id)}
                className="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-50 text-sm"
                title="Reject Replacement"
              >
                Reject
              </button>
            </>
          )}
          
          {item.status === "Approved" && (
            <button
              onClick={() => handleComplete(item.id)}
              className="text-purple-600 hover:text-purple-800 p-1 rounded hover:bg-purple-50 text-sm"
              title="Complete Replacement"
            >
              Complete
            </button>
          )}
        </div>
      ),
    },
  ];

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
        <strong>Error:</strong> {error.message}
        <button onClick={reload} className="absolute top-0 right-0 px-4 py-3">
          <svg className="fill-current h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Replacement Orders</h1>
        <div className="flex gap-4">
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg flex items-center"
            onClick={reload}
            disabled={isLoading}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
            {isLoading ? "Loading..." : "Refresh"}
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg flex items-center"
            disabled={isLoading}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Export
          </button>
        </div>
      </div>

      <CommonCustomTable<ReplacementOrder>
        data={paginatedData}
        columns={columns}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        onSearch={setSearchQuery}
        title="Replacement Orders"
        // isLoading={isLoading}
      />

      {/* <OrderDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        order={selectedOrder}
      /> */}
    </div>
  );
};

export default ReplacementOrdersTable;