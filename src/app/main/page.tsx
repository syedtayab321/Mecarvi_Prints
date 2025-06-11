'use client'

import React, { useState } from "react";
import Sidebar from '@/pages/sidebar/components/sidebar';
import { SidebarType } from '@/pages/sidebar/types/sidebar';
import OrderDetailsPage from "@/pages/orders/pages/orderdetailspage";
import AllOrdersPage from "@/pages/orders/pages/allorderspage";
import RefundOrdersPage from "@/pages/orders/pages/refundorderspage";
import OrderProofsPage from "@/pages/orders/pages/orderproof";
import OrderVerificationPage from "@/pages/orders/pages/orderverificationpage";
import CustomerSettingsPage from "@/pages/customers/pages/customer-main-page";
import QuotationsPage from "@/pages/quotation/pages/quotation";
import MainFinancePage from "@/pages/Financing/pages/main-finance-page";
import PointsManagementPage from "@/pages/loyalitypoints/pages/points-management";
import GiftCardsPage from "@/pages/gift_cards/pages/gift-cards-page";
import GiftCardTransactionsPage from "@/pages/gift_cards/pages/gift-card-transactions";
import MainMarketingPage from "@/pages/marketing/pages/main-marketing-page";
import CharitiesPage from "@/pages/donations/pages/charity-page";
import StaffTable from "@/pages/users/pages/staff-page";
import RolesTable from "@/pages/users/pages/manage-role-page";
import GeneralSettingsPage from "@/pages/settings/generalsettings/pages/main-general-settings-tab";
import PaymentSettingsPage from "@/pages/settings/paymentsettings/pages/main-payment-page";
import MainProductPage from "@/pages/products/pages/main-product-page";
import ProductCategoriesPage from "@/pages/products/pages/product-categories-page";
import MenuSettingsMainpage from "@/pages/settings/menusettings/pages/main-menu-settings-page";
import MainReportPage from "@/pages/reports/pages/main-report-page";
import MainBlogsPage from "@/pages/blogs/pages/main-blog-page";
import MainEmailSettingsPage from "@/pages/settings/emailsettings/pages/main-email-settings-page";
import SocialLinksForm from "@/pages/settings/socialsettings/pages/social-links-page";
import MessagesPage from "@/pages/support/pages/message-page";
import HomepageSettings from "@/pages/settings/homepagesettings/pages/main-home-setting-page";
import DonationsTable from "@/pages/donations/pages/donation-page";

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
          {selectedSection === "marketing" && <MainMarketingPage />}
          {selectedSection === "charity" && <CharitiesPage />}
          {selectedSection === "donations" && <DonationsTable/>}
          {selectedSection === "staff" && <StaffTable/>}
          {selectedSection === "roles" && <RolesTable />}
          {selectedSection === "general-settings" && <GeneralSettingsPage />}
          {selectedSection === "payment-settings" && <PaymentSettingsPage />}
          { selectedSection === "home-page-settings" && <HomepageSettings/>}
          { selectedSection === "product-management" && <MainProductPage/>}
          { selectedSection === "product-category" && <ProductCategoriesPage/>}
          { selectedSection === "menu-settings" && <MenuSettingsMainpage/>}
          { selectedSection === "reports" && <MainReportPage/>}
          { selectedSection === "blog" && <MainBlogsPage/>}
          { selectedSection === "email-settings" && <MainEmailSettingsPage/>}
          { selectedSection === "social-settings" && <SocialLinksForm/>}
          { selectedSection === "message" && <MessagesPage/>}
        </div>
      </div>
    </div>
  );
};

export default SidebarPage;