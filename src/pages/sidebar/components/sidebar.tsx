'use client'

import React, { useState } from "react";
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
  FaGift,
  FaCog,
} from "react-icons/fa";

import { SidebarType } from "../types/sidebar";

interface NavItem {
  text: string;
  icon: React.ComponentType<{ className?: string }>;
  link: SidebarType;
  subItems?: NavItem[];
}

interface SidebarProps {
  onSelect: (link: SidebarType) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeSection?: SidebarType;
}

const navItems: NavItem[] = [
  // Dashboard
  { text: "Dashboard", icon: FaHome, link: "dashboard" },

  // Orders
  { 
    text: "Orders", 
    icon: FaShoppingBasket, 
    link: "orders",
    subItems: [
       { text: "Order Details", icon: FaListAlt, link: "order-details" },
      { text: "All Orders", icon: FaListAlt, link: "all-orders" },
      { text: "Order Verification", icon: FaListAlt, link: "order-verification" },
      // { text: "Order Replacement", icon: FaListAlt, link: "order-replacement" },
      // { text: "Return Requests", icon: FaListAlt, link: "return-requests" },
      // { text: "Refund Order", icon: FaListAlt, link: "refund-order" },
      { text: "Order Dispute", icon: FaListAlt, link: "order-dispute" },
      { text: "Order Proof", icon: FaListAlt, link: "order-proof" },
    ]
  },

  // Quotation
  { text: "Quotation", icon: FaHome, link: "quotation" },

  // Customers
  { 
    text: "Customers", 
    icon: FaUsers, 
    link: "all-customers",
    subItems: [
      { text: "All Customers", icon: FaUsers, link: "all-customers" },
      { text: "Customer Verification", icon: FaUserTie, link: "customer-verification" },
      { text: "Subscription Plan", icon: FaUsers, link: "subscription-plan" },
      { text: "Affilate Withdral", icon: FaUserTie, link: "affilate-withdrawl" },
      { text: "Customer Transaction", icon: FaUsers, link: "customer-transaction" },
    ]
  },

  // Financing
  { 
    text: "Financing", 
    icon: FaChartBar, 
    link: "business-advantage",
    subItems: [
      { text: "Business Advantage", icon: FaChartBar, link: "business-advantage" },
      { text: 'Business Advantage Verification', icon: FaChartBar, link: "business-advantage-verification"},
      { text: "Business Preferred", icon: FaChartBar, link: "business-preferred" },
      { text: 'Business Preferred Verification', icon: FaChartBar, link: "business-preferred-verification"},
      { text: "Business Store", icon: FaChartBar, link: "business-store" },
      { text: 'Business Store Verification', icon: FaChartBar, link: "business-store-verification"}
    ]
  },

  // Products
  { 
    text: "Products", 
    icon: FaBoxes, 
    link: "products",
    subItems: [
      { text: "Product Management", icon: FaBoxes, link: "products" },
    ]
  },

  // Loyalty
  { 
    text: "Loyalty", 
    icon: FaStar, 
    link: "loyality",
    subItems: [
      { text: "Loyalty Points", icon: FaStar, link: "loyality" },
    ]
  },

  // Gift Cards
  { 
    text: "Gift Cards", 
    icon: FaGift, 
    link: "gift-cards",
    subItems: [
      { text: "Gift Cards", icon: FaGift, link: "gift-cards" },
      { text: "Gift Cards Transactions", icon: FaGift, link: "gift-card-transactions" },
    ]
  },

  // Support
  { 
    text: "Support", 
    icon: FaHandHoldingHeart, 
    link: "support",
    subItems: [
      { text: "Customer Support", icon: FaHandHoldingHeart, link: "support" },
    ]
  },

  // Marketing
  { 
    text: "Marketing", 
    icon: FaChartBar, 
    link: "email",
    subItems: [
      { text: "Bulk Email", icon: FaChartBar, link: "email" },
      { text: "Sms", icon: FaChartBar, link: "sms" },
      { text: "Coupons", icon: FaChartBar, link: "coupons" },
    ]
  },

  // Donations
  { 
    text: "Donations", 
    icon: FaHandHoldingHeart, 
    link: "charity",
    subItems: [
      { text: "Charity", icon: FaHandHoldingHeart, link: "charity" },
      { text: "Donation", icon: FaHandHoldingHeart, link: "donations" },
    ]
  },

  // Blog
  { 
    text: "Blog", 
    icon: FaBook, 
    link: "blog",
    subItems: [
      { text: "Blog Management", icon: FaBook, link: "blog" },
    ]
  },

  // Reports
  { 
    text: "Reports", 
    icon: FaChartBar, 
    link: "reports",
    subItems: [
      { text: "Analytics Reports", icon: FaChartBar, link: "reports" },
    ]
  },

  // Settings (with nested sub-items)
  { 
    text: "Settings", 
    icon: FaCog, 
    link: "settings",
    subItems: [
      { 
        text: "General Settings", 
        icon: FaCog, 
        link: "general-settings",
        // subItems: [
        //   { text: "Main", icon: FaCog, link: "main" },
        // ]
      },
      { 
        text: "Menu Settings", 
        icon: FaCog, 
        link: "menu-settings",
        subItems: [
          { text: "Header Menu", icon: FaCog, link: "header-menu-settings" },
          { text: "Footer Menu", icon: FaCog, link: "footer-menu-settings" },
          { text: "Sidebar Menu", icon: FaCog, link: "sidebar-menu-settings" },
        ]
      },
      { 
        text: "Payment Settings", 
        icon: FaCog, 
        link: "payment-settings",
        // subItems: [
        //   { text: "Payment Gateway", icon: FaCog, link: "payment-gateway" },
        // ]
      },
      { 
        text: "Email Settings", 
        icon: FaCog, 
        link: "email-settings",
        subItems: [
          { text: "SMTP Settings", icon: FaCog, link: "smtp-settings" },
          { text: "Email Templates", icon: FaCog, link: "email-templates" },
          { text: "Notification Settings", icon: FaCog, link: "notification-settings" },
        ]
      },
     { 
        text: "HomePage Settings", 
        icon: FaCog, 
        link: "home-page-settings",
        // subItems: [
        //   { text: "Header Menu", icon: FaCog, link: "header-menu-settings" },
        //   { text: "Footer Menu", icon: FaCog, link: "footer-menu-settings" },
        //   { text: "Sidebar Menu", icon: FaCog, link: "sidebar-menu-settings" },
        // ]
      },
    ]
  },

  // Users
  { 
    text: "Users", 
    icon: FaUsers, 
    link: "roles",
    subItems: [
      { text: "Staff", icon: FaUsers, link: "staff" },
      { text: "Manage Roles", icon: FaUsers, link: "roles" },
    ]
  },
];

