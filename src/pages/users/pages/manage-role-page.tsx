// app/roles/page.tsx
"use client";

import React from "react";
import CommonCustomTable from "@/pages/common/components/commonCustomTable";
import { useTableData } from "@/pages/common/components/useTableData";

interface Role {
  id: number;
  name: string;
  permissions: string[];
  createdAt: string;
}

const RolesTable = () => {
  const mockData: Role[] = [
    {
      id: 1,
      name: "Admin",
      permissions: ["All Permissions"],
      createdAt: "2023-01-15",
    },
    {
      id: 2,
      name: "Manager",
      permissions: ["View Dashboard", "Manage Users", "Create Content"],
      createdAt: "2023-02-20",
    },
    {
      id: 3,
      name: "Editor",
      permissions: ["Create Content", "Edit Content", "Publish Content"],
      createdAt: "2023-03-10",
    },
    {
      id: 4,
      name: "Viewer",
      permissions: ["View Dashboard", "View Content"],
      createdAt: "2023-04-05",
    },
    {
      id: 5,
      name: "Moderator",
      permissions: ["Manage Content", "Approve Comments", "Flag Users"],
      createdAt: "2023-05-12",
    },
  ];

  const {
    paginatedData,
    currentPage,
    totalPages,
    setCurrentPage,
    setSearchQuery,
  } = useTableData<Role>(
    () => mockData,
    ["name", "permissions"]
  );

  const formatPermissions = (permissions: string[]) => {
    return (
      <div className="flex flex-wrap gap-1">
        {permissions.map((permission, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full"
          >
            {permission}
          </span>
        ))}
      </div>
    );
  };

  const columns = [
    {
      key: "name",
      header: "Name",
      render: (item: Role) => (
        <span className="font-medium text-gray-800">{item.name}</span>
      ),
    },
    {
      key: "permissions",
      header: "Permissions",
      render: (item: Role) => formatPermissions(item.permissions),
    },
    {
      key: "createdAt",
      header: "Created At",
      render: (item: Role) => new Date(item.createdAt).toLocaleDateString(),
    },
    
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Role Management</h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
          Create New Role
        </button>
      </div>
      
      <CommonCustomTable<Role>
        data={paginatedData}
        columns={columns}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        onSearch={setSearchQuery}
        title="System Roles"
      />
    </div>
  );
};

export default RolesTable;