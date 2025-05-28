"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Faqs from "./Sections/Faqs";
import MiddleBanner from "./Sections/MiddleBanner";
import HowItWorksPage from "./Sections/HowItWorks";
import BenefitsPage from "./Sections/Benefits";
import MainBrandAmbassador from "./Sections/BrandMainPage";
import MiddleInfo from "./Sections/MiddleInfo";
import EligibilityRequirement from "./Sections/EligibilityRequirement";
import BottomBanner from "./Sections/BottomBanner";

const BrandAmbasdorPage = () => {
  const tabs = [
    "Ambassador",
    "Middle Banner",
    "Middle Info",
    "Benefits",
    "How It Works",
    "Eligibility Requirement",
    "Bottom Banner",

    "Faqs",
  ];
  const [activeTab, setActiveTab] = useState("Ambassador");

  const renderSection = () => {
    switch (activeTab) {
      case "Ambassador":
        return <MainBrandAmbassador />;
      case "Middle Banner":
        return <MiddleBanner />;
      case "Middle Info":
        return <MiddleInfo />;
      case "Benefits":
        return <BenefitsPage />;
      case "How It Works":
        return <HowItWorksPage />;
      case "Eligibility Requirement":
        return <EligibilityRequirement />;
      case "Bottom Banner":
        return <BottomBanner />;

      case "Faqs":
        return <Faqs />;

      default:
        return null;
    }
  };

  return (
    <main className="my-8 p-4 mb-16">
      <div className="flex gap-4 overflow-x-scroll mb-8 bg-gray-100 p-2 rounded-2xl shadow-sm w-full scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 w-max rounded-lg text-2xl font-semibold transition-all duration-300 ${
              activeTab === tab
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="mt-16"
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default BrandAmbasdorPage;
