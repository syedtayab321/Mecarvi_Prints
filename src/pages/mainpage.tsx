'use client'

import React, { useState } from "react";
import Sidebar from '@/pages/sidebar/components/sidebar';
import Dashboard from "@/pages/dashboard/pages/dashboard";
import { SidebarType } from '@/pages/sidebar/types/sidebar';
import OrdersPage from "@/pages/orders/pages/mainorderspage";
import CustomersPage from "./customers/pages/customerpage";
import QuotationsPage from "./quotation/pages/quotation";
import BusinessAdvantagePage from "./Financing/pages/business-advantage-page";
import BusinessAdvantageVerificationPage from "./Financing/pages/business-advantage-verification-page";
import BusinessPreferredPage from "./Financing/pages/business-preferred-page";
import BusinessPreferredVerificationPage from "./Financing/pages/business-preferred-verification";
import BusinessStorePage from "./Financing/pages/business-store-page";
import BusinessStoreVerificationPage from "./Financing/pages/business-store-verification";
import PointsManagementPage from "./loyalitypoints/pages/points-management";
import GiftCardsPage from "./gift_cards/pages/gift-cards-page";
import GiftCardTransactionsPage from "./gift_cards/pages/gift-card-transactions";
import BulkEmailForm from "./marketing/pages/bulk-email-page";
import SmsForm from "./marketing/pages/sms-form-page";
import CouponsPage from "./marketing/pages/coupons-page";
import CharitiesPage from "./donations/pages/charity-page";
import DonationsTable from "./donations/pages/donation-page";
import StaffTable from "./users/pages/staff-page";
import RolesTable from "./users/pages/manage-role-page";

const SidebarPage: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<SidebarType>("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const handleSelect = (section: SidebarType) => {
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
          {selectedSection === "all-customers" && <CustomersPage />}
          {selectedSection === "quotation" && <QuotationsPage />}
          {selectedSection === "business-advantage" && <BusinessAdvantagePage />}
          {selectedSection === "business-advantage-verification" && <BusinessAdvantageVerificationPage />}
          {selectedSection === "business-preferred" && <BusinessPreferredPage />}
          {selectedSection === "business-preferred-verification" && <BusinessPreferredVerificationPage />}
          {selectedSection === "business-store" && <BusinessStorePage />}
          {selectedSection === "business-store-verification" && <BusinessStoreVerificationPage />}
          {selectedSection === "loyality" && <PointsManagementPage />}
          {selectedSection === "gift-cards" && <GiftCardsPage />}
          {selectedSection === "gift-card-transactions" && <GiftCardTransactionsPage />}
          {selectedSection === "email" && <BulkEmailForm />}
          {selectedSection === "sms" && <SmsForm />}
          {selectedSection === "coupons" && <CouponsPage />}
          {selectedSection === "charity" && <CharitiesPage />}\
          {selectedSection === "donations" && <DonationsTable />}
          {selectedSection === "staff" && <StaffTable />}
          {selectedSection === "roles" && <RolesTable />}
          {/* Add other sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default SidebarPage;