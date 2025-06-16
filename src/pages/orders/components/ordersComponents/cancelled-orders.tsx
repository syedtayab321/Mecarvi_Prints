"use client";

import React, { useState } from "react";
import CommonCustomTable from "@/components/common/commonCustomTable";
import { useTableData } from "@/components/common/useTableData";
import { CompletedOrder } from "@/types/orderType";

const mockData: CompletedOrder[] = [
  {
    id: 1,
    customer: {
      name: "Emily Davis",
      avatar: "/images/avatar7.jpg"
    },
    orderNumber: "ORD-3001",
    orderDate: "May 10, 2023",
    orderType: "Standard",
    orderTotal: "$145.99",
    paymentMethod: "Credit Card",
    seller: "ABC Store",
    trackingNumber: "TRK-901234"
  },
  {
    id: 2,
    customer: {
      name: "James Miller",
      avatar: "/images/avatar8.jpg"
    },
    orderNumber: "ORD-3002",
    orderDate: "May 12, 2023",
    orderType: "Express",
    orderTotal: "$210.50",
    paymentMethod: "PayPal",
    seller: "XYZ Shop",
    trackingNumber: "TRK-567890"
  },
  {
    id: 3,
    customer: {
      name: "Olivia Wilson",
      avatar: "/images/avatar9.jpg"
    },
    orderNumber: "ORD-3003",
    orderDate: "May 14, 2023",
    orderType: "Standard",
    orderTotal: "$89.75",
    paymentMethod: "Bank Transfer",
    seller: "Best Deals",
    trackingNumber: "TRK-123890"
  }
];

const CompletedOrdersTable = () => {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);
  const [isProofModalOpen, setIsProofModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<CompletedOrder | null>(null);

  const fetchData = React.useCallback(() => mockData, []);
  
  const handleViewDetails = (order: CompletedOrder) => {
    setSelectedOrder(order);
    setIsDetailsModalOpen(true);
  };

  const handleSendNotification = (orderId: number) => {
    console.log("Send notification for order", orderId);
    alert(`Notification sent for order #${orderId}`);
  };

  const handleTrackOrder = (order: CompletedOrder) => {
    setSelectedOrder(order);
    setIsTrackModalOpen(true);
  };

  const handleViewProof = (orderId: number) => {
    const order = mockData.find(o => o.id === orderId);
    if (order) {
      setSelectedOrder(order);
      setIsProofModalOpen(true);
    }
  };

  const handleVerifyOrder = (orderId: number) => {
    console.log("Verify order", orderId);
    alert(`Order #${orderId} verification requested`);
  };

  const handleCancelOrder = (orderId: number) => {
    console.log("Cancel order", orderId);
    alert(`Order #${orderId} cancellation requested`);
  };

  const handleRefund = (orderId: number) => {
    console.log("Process refund for order", orderId);
    alert(`Refund processed for order #${orderId}`);
  };

  const handleDeliveryStatus = (orderId: number, status: string) => {
    if (!status) return;
    console.log("Delivery status for order", orderId, "changed to", status);
    alert(`Order #${orderId} delivery status changed to ${status}`);
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
  } = useTableData<CompletedOrder>(fetchData, ["customer.name", "orderNumber", "orderDate", "orderTotal"]);

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
      render: (item: CompletedOrder) => (
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
      render: (item: CompletedOrder) => (
        <span className="font-semibold">{item.orderTotal}</span>
      ),
    },
    {
      key: "paymentMethod",
      header: "Payment Method",
      width: "150px",
    },
    {
      key: "seller",
      header: "Seller",
      width: "150px",
    },
    {
      key: "actions",
      header: "Actions",
      width: "350px",
      render: (item: CompletedOrder) => (
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => handleViewDetails(item)}
            className="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-50 text-sm"
            title="View Details"
          >
            Details
          </button>
          
          <button
            onClick={() => handleSendNotification(item.id)}
            className="text-green-600 hover:text-green-800 p-1 rounded hover:bg-green-50 text-sm"
            title="Send Notification"
          >
            Send
          </button>
          
          <button
            onClick={() => handleVerifyOrder(item.id)}
            className="text-yellow-600 hover:text-yellow-800 p-1 rounded hover:bg-yellow-50 text-sm"
            title="Verify Order"
          >
            Verify
          </button>
          
          <button
            onClick={() => handleViewProof(item.id)}
            className="text-indigo-600 hover:text-indigo-800 p-1 rounded hover:bg-indigo-50 text-sm"
            title="View Proof"
          >
            Proof
          </button>
          
          <button
            onClick={() => handleTrackOrder(item)}
            className="text-purple-600 hover:text-purple-800 p-1 rounded hover:bg-purple-50 text-sm"
            title="Track Order"
          >
            Track
          </button>
          
          <button
            onClick={() => handleCancelOrder(item.id)}
            className="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-50 text-sm"
            title="Cancel Order"
          >
            Cancel
          </button>
          
          <button
            onClick={() => handleRefund(item.id)}
            className="text-pink-600 hover:text-pink-800 p-1 rounded hover:bg-pink-50 text-sm"
            title="Process Refund"
          >
            Refund
          </button>
          
          <select
            onChange={(e) => handleDeliveryStatus(item.id, e.target.value)}
            className="text-sm border rounded p-1 bg-white"
            defaultValue=""
          >
            <option value="" disabled>Delivery</option>
            <option value="Delivered">Confirmed</option>
            <option value="Returned">Return</option>
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
        <h1 className="text-2xl font-bold text-gray-800">Completed Orders</h1>
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

      <CommonCustomTable<CompletedOrder>
        data={paginatedData}
        columns={columns}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        onSearch={setSearchQuery}
        title="Completed Orders"
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
      />

      <OrderProofModal
        isOpen={isProofModalOpen}
        onClose={() => setIsProofModalOpen(false)}
        order={selectedOrder}
      /> */}
    </div>
  );
};

export default CompletedOrdersTable;