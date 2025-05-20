// app/settings/payment-settings/page.tsx
"use client";

import CustomTabs from "@/pages/tabbar/customtabbar";
import { FiCreditCard, FiDollarSign, FiShield, FiGlobe, FiPieChart, FiGift } from "react-icons/fi";
import PaymentGatewaysPage from "./payment-gateway";
import PaymentInformation from "./payment-information";


export const PaymentSettingsPage = () => {
  const tabs = [
    {
      id: "payment-methods",
      label: "Payment Methods",
      icon: <FiCreditCard />,
      content: <PaymentGatewaysPage />,
    },
    {
      id: "payment-information",
      label: "Payment Information",
      icon: <FiDollarSign />,
      content: <PaymentInformation />,
    },
  ];

  return (
    <div className="p-4">
      <CustomTabs
        tabs={tabs}
        variant="underline"
        size="lg"
        tabContainerClassName="px-2"
        activeTabClassName="text-blue-600"
        tabClassName="text-gray-500"
        indicatorClassName="bg-blue-600"
      />
    </div>
  );
};

export default PaymentSettingsPage;