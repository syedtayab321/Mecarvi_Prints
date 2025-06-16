"use client";

import React, { useState } from "react";
import CommonCustomTable from "@/components/common/commonCustomTable";
import { useTableData } from "@/components/common/useTableData";
import { ProcessingOrder } from "@/types/orderType";

const mockData: ProcessingOrder[] = [
  {
    id: 1,
    customer: {
      name: "Michael Brown",
      avatar: "/images/avatar4.jpg"
    },
    orderNumber: "ORD-2001",
    orderDate: "May 18, 2023",
    orderType: "Express",
    orderTotal: "$175.25",
    paymentMethod: "Credit Card",
    trackingNumber: "TRK-123456"
  },
  {
    id: 2,
    customer: {
      name: "Sarah Johnson",
      avatar: "/images/avatar5.jpg"
    },
    orderNumber: "ORD-2002",
    orderDate: "May 19, 2023",
    orderType: "Standard",
    orderTotal: "$89.99",
    paymentMethod: "PayPal",
    trackingNumber: "TRK-789012"
  },
  {
    id: 3,
    customer: {
      name: "David Wilson",
      avatar: "/images/avatar6.jpg"
    },
    orderNumber: "ORD-2003",
    orderDate: "May 20, 2023",
    orderType: "Express",
    orderTotal: "$225.50",
    paymentMethod: "Bank Transfer",
    trackingNumber: "TRK-345678"
  }
];

const ProcessingOrdersTable = () => {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<ProcessingOrder | null>(null);

  const fetchData = React.useCallback(() => mockData, []);
  
  const handleViewDetails = (order: ProcessingOrder) => {
    setSelectedOrder(order);
    setIsDetailsModalOpen(true);
  };

  const handleSendNotification = (orderId: number) => {
    console.log("Send notification for order", orderId);
    alert(`Notification sent for order #${orderId}`);
  };

  const handleTrackOrder = (order: ProcessingOrder) => {
    setSelectedOrder(order);
    setIsTrackModalOpen(true);
  };

  const handleStatusChange = (orderId: number, newStatus: string) => {
    if (!newStatus) return;
    console.log("Change status for order", orderId, "to", newStatus);
    alert(`Order #${orderId} status changed to ${newStatus}`);
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
  } = useTableData<ProcessingOrder>(fetchData, ["customer.name", "orderNumber", "orderDate", "orderTotal"]);

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
      render: (item: ProcessingOrder) => (
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
      key: "orderType",
      header: "Order Type",
      width: "150px",
    },
    {
      key: "orderTotal",
      header: "Order Total",
      width: "150px",
      render: (item: ProcessingOrder) => (
        <span className="font-semibold">{item.orderTotal}</span>
      ),
    },
    {
      key: "paymentMethod",
      header: "Payment Method",
      width: "150px",
    },
    {
      key: "actions",
      header: "Actions",
      width: "250px",
      render: (item: ProcessingOrder) => (
        <div className="flex gap-2 items-center">
          <button
            onClick={() => handleViewDetails(item)}
            className="text-blue-600 hover:text-blue-800 p-1 rounded-full hover:bg-blue-50"
            title="View Details"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
          </button>
          
          <button
            onClick={() => handleSendNotification(item.id)}
            className="text-green-600 hover:text-green-800 p-1 rounded-full hover:bg-green-50"
            title="Send Notification"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </button>
          
          <button
            onClick={() => handleTrackOrder(item)}
            className="text-purple-600 hover:text-purple-800 p-1 rounded-full hover:bg-purple-50"
            title="Track Order"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
            </svg>
          </button>
          
          <select
            onChange={(e) => handleStatusChange(item.id, e.target.value)}
            className="text-sm border rounded p-1 bg-white"
            defaultValue=""
          >
            <option value="" disabled>Status</option>
            <option value="Shipped">Mark as Shipped</option>
            <option value="Completed">Complete Order</option>
            <option value="Cancelled">Cancel Order</option>
          </select>
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
        <h1 className="text-2xl font-bold text-gray-800">Processing Orders</h1>
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

      <CommonCustomTable<ProcessingOrder>
        data={paginatedData}
        columns={columns}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        onSearch={setSearchQuery}
        title="Processing Orders"
        // isLoading={isLoading}
      />

      {/* <OrderDetailsModal
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

export default ProcessingOrdersTable;