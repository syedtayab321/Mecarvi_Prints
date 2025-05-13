// app/businessAdvantageVerification/page.tsx
"use client";

import React from "react";
import GenericTable from "../../common/components/commonCustomTable";
import { useTableData } from "../../common/components/useTableData";
import { BusinessVerification } from "../types/businessType";


const BusinessAdvantageVerificationPage = () => {
  const mockData: BusinessVerification[] = [
    {
      id: 1,
      businessName: "Tech Solutions Inc.",
      businessEmail: "info@techsolutions.com",
      description: "Provider of innovative tech solutions for modern businesses",
      status: "Verified",
    },
    {
      id: 2,
      businessName: "Global Consulting",
      businessEmail: "contact@globalconsult.com",
      description: "International business consulting services",
      status: "Pending",
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
  } = useTableData<BusinessVerification>(
    () => mockData,
    ["businessName", "businessEmail", "description"],
    "status"
  );

  const columns = [
    {
      key: "businessName",
      header: "Business Name",
      width: "200px",
    },
    {
      key: "businessEmail",
      header: "Business Email",
      width: "200px",
    },
    {
      key: "description",
      header: "Description",
      render: (item: BusinessVerification) => (
        <span className="max-w-xs truncate">{item.description}</span>
      ),
    },
    {
      key: "status",
      header: "Status",
      width: "120px",
      render: (item: BusinessVerification) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            item.status === "Verified"
              ? "bg-green-100 text-green-600"
              : item.status === "Pending"
              ? "bg-yellow-100 text-yellow-600"
              : item.status === "Rejected"
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
    { value: "Verified", label: "Verified" },
    { value: "Pending", label: "Pending" },
    { value: "Rejected", label: "Rejected" },
    { value: "In Review", label: "In Review" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Business Advantage Verification</h1>
      <GenericTable<BusinessVerification>
        data={paginatedData}
        columns={columns}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        onSearch={setSearchQuery}
        onFilter={setStatusFilter}
        filterOptions={filterOptions}
        title="Verification Requests"
      />
    </div>
  );
};

export default BusinessAdvantageVerificationPage;