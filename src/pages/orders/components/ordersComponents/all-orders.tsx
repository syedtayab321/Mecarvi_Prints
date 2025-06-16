// app/orders/page.tsx
"use client";

import React, { useState } from "react";
import CommonCustomTable from "@/components/common/commonCustomTable";
import { useTableData } from "@/components/common/useTableData";
import { AllOrder } from "@/types/orderType";


const mockData: AllOrder[] = [
  {
    id: 1,
    customer: {
      name: "Harriett E. Penix",
      avatar: "/images/avatar1.jpg",
    },
    orderNumber: "ORD-103452",
    orderDate: "Apr 19, 2025",
    orderTotal: "$532.75",
    paymentMethod: "Credit Card",
    paymentStatus: "Paid",
    orderStatus: "Processing",
  },
  {
    id: 2,
    customer: {
      name: "Carol L. Simon",
      avatar: "/images/avatar2.jpg",
    },
    orderNumber: "ORD-984321",
    orderDate: "Nov 30, 2024",
    orderTotal: "$689.50",
    paymentMethod: "PayPal",
    paymentStatus: "Pending",
    orderStatus: "Shipped",
  },
  {
    id: 3,
    customer: {
      name: "John D. Smith",
      avatar: "/images/avatar3.jpg",
    },
    orderNumber: "ORD-456789",
    orderDate: "Mar 15, 2025",
    orderTotal: "$1,250.00",
    paymentMethod: "Bank Transfer",
    paymentStatus: "Paid",
    orderStatus: "Delivered",
  },
  {
    id: 4,
    customer: {
      name: "Emily R. Johnson",
      avatar: "/images/avatar4.jpg",
    },
    orderNumber: "ORD-789123",
    orderDate: "Jan 5, 2025",
    orderTotal: "$845.25",
    paymentMethod: "Credit Card",
    paymentStatus: "Refunded",
    orderStatus: "Cancelled",
  },
];

const AllOrdersTable = () => {
  const fetchData = React.useCallback(() => mockData, []);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<AllOrder | null>(null);

  const handleViewDetails = (order: AllOrder) => {
    setSelectedOrder(order);
    setIsDetailsModalOpen(true);
  };

  const handleTrackOrder = (order: AllOrder) => {
    setSelectedOrder(order);
    setIsTrackModalOpen(true);
  };

  const handleSendNotification = (orderId: number) => {
    console.log("Send notification for order", orderId);
    // Implement send notification logic
  };

  const handleUpdateStatus = (orderId: number, newStatus: string) => {
    console.log("Update status for order", orderId, "to", newStatus);
    // Implement status update logic
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
  } = useTableData<AllOrder>(
    fetchData,
    ["customer.name", "orderNumber", "orderDate", "orderTotal"],
    "orderStatus"
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
      render: (item: AllOrder) => (
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
      header: "AllOrder Number",
      width: "150px",
    },
    {
      key: "orderDate",
      header: "AllOrder Date",
      width: "150px",
    },
    {
      key: "orderTotal",
      header: "AllOrder Total",
      width: "150px",
      render: (item: AllOrder) => (
        <span className="font-semibold">{item.orderTotal}</span>
      ),
    },
    {
      key: "paymentMethod",
      header: "Payment Method",
      width: "150px",
    },
    {
      key: "paymentStatus",
      header: "Payment Status",
      width: "150px",
      render: (item: AllOrder) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            item.paymentStatus === "Paid"
              ? "bg-green-100 text-green-600"
              : item.paymentStatus === "Pending"
              ? "bg-yellow-100 text-yellow-600"
              : item.paymentStatus === "Failed"
              ? "bg-red-100 text-red-600"
              : "bg-purple-100 text-purple-600"
          }`}
        >
          {item.paymentStatus}
        </span>
      ),
    },
    {
      key: "orderStatus",
      header: "AllOrder Status",
      width: "150px",
      render: (item: AllOrder) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            item.orderStatus === "Processing"
              ? "bg-blue-100 text-blue-600"
              : item.orderStatus === "Shipped"
              ? "bg-indigo-100 text-indigo-600"
              : item.orderStatus === "Delivered"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {item.orderStatus}
        </span>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      width: "200px",
      render: (item: AllOrder) => (
        <div className="flex gap-2">
          {/* View Details Button */}
          <button
            className="text-blue-600 hover:text-blue-800 p-1 rounded-full hover:bg-blue-50"
            title="View Details"
            onClick={() => handleViewDetails(item)}
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

          {/* Send Notification Button */}
          <button
            className="text-green-600 hover:text-green-800 p-1 rounded-full hover:bg-green-50"
            title="Send Notification"
            onClick={() => handleSendNotification(item.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </button>

          {/* Track AllOrder Button - only for shipped orders */}
          {item.orderStatus === "Shipped" && (
            <button
              className="text-purple-600 hover:text-purple-800 p-1 rounded-full hover:bg-purple-50"
              title="Track AllOrder"
              onClick={() => handleTrackOrder(item)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}

          {/* Deliver Status Button - dropdown for status update */}
          <div className="relative group">
            <button
              className="text-yellow-600 hover:text-yellow-800 p-1 rounded-full hover:bg-yellow-50"
              title="Update Status"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10 hidden group-hover:block">
              <div className="py-1">
                <button
                  onClick={() => handleUpdateStatus(item.id, "Processing")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Mark as Processing
                </button>
                <button
                  onClick={() => handleUpdateStatus(item.id, "Shipped")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Mark as Shipped
                </button>
                <button
                  onClick={() => handleUpdateStatus(item.id, "Delivered")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Mark as Delivered
                </button>
                <button
                  onClick={() => handleUpdateStatus(item.id, "Cancelled")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Cancel AllOrder
                </button>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const filterOptions = [
    { value: "Processing", label: "Processing" },
    { value: "Shipped", label: "Shipped" },
    { value: "Delivered", label: "Delivered" },
    { value: "Cancelled", label: "Cancelled" },
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
        <h1 className="text-2xl font-bold text-gray-800">AllOrder Management</h1>
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
      <CommonCustomTable<AllOrder>
        data={paginatedData}
        columns={columns}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        onSearch={setSearchQuery}
        onFilter={setStatusFilter}
        filterOptions={filterOptions}
        title="Orders"
        // isLoading={isLoading}
      />
{/* 
      <OrderDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        order={selectedOrder}
      />
      <TrackOrderModal
        isOpen={isTrackModalOpen}
        onClose={() => setIsTrackModalOpen(false)}
        order={selectedOrder}
      /> */}
    </div>
  );
};

export default AllOrdersTable;