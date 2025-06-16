"use client";

import React, { useCallback, useState } from "react";
import CommonCustomTable from "@/components/common/commonCustomTable";
import { useTableData } from "@/components/common/useTableData";
import StaffModal, { StaffFormData } from "@/pages/users/models/AddStaffModal";
import { User } from "@/types/userTypes";

const StaffTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStaff, setCurrentStaff] = useState<StaffFormData | null>(null);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");

  // Mock data fetching function
  const fetchUsers = useCallback(async (): Promise<User[]> => {
    return [
      {
        id: 1,
        name: "John Smith",
        email: "john.smith@example.com",
        phone: "+1 (555) 123-4567",
        role: "Admin",
        avatar: "/images/chair1.jpg",
      },
      // ... other mock data
    ];
  }, []);

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
  } = useTableData<User>(fetchUsers, ["name", "email", "phone", "role"], "role");

  const handleAddStaff = () => {
    setModalMode("add");
    setCurrentStaff(null);
    setIsModalOpen(true);
  };

  const handleEditStaff = (staff: User) => {
    setModalMode("edit");
    setCurrentStaff({
      id: staff.id,
      name: staff.name,
      email: staff.email,
      phone: staff.phone,
      role: staff.role,
      password: "",
      confirmPassword: "",
      avatar: staff.avatar,
    });
    setIsModalOpen(true);
  };

  const handleViewStaff = (staff: User) => {
    // Implement view functionality
    console.log("Viewing staff:", staff);
    alert(`Viewing staff: ${staff.name}\nEmail: ${staff.email}\nRole: ${staff.role}`);
  };

  const handleDeleteStaff = (staffId: number) => {
    // Implement delete functionality
    if (confirm("Are you sure you want to delete this staff member?")) {
      console.log("Deleting staff with ID:", staffId);
      // In a real app, you would call an API here
      alert("Staff member deleted successfully");
      reload();
    }
  };

  const handleSubmitStaff = (staffData: StaffFormData) => {
    console.log("Submitting staff data:", staffData);
    // In a real app, you would call an API here
    setIsModalOpen(false);
    reload();
    alert(`Staff member ${modalMode === "add" ? "added" : "updated"} successfully`);
  };

  const columns = [
    {
      key: "name",
      header: "Name",
      render: (item: User) => (
        <div className="flex items-center gap-3">
          <img 
            src={item.avatar} 
            alt={item.name}
            className="w-8 h-8 rounded-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/default-avatar.jpg';
            }}
          />
          <span>{item.name}</span>
        </div>
      ),
    },
    {
      key: "email",
      header: "Email",
    },
    {
      key: "phone",
      header: "Phone",
    },
    {
      key: "role",
      header: "Role",
      render: (item: User) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            item.role === "Admin"
              ? "bg-purple-100 text-purple-600"
              : item.role === "Manager"
              ? "bg-blue-100 text-blue-600"
              : item.role === "Editor"
              ? "bg-green-100 text-green-600"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {item.role}
        </span>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      render: (item: User) => (
        <div className="flex gap-2">
          <button 
            className="text-blue-600 hover:text-blue-800 p-1 rounded-full hover:bg-blue-50"
            title="View Details"
            onClick={() => handleViewStaff(item)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button 
            className="text-green-600 hover:text-green-800 p-1 rounded-full hover:bg-green-50"
            title="Edit"
            onClick={() => handleEditStaff(item)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </button>
          <button 
            className="text-red-600 hover:text-red-800 p-1 rounded-full hover:bg-red-50"
            title="Delete"
            onClick={() => handleDeleteStaff(item.id)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      ),
    },
  ];

  const filterOptions = [
    { value: "", label: "All Roles" },
    { value: "Admin", label: "Admin" },
    { value: "Manager", label: "Manager" },
    { value: "Editor", label: "Editor" },
    { value: "Viewer", label: "Viewer" },
  ];

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-red-500">Error loading staff: {error.message}</div>
        <button 
          onClick={reload}
          className="mt-4 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Staff Management</h1>
        <button
          onClick={handleAddStaff}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add New Staff
        </button>
      </div>

      <CommonCustomTable<User>
        data={paginatedData}
        columns={columns}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        onSearch={setSearchQuery}
        onFilter={setStatusFilter}
        filterOptions={filterOptions}
        title="All Staff"
        // isLoading={isLoading}
      />

      <StaffModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitStaff}
        mode={modalMode}
        initialData={currentStaff}
      />
    </div>
  );
};

export default StaffTable;