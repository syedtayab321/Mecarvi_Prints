// app/charities/page.tsx
"use client";

import React from "react";
import CommonCustomTable from "@/pages/common/components/commonCustomTable";
import { useTableData } from "@/pages/common/components/useTableData";

interface Charity {
  id: number;
  name: string;
  logo: string;
  status: "Active" | "Inactive" | "Pending";
}

const CharitiesTable = () => {
  const mockData: Charity[] = [
    {
      id: 1,
      name: "Red Cross",
      logo: "/images/logos/red-cross.png",
      status: "Active",
    },
    {
      id: 2,
      name: "UNICEF",
      logo: "/images/logos/unicef.png",
      status: "Active",
    },
    {
      id: 3,
      name: "World Wildlife Fund",
      logo: "/images/logos/wwf.png",
      status: "Pending",
    },
    {
      id: 4,
      name: "Doctors Without Borders",
      logo: "/images/logos/doctors.png",
      status: "Inactive",
    },
  ];

  const {
    paginatedData,
    currentPage,
    totalPages,
    setCurrentPage,
    setSearchQuery,
    setStatusFilter,
  } = useTableData<Charity>(
    () => mockData,
    ["name"],
    "status"
  );

  const columns = [
    {
      key: "id",
      header: "ID",
    },
    {
      key: "name",
      header: "Charity Name",
      render: (item: Charity) => (
        <div className="flex items-center gap-3">
          <img 
            src={item.logo} 
            alt={item.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-medium">{item.name}</span>
        </div>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (item: Charity) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            item.status === "Active"
              ? "bg-green-100 text-green-600"
              : item.status === "Inactive"
              ? "bg-red-100 text-red-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {item.status}
        </span>
      ),
    },
  ];

  const filterOptions = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
    { value: "Pending", label: "Pending" },
  ];

  const handleEdit = (id: number) => {
    console.log("Edit charity with ID:", id);
  };

  const handleDelete = (id: number) => {
    console.log("Delete charity with ID:", id);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Charities</h1>
      <CommonCustomTable<Charity>
        data={paginatedData}
        columns={columns}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        onSearch={setSearchQuery}
        onFilter={setStatusFilter}
        filterOptions={filterOptions}
        title="Charity List"
      />
    </div>
  );
};

export default CharitiesTable;