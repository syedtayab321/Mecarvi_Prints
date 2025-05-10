'use client'

import React, { useState } from "react";
import { SectionType } from '@/pages/sidebar/types/sidebar';
import {
  FaHome,
  FaBars,
  FaTimes,
  FaStar,
  FaShoppingBasket,
  FaUsers,
  FaUserTie,
  FaBoxes,
  FaChartBar,
  FaChevronDown,
  FaChevronRight,
  FaSignOutAlt,
  FaHandHoldingHeart,
  FaBook,
  FaListAlt,
  FaGift, FaCog,
} from "react-icons/fa";

interface NavItem {
  text: string;
  icon: React.ComponentType<{ className?: string }>;
  link: SectionType;
  subItems?: Omit<NavItem, 'subItems'>[];
}

interface SidebarProps {
  onSelect: (link: SectionType) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeSection?: SectionType;
}

const navItems: NavItem[] = [
  { text: "Dashboard", icon: FaHome, link: "dashboard" },
  { 
    text: "Orders", 
    icon: FaShoppingBasket, 
    link: "all-orders",
    subItems: [
      { text: "All Orders", icon: FaListAlt, link: "all-orders" },
      { text: "Order Verification", icon: FaListAlt, link: "order-verification" },
      { text: "Order Replacement", icon: FaListAlt, link: "order-replacement" },
      { text: "Return Requests", icon: FaListAlt, link: "return-requests" },
    ]
  },
  { text: "Quotation", icon: FaHome, link: "quotation" },
  { 
    text: "Customers", 
    icon: FaUsers, 
    link: "all-customers",
    subItems: [
      { text: "All Customers", icon: FaUsers, link: "all-customers" },
      { text: "Permanent Customers", icon: FaUserTie, link: "permanent-customers" },
      { text: "Temporary Customers", icon: FaUsers, link: "temporary-customers" },
    ]
  },
  { 
    text: "Financing", 
    icon: FaChartBar, 
    link: "financing",
    subItems: [
      { text: "Financing Options", icon: FaChartBar, link: "financing" },
    ]
  },
  { 
    text: "Products", 
    icon: FaBoxes, 
    link: "products",
    subItems: [
      { text: "Product Management", icon: FaBoxes, link: "products" },
    ]
  },
  { 
    text: "Loyalty", 
    icon: FaStar, 
    link: "loyality",
    subItems: [
      { text: "Loyalty Program", icon: FaStar, link: "loyality" },
    ]
  },
  { 
    text: "Gift Cards", 
    icon: FaGift, 
    link: "gift-cards",
    subItems: [
      { text: "Gift Cards", icon: FaGift, link: "gift-cards" },
    ]
  },
  { 
    text: "Support", 
    icon: FaHandHoldingHeart, 
    link: "support",
    subItems: [
      { text: "Customer Support", icon: FaHandHoldingHeart, link: "support" },
    ]
  },
  { 
    text: "Marketing", 
    icon: FaChartBar, 
    link: "marketing",
    subItems: [
      { text: "Marketing Campaigns", icon: FaChartBar, link: "marketing" },
    ]
  },
  { 
    text: "Donations", 
    icon: FaHandHoldingHeart, 
    link: "donations",
    subItems: [
      { text: "Donation Management", icon: FaHandHoldingHeart, link: "donations" },
    ]
  },
  { 
    text: "Blog", 
    icon: FaBook, 
    link: "blog",
    subItems: [
      { text: "Blog Management", icon: FaBook, link: "blog" },
    ]
  },
  { 
    text: "Reports", 
    icon: FaChartBar, 
    link: "reports",
    subItems: [
      { text: "Analytics Reports", icon: FaChartBar, link: "reports" },
    ]
  },
  { 
    text: "Settings", 
    icon: FaCog, 
    link: "settings",
    subItems: [
      { text: "System Settings", icon: FaCog, link: "settings" },
    ]
  },
  { 
    text: "Users", 
    icon: FaUsers, 
    link: "users",
    subItems: [
      { text: "User Management", icon: FaUsers, link: "users" },
    ]
  },
];

const Sidebar: React.FC<SidebarProps> = ({ 
  onSelect, 
  isOpen, 
  setIsOpen,
  activeSection = "dashboard" 
}) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    "orders": true,
    "customers": true,
    "financing": true,
    "products": true,
    "loyalty": true,
    "gift cards": true,
    "support": true,
    "marketing": true,
    "donations": true,
    "blog": true,
    "reports": true,
    "settings": true,
    "users": true
  });

  const handleClick = (link: SectionType) => {
    onSelect(link);
  };

  const toggleExpand = (text: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [text.toLowerCase()]: !prev[text.toLowerCase()]
    }));
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 flex flex-col bg-[#1e293b] text-white transition-all duration-300 ease-in-out ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Toggle Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:text-blue-300 focus:outline-none transition-transform hover:scale-110"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Sidebar Title */}
      {isOpen && (
        <div className="flex items-center justify-center p-4 mb-2">
          <h1 className="text-xl font-bold text-white tracking-tight">
            Mecarvi Prints
          </h1>
        </div>
      )}

      {/* Sidebar Menu */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => (
            <li key={item.text}>
              <div className="flex flex-col">
                <button
                  onClick={() => item.subItems ? toggleExpand(item.text) : handleClick(item.link)}
                  className={`flex w-full items-center gap-3 rounded-lg p-2 transition-all duration-200 ${
                    activeSection === item.link
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-200 hover:bg-gray-700"
                  }`}
                >
                  <item.icon className={`h-5 w-5 flex-shrink-0 ${activeSection === item.link ? 'text-white' : 'text-blue-300'}`} />
                  {isOpen && (
                    <div className="flex flex-1 items-center justify-between overflow-hidden">
                      <span className="text-sm font-medium truncate">{item.text}</span>
                      {item.subItems && isOpen && (
                        expandedItems[item.text.toLowerCase()] ? 
                          <FaChevronDown size={12} className="ml-2" /> : 
                          <FaChevronRight size={12} className="ml-2" />
                      )}
                    </div>
                  )}
                </button>

                {item.subItems && isOpen && expandedItems[item.text.toLowerCase()] && (
                  <ul className="ml-6 mt-1 space-y-1 border-l-2 border-gray-700 pl-2">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.text}>
                        <button
                          onClick={() => handleClick(subItem.link)}
                          className={`flex w-full items-center gap-3 rounded-lg p-2 transition-all duration-200 ${
                            activeSection === subItem.link
                              ? "bg-blue-600/90 text-white"
                              : "text-gray-300 hover:bg-gray-700/50"
                          }`}
                        >
                          <subItem.icon className="h-4 w-4 flex-shrink-0" />
                          {isOpen && (
                            <span className="text-sm truncate">{subItem.text}</span>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-3 mt-auto">
        <button
          onClick={() => console.log("Logout clicked")}
          className="flex w-full items-center gap-3 rounded-lg bg-gray-700 p-2 text-white transition-all duration-200 hover:bg-gray-600"
        >
          <FaSignOutAlt className="h-5 w-5 flex-shrink-0" />
          {isOpen && <span className="text-sm font-medium">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;