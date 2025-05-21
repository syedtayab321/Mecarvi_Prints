import ArrivalCard from "@/pages/dashboard/components/arrivalcard";
import DeliveryStatusCard from "@/pages/dashboard/components/deliverystatuscard";
import MapCard from "@/pages/dashboard/components/mapcard";
import OrderDetailCard from "@/pages/dashboard/components/orderdetailscard";
import OrderItems from "@/pages/dashboard/components/orderitems";
import PaymentCard from "@/pages/dashboard/components/paymentcard";
import PurchaseSummary from "@/pages/dashboard/components/purchasesummary";
import ShipmentDetailsCard from "@/pages/dashboard/components/shipmentdetailscard";
import TimelineCard from "@/pages/dashboard/components/timelinecard";
import Topbar from "@/pages/dashboard/components/topbar";
import React from "react";
import CustomerCard from "../components/customerCard";
import OrderProgress from "../components/orderProgress";
import RecentActivity from "../components/recentActivity";

const OrderDetailsPage = () => {
  return (
    <div className="bg-white">
      <Topbar />
      <OrderDetailCard />
      
      {/* First Grid - 3 Cards */}
      <div className="bg-white grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 sm:p-6">
        <ArrivalCard />
        <PaymentCard />
        <DeliveryStatusCard />
      </div>

      {/* Second Grid - 3 Cards */}
      <div className="bg-white p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <TimelineCard />
          <ShipmentDetailsCard />
          <MapCard />
        </div>
      </div>

      {/* Third Grid - Order Items + Summary */}
      <div className="bg-white p-4 sm:p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="md:col-span-2">
            <OrderItems />
          </div>
          <PurchaseSummary />
        </div>
      </div>
       <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      <CustomerCard/>
      <OrderProgress />
      <RecentActivity />
    </div>
    </div>
  );
};

export default OrderDetailsPage;