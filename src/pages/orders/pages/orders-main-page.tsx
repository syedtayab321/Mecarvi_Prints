// app/orders/page.tsx
"use client";

import LeftSideTabs from "@/components/common/customlefttabbar";
import { 
  FiList,
  FiClock,
  FiRefreshCw,
  FiCheckCircle,
  FiXCircle,
  FiThumbsDown,
  FiRotateCw,
  FiPackage
} from "react-icons/fi";
import AllOrdersTable from "../components/ordersComponents/all-orders";
import PendingOrdersTable from "../components/ordersComponents/pending-orders";
import ProcessingOrdersTable from "../components/ordersComponents/processing-orders";
import CompletedOrdersTable from "../components/ordersComponents/completed-orders";
import CancelledOrdersTable from "../components/ordersComponents/cancelled-orders";
import ReturnOrdersTable from "../components/ordersComponents/return-orders";
import ReplacementOrdersTable from "../components/ordersComponents/replacement-orders";
import RefundOrdersTable from "../components/ordersComponents/refund-orders";

export const OrdersMainPage = () => {
  const tabs = [
    {
      id: "all",
      label: "All Orders",
      icon: <FiList size={18} />,
      content: <AllOrdersTable />,
    },
    {
      id: "pending",
      label: "Pending",
      icon: <FiClock size={18} />,
      content: <PendingOrdersTable />,
    },
    {
      id: "processing",
      label: "Processing",
      icon: <FiRefreshCw size={18} />,
      content: <ProcessingOrdersTable />,
    },
    {
      id: "completed",
      label: "Completed",
      icon: <FiCheckCircle size={18} />,
      content: <CompletedOrdersTable />,
    },
    {
      id: "cancelled",
      label: "Cancelled",
      icon: <FiXCircle size={18} />,
      content: <CancelledOrdersTable />,
    },
    {
      id: "refund",
      label: "Refund",
      icon: <FiThumbsDown size={18} />,
      content: <RefundOrdersTable />,
    },
    {
      id: "return",
      label: "Return",
      icon: <FiRotateCw size={18} />,
      content: <ReturnOrdersTable />,
    },
    {
      id: "replacement",
      label: "Replacement",
      icon: <FiPackage size={18} />,
      content: <ReplacementOrdersTable />,
    },
  ];

  return (
    <div className="h-[calc(100vh-64px)] bg-white">
      <LeftSideTabs 
        tabs={tabs}
        defaultActiveTab="all"
        tabWidth="280px"
        tabStyle={{
          fontSize: '14px',
          padding: '12px 20px',
          margin: '4px 12px',
          borderRadius: '8px',
        }}
        activeTabStyle={{
          backgroundColor: '#f0f9ff',
          color: '#0369a1',
          fontWeight: '500'
        }}
        contentStyle={{
          padding: '28px',
          backgroundColor: '#f8fafc'
        }}
        showIcons={true}
        containerClassName="border-t"
      />
    </div>
  );
};

export default OrdersMainPage;