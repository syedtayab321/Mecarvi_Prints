// app/pointsManagement/page.tsx
"use client";

import React from "react";
import CommonCustomTable from "@/pages/common/commonCustomTable";
import { useTableData } from "@/pages/common/useTableData";
import { LoyalityPointsManagement } from "../types/loyalityTypes";

const PointsManagementPage = () => {
  const mockData: LoyalityPointsManagement[] = [
    {
      id: 1,
      user: {
        name: "John Doe",
        avatar: "/images/avatars/1.jpg",
        email: "john@example.com"
      },
      totalPoints: 5000,
      pointsBalance: 3200,
      status: "Active",
    },
    {
      id: 2,
      user: {
        name: "Jane Smith",
        avatar: "/images/avatars/2.jpg",
        email: "jane@example.com"
      },
      totalPoints: 2500,
      pointsBalance: 800,
      status: "Inactive",
    },
    {
      id: 3,
      user: {
        name: "Robert Johnson",
        avatar: "/images/avatars/3.jpg",
        email: "robert@example.com"
      },
      totalPoints: 10000,
      pointsBalance: 7500,
      status: "Suspended",
    },
    // Add more mock data as needed
  ];

  const {
    paginatedData,
    currentPage,
    totalPages,
    setCurrentPage,
    setSearchQuery,
    setStatusFilter,
  } = useTableData<LoyalityPointsManagement>(
    () => mockData,
    ["user.name", "user.email"],
    "status"
  );

  const columns = [
    {
      key: "id",
      header: "ID",
      width: "80px",
    },
    {
      key: "user",
      header: "User",
      width: "250px",
      render: (item: LoyalityPointsManagement) => (
        <div className="flex items-center gap-3">
          <img 
            src={item.user.avatar} 
            alt={item.user.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <div className="font-medium">{item.user.name}</div>
            <div className="text-xs text-gray-500">{item.user.email}</div>
          </div>
        </div>
      ),
    },
    {
      key: "totalPoints",
      header: "Total Points",
      width: "150px",
      render: (item: LoyalityPointsManagement) => (
        <span className="font-semibold">
          {item.totalPoints.toLocaleString()}
        </span>
      ),
    },
    {
      key: "pointsBalance",
      header: "Points Balance",
      width: "150px",
      render: (item: LoyalityPointsManagement) => (
        <span className={item.pointsBalance < 1000 ? "text-red-500 font-semibold" : "text-green-600 font-semibold"}>
          {item.pointsBalance.toLocaleString()}
        </span>
      ),
    },
    {
      key: "status",
      header: "Status",
      width: "120px",
      render: (item: LoyalityPointsManagement) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            item.status === "Active"
              ? "bg-green-100 text-green-600"
              : item.status === "Inactive"
              ? "bg-gray-100 text-gray-600"
              : item.status === "Suspended"
              ? "bg-red-100 text-red-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {item.status}
        </span>
      ),
    },
    {
      key: "detail",
      header: "Detail",
      width: "100px",
      render: () => (
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          View
        </button>
      ),
    },
  ];

  const filterOptions = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
    { value: "Suspended", label: "Suspended" },
    { value: "Expired", label: "Expired" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Points Management</h1>
      <CommonCustomTable<LoyalityPointsManagement>
        data={paginatedData}
        columns={columns}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        onSearch={setSearchQuery}
        onFilter={setStatusFilter}
        filterOptions={filterOptions}
        title="User Points"
      />
    </div>
  );
};

export default PointsManagementPage;