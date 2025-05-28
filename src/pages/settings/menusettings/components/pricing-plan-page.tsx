// app/settings/payment-settings/page.tsx
"use client";

import CustomTabs from "@/pages/tabbar/customtabbar";
import { FiCreditCard, FiDollarSign, FiShield, FiGlobe, FiPieChart, FiGift } from "react-icons/fi";
import PrintPlans from "./pricing-sections/print-plans-page";
import PrintPricingPlanNames from "./pricing-sections/print-pricing-plan-page";


export const MainPricingPlansPage = () => {
  const tabs = [
    {
      id: "pricing-plan-name",
      label: "Pricing Plans Names",
      icon: <FiCreditCard />,
      content: <PrintPricingPlanNames />,
    },
    {
      id: "print-plan",
      label: "Print Plans",
      icon: <FiDollarSign />,
      content: <PrintPlans />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <CustomTabs
        tabs={tabs}
        variant="pill"
        size="md"
        className="mb-6"
        tabContainerClassName="bg-gray-50 rounded-lg p-1 text-black"
        tabClassName="hover:bg-gray-200"
        activeTabClassName="bg-blue-700 shadow-sm text-white"
      />
    </div>
  );
};

export default MainPricingPlansPage;