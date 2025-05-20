import CustomTabs from "@/pages/tabbar/customtabbar";
import { FiFileText, FiList, FiInfo, FiRefreshCw, FiDollarSign, FiTruck } from "react-icons/fi";
import OrderProofsPage from "./orderproof";
import AllOrdersPage from "./allorderspage";
import OrderReplacementsPage from "./orderreplacementpage";
import RefundOrdersPage from "./refundorderspage";
import ReturnRequestsPage from "./returnrequestpage";

export const OrderTabsPage = () => {
  const tabs = [
     {
      id: "all",
      label: "All Orders",
      icon: <FiList />,
      content: <AllOrdersPage />,
    },
    {
      id: "proof",
      label: "Order Proof",
      icon: <FiFileText />,
      content: <OrderProofsPage />,
      notificationCount: 3,
    },
    {
      id: "replacement",
      label: "Order Replacement",
      icon: <FiList />,
      content: <OrderReplacementsPage />,
    },
    {
      id: "refund",
      label: "Refund Orders",
      icon: <FiList />,
      content: <RefundOrdersPage />,
    },
    {
      id: "return-requests",
      label: "Return Requests",
      icon: <FiList />,
      content: <ReturnRequestsPage />,
    },
    {
      id: "order-verification",
      label: "Order Verifications",
      icon: <FiList />,
      content: <ReturnRequestsPage />,
    },
  ];

  return (
    <div className="p-6">
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