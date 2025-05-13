// app/businessAdvantage/page.tsx
"use client";

import React from "react";
import GenericTable from "@/pages/common/components/commonCustomTable";
import { useTableData } from "../../common/components/useTableData";
import { Business} from './../types/businessType';

const BusinessAdvantagePage = () => {
  const mockData: Business[] = [
    {
      id: 1,
      businessName: "Tech Solutions Inc.",
      name: "John Doe",
      email: "john@techsolutions.com",
      phone: "+1 (555) 123-4567",
      percentage: "15%",
      allowedBalance: "$10,000",
      usedBalance: "$5,250",
      status: "Active",
    },
    {
      id: 2,
      businessName: "Global Consulting",
      name: "Jane Smith",
      email: "jane@globalconsult.com",
      phone: "+1 (555) 987-6543",
      percentage: "20%",
      allowedBalance: "$15,000",
      usedBalance: "$12,300",
      status: "Block",
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
  } = useTableData<Business>(
    () => mockData,
    ["businessName", "name", "email", "phone"],
    "status"
  );

  const columns = [
    {
      key: "businessName",
      header: "Business Name",
      width: "200px",
    },
    {
      key: "name",
      header: "Name",
      width: "150px",
    },
    {
      key: "email",
      header: "Email",
      width: "200px",
    },
    {
      key: "phone",
      header: "Phone #",
      width: "150px",
    },
    {
      key: "percentage",
      header: "Percentage",
      width: "100px",
    },
    {
      key: "allowedBalance",
      header: "Allowed Balance",
      width: "150px",
    },
    {
      key: "usedBalance",
      header: "Used Balance",
      width: "150px",
    },
    {
      key: "status",
      header: "Status",
      width: "120px",
      render: (item: Business) => (
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
  ];

  const filterOptions = [
    { value: "Active", label: "Active" },
    { value: "Block", label: "Block" },
    { value: "Pending", label: "Pending" },
    { value: "Completed", label: "Completed" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Business Advantage Management</h1>
      <GenericTable<Business>
        data={paginatedData}
        columns={columns}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        onSearch={setSearchQuery}
        onFilter={setStatusFilter}
        filterOptions={filterOptions}
        title="Business Advantages"
      />
    </div>
  );
};

export default BusinessAdvantagePage;