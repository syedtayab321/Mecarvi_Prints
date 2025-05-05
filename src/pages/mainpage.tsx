'use client'

import React, { useState } from "react";
import Sidebar from '@/pages/sidebar/components/sidebar';
import Dashboard from "@/pages/dashboard/pages/dashboard";
import { SectionType } from '@/pages/sidebar/types/sidebar';
import OrdersPage from "@/pages/orders/pages/mainorderspage";

const SidebarPage: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<SectionType>("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const handleSelect = (section: SectionType) => {
    setSelectedSection(section);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        onSelect={handleSelect}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        activeSection={selectedSection}
      />

      {/* Main Content */}
      <div
        className={`flex-1 overflow-y-auto transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
        <div className="p-6">
          {/* Render the selected section */}
          {selectedSection === "dashboard" && <Dashboard />}
          {selectedSection === "all-orders" && <OrdersPage />}
          {/* Add other sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default SidebarPage;