const Sidebar: React.FC<SidebarProps> = ({ 
  onSelect, 
  isOpen, 
  setIsOpen,
  activeSection = "dashboard" 
}) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const handleClick = (link: SidebarType) => {
    onSelect(link);
  };

  const toggleExpand = (text: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [text.toLowerCase()]: !prev[text.toLowerCase()]
    }));
  };

  const renderNavItems = (items: NavItem[], level = 0) => {
    return items.map((item) => (
      <li key={`${item.text}-${level}`}>
        <div className="flex flex-col">
          <button
            onClick={() => item.subItems ? toggleExpand(item.text) : handleClick(item.link)}
            className={`flex cursor-pointer w-full items-center gap-3 rounded-lg p-2 transition-all duration-200 ${
              activeSection === item.link
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-200 hover:bg-gray-700"
            }`}
            style={{ paddingLeft: `${level * 12 + 8}px` }}
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
            <ul className="space-y-1">
              {renderNavItems(item.subItems, level + 1)}
            </ul>
          )}
        </div>
      </li>
    ));
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
          className="text-white hover:text-blue-300 focus:outline-none transition-transform hover:scale-110 cursor-pointer"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Sidebar Title */}
      {isOpen && (
        <div className="flex items-center justify-center p-4 mb-2">
          <h1 className="text-xl font-bold text-white tracking-tight cursor-default">
            Mecarvi Prints
          </h1>
        </div>
      )}

      {/* Sidebar Menu */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-1 px-2">
          {renderNavItems(navItems)}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-3 mt-auto">
        <button
          onClick={() => console.log("Logout clicked")}
          className="flex w-full items-center gap-3 rounded-lg bg-gray-700 p-2 text-white transition-all duration-200 hover:bg-gray-600 cursor-pointer"
        >
          <FaSignOutAlt className="h-5 w-5 flex-shrink-0" />
          {isOpen && <span className="text-sm font-medium">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;