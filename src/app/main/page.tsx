'use client'

import React, { useState } from "react";
import Sidebar from '@/pages/sidebar/components/sidebar';
import { SidebarType } from '@/pages/sidebar/types/sidebar';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import clsx from "clsx";
import OrderDetailsPage from "@/pages/orders/pages/orderdetailspage";
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
import DonationsTable from "@/pages/donations/pages/donation-table";
import OrdersMainPage from "@/pages/orders/pages/orders-main-page";

const MainPage: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<SidebarType>("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const handleSelect = (section: SidebarType) => {
    setSelectedSection(section);
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <header className="h-16 bg-white shadow-md flex items-center px-4 justify-between border-b-[1px] border-gray-300">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-xl cursor-pointer text-gray-700 hover:text-pink-500"
          >
            {isSidebarOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          <h1 className="text-lg font-semibold text-pink-500">
            Mecarvi Prints Admin
          </h1>
        </div>
        <div>
          <button className="text-gray-700 hover:text-pink-500">Logout</button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          onSelect={handleSelect}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
          activeSection={selectedSection}
        />

        {/* Main Content */}
        <main className={clsx(
          "flex-1 overflow-y-auto p-3 bg-[#e1e4e8d4] transition-all duration-300 w-full scrollbar-hide"
        )}>
          {/* <h2 className="text-xl font-bold capitalize mb-6 text-black">
            {selectedSection.replace(/-/g, ' ')}
          </h2> */}
          
          {/* Render the selected section */}
          {selectedSection === "order-details" && <OrderDetailsPage />}
          {selectedSection === "all-orders" && <OrdersMainPage />}
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
          {selectedSection === "donations" && <DonationsTable />}
          {selectedSection === "staff" && <StaffTable />}
          {selectedSection === "roles" && <RolesTable />}
          {selectedSection === "general-settings" && <GeneralSettingsPage />}
          {selectedSection === "payment-settings" && <PaymentSettingsPage />}
          {selectedSection === "home-page-settings" && <HomepageSettings />}
          {selectedSection === "product-management" && <MainProductPage />}
          {selectedSection === "product-category" && <ProductCategoriesPage />}
          {selectedSection === "menu-settings" && <MenuSettingsMainpage />}
          {selectedSection === "reports" && <MainReportPage />}
          {selectedSection === "blog" && <MainBlogsPage />}
          {selectedSection === "email-settings" && <MainEmailSettingsPage />}
          {selectedSection === "social-settings" && <SocialLinksForm />}
          {selectedSection === "message" && <MessagesPage />}
        </main>
      </div>

      <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default MainPage;