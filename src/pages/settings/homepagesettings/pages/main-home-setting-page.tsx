// app/settings/homepage/page.tsx
"use client";

import LeftSideTabs from "@/pages/tabbar/customlefttabbar";
import { 
  FiHome, 
  FiPrinter, 
  FiSliders, 
  FiImage, 
  FiBox,
  FiSettings
} from "react-icons/fi";
import PrintPageOrder from "../components/print-order";

export const HomepageSettings = () => {
  const tabs = [
    {
      id: "home-customization",
      label: "Homepage Customization",
      icon: <FiHome size={18} />,
      content: <PrintPageOrder />,
    },
    {
      id: "print-order",
      label: "Print Order Settings",
      icon: <FiPrinter size={18} />,
      content: <PrintPageOrder />,
    },
    {
      id: "print-slider",
      label: "Print Slider",
      icon: <FiSliders size={18} />,
      content: <PrintPageOrder />,
    },
    {
      id: "print-banners",
      label: "Print Banners",
      icon: <FiImage size={18} />,
      content: <PrintPageOrder />,
    },
    {
      id: "our-products",
      label: "Our Products Display",
      icon: <FiBox size={18} />,
      content: <PrintPageOrder />,
    },
    {
      id: "advanced",
      label: "Advanced Settings",
      icon: <FiSettings size={18} />,
      content: <div>Advanced configuration options</div>,
    },
  ];

  return (
    <div className="h-[calc(100vh-64px)] bg-white">
      <LeftSideTabs 
        tabs={tabs}
        defaultActiveTab="home-customization"
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

export default HomepageSettings;