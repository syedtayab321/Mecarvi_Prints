// app/settings/page.tsx
"use client";

import LeftSideTabs from "@/pages/tabbar/customlefttabbar";
import { FiCreditCard, FiDollarSign, FiShield } from "react-icons/fi";
import CustomersPage from "./customerpage";
import SubscriptionPlanPage from "./subscription-plans-page";
import SubscriptionTransactionPage from "./subscription-transaction-page";
import AffiliateWithdrawalPage from "./affilate-withdrawl-page";
import TransactionPage from "./transaction-page";
import CustomerVerificationPage from "./customer-verification-page";

export const CustomerSettingsPage = () => {
  const tabs = [
     {
      id: "all-customers",
      label: "All Customers",
      icon: <FiCreditCard size={18} />,
      content: < CustomersPage />,
    },
     {
      id: "banned-customers",
      label: "Banned Customers",
      icon: <FiCreditCard size={18} />,
      content: < CustomersPage />,
    },
    {
      id: "subscription-plans",
      label: "Subscription Plans",
      icon: <FiCreditCard size={18} />,
      content: <SubscriptionPlanPage />,
    },
    {
      id: "subscription-transactions",
      label: "Subscription Transactions",
      icon: <FiDollarSign size={18} />,
      content: <SubscriptionTransactionPage />,
    },
    {
      id: "affiliate-withdrawals",
      label: "Affiliate Withdrawals",
      icon: <FiDollarSign size={18} />,
      content: <AffiliateWithdrawalPage />,
    },
    {
      id: "transactions",
      label: "Transactions",
      icon: <FiDollarSign size={18} />,
      content: <TransactionPage />,
    },
    {
      id: "customer-verification",
      label: "Customer Verification",
      icon: <FiShield size={18} />,
      content: <CustomerVerificationPage />,
    },
  ];

  return (
    <div style={{ height: 'calc(100vh - 64px)' }}>
      <LeftSideTabs 
        tabs={tabs}
        defaultActiveTab="subscription-plans"
        tabWidth="260px"
        tabStyle={{
          fontSize: '14px',
          padding: '12px 16px',
          margin: '4px 8px',
          borderRadius: '6px',
        }}
        activeTabStyle={{
          backgroundColor: '#f0f7ff',
          color: '#1a73e8',
          fontWeight: '500'
        }}
        contentStyle={{
          padding: '24px',
          backgroundColor: '#f9fafb'
        }}
        showIcons={true}
      />
    </div>
  );
};

export default CustomerSettingsPage;