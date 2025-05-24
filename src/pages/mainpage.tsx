'use client'

import React, { useState } from "react";
import Sidebar from '@/pages/sidebar/components/sidebar';
import { SidebarType } from '@/pages/sidebar/types/sidebar';
import QuotationsPage from "./quotation/pages/quotation";
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
import RefundOrdersPage from "./orders/pages/refundorderspage";
import OrderProofsPage from "./orders/pages/orderproof";
import GeneralSettingsPage from "./settings/generalsettings/pages/main-general-settings-tab";
import AllOrdersPage from "@/pages/orders/pages/allorderspage";
import PaymentSettingsPage from "./settings/paymentsettings/pages/main-payment-page";
import MainHomeSettingsPage from "./settings/homepagesettings/pages/main-home-setting-page";
import OrderDetailsPage from "@/pages/orders/pages/orderdetailspage";
import CustomerSettingsPage from "./customers/pages/customer-main-page";
import MainProductPage from "./products/pages/main-product-page";
import ProductCategoriesPage from "./products/pages/product-categories-page";
import MainFinancePage from "./Financing/pages/main-finance-page";
import OrderVerificationPage from "./orders/pages/orderverificationpage";

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
          {selectedSection === "order-details" && <OrderDetailsPage />}
          {selectedSection === "all-orders" && <AllOrdersPage/>}
          {selectedSection === "refund-order" && <RefundOrdersPage />}
          {selectedSection === "order-proof" && <OrderProofsPage />}
          {selectedSection === "order-verification" && <OrderVerificationPage />}
          {selectedSection === "customers" && <CustomerSettingsPage />}
          {selectedSection === "quotation" && <QuotationsPage />}
          {selectedSection === "finance" && <MainFinancePage />}
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
          {selectedSection === "general-settings" && <GeneralSettingsPage />}
          {selectedSection === "payment-settings" && <PaymentSettingsPage />}
          { selectedSection === "home-page-settings" && <MainHomeSettingsPage/>}
          { selectedSection === "product-management" && <MainProductPage/>}
          { selectedSection === "product-category" && <ProductCategoriesPage/>}
        </div>
      </div>
    </div>
  );
};

export default SidebarPage;