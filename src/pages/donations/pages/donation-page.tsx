// app/donations/page.tsx
"use client";

import React from "react";
import CommonCustomTable from "@/pages/common/commonCustomTable";
import { useTableData } from "@/pages/common/useTableData";

interface Donation {
  id: number;
  customer: {
    name: string;
    avatar: string;
  };
  date: string;
  orderNo: string;
  charity: {
    name: string;
    logo: string;
  };
  amount: number;
  status: "Completed" | "Pending" | "Failed" | "Refunded";
}

const DonationsTable = () => {
  const mockData: Donation[] = [
    {
      id: 1,
      customer: {
        name: "John Smith",
        avatar: "/images/avatars/1.jpg",
      },
      date: "2023-06-15",
      orderNo: "DON-2023-001",
      charity: {
        name: "Red Cross",
        logo: "/images/logos/red-cross.png",
      },
      amount: 100.00,
      status: "Completed",
    },
    {
      id: 2,
      customer: {
        name: "Sarah Johnson",
        avatar: "/images/avatars/2.jpg",
      },
      date: "2023-06-16",
      orderNo: "DON-2023-002",
      charity: {
        name: "UNICEF",
        logo: "/images/logos/unicef.png",
      },
      amount: 50.00,
      status: "Pending",
    },
    {
      id: 3,
      customer: {
        name: "Michael Brown",
        avatar: "/images/avatars/3.jpg",
      },
      date: "2023-06-17",
      orderNo: "DON-2023-003",
      charity: {
        name: "World Wildlife Fund",
        logo: "/images/logos/wwf.png",
      },
      amount: 75.00,
      status: "Failed",
    },
    {
      id: 4,
      customer: {
        name: "Emily Davis",
        avatar: "/images/avatars/4.jpg",
      },
      date: "2023-06-18",
      orderNo: "DON-2023-004",
      charity: {
        name: "Doctors Without Borders",
        logo: "/images/logos/doctors.png",
      },
      amount: 200.00,
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
  } = useTableData<Donation>(
    () => mockData,
    ["customer.name", "orderNo", "charity.name"],
    "status"
  );

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const columns = [
    {
      key: "customer",
      header: "Customer",
      render: (item: Donation) => (
        <div className="flex items-center gap-3">
          <img 
            src={item.customer.avatar} 
            alt={item.customer.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span>{item.customer.name}</span>
        </div>
      ),
    },
    {
      key: "date",
      header: "Date",
      render: (item: Donation) => formatDate(item.date),
    },
    {
      key: "orderNo",
      header: "Order No",
    },
    {
      key: "charity",
      header: "Charity",
      render: (item: Donation) => (
        <div className="flex items-center gap-3">
          <img 
            src={item.charity.logo} 
            alt={item.charity.name}
            className="w-6 h-6 rounded-full object-cover"
          />
          <span>{item.charity.name}</span>
        </div>
      ),
    },
    {
      key: "amount",
      header: "Donation Amount",
      render: (item: Donation) => (
        <span className="font-semibold text-green-600">
          ${item.amount.toFixed(2)}
        </span>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (item: Donation) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            item.status === "Completed"
              ? "bg-green-100 text-green-600"
              : item.status === "Pending"
              ? "bg-yellow-100 text-yellow-600"
              : item.status === "Failed"
              ? "bg-red-100 text-red-600"
              : "bg-blue-100 text-blue-600"
          }`}
        >
          {item.status}
        </span>
      ),
    },
  ];

  const filterOptions = [
    { value: "Completed", label: "Completed" },
    { value: "Pending", label: "Pending" },
    { value: "Failed", label: "Failed" },
    { value: "Refunded", label: "Refunded" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Donations</h1>
      <CommonCustomTable<Donation>
        data={paginatedData}
        columns={columns}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        onSearch={setSearchQuery}
        onFilter={setStatusFilter}
        filterOptions={filterOptions}
        title="Donation History"
      />
    </div>
  );
};

export default DonationsTable;