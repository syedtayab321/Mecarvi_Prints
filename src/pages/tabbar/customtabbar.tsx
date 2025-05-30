// components/CustomTabs.tsx
"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useSwipeable } from "react-swipeable";

interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
  content?: React.ReactNode;
  notificationCount?: number;
}

interface CustomTabsProps {
  tabs: Tab[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  className?: string;
  tabContainerClassName?: string;
  tabClassName?: string;
  activeTabClassName?: string;
  contentClassName?: string;
  indicatorClassName?: string;
  showNotificationBadge?: boolean;
  variant?: "default" | "pill" | "underline";
  size?: "sm" | "md" | "lg";
}

const CustomTabs: React.FC<CustomTabsProps> = ({
  tabs,
  activeTab: controlledActiveTab,
  onTabChange,
  className = "",
  tabContainerClassName = "",
  tabClassName = "",
  activeTabClassName = "",
  contentClassName = "",
  indicatorClassName = "",
  showNotificationBadge = true,
  variant = "default",
  size = "md",
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(tabs[0]?.id || "");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: "0px", width: "0px" });
  const [isScrolled, setIsScrolled] = useState(false);

  const isControlled = controlledActiveTab !== undefined;
  const activeTab = isControlled ? controlledActiveTab : internalActiveTab;

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  // Initialize ref array
  useEffect(() => {
    tabRefs.current = tabRefs.current.slice(0, tabs.length);
  }, [tabs.length]);

  const updateIndicator = useCallback((tabIndex: number) => {
    const tabElement = tabRefs.current[tabIndex];
    if (tabElement) {
      setIndicatorStyle({
        left: `${tabElement.offsetLeft}px`,
        width: `${tabElement.offsetWidth}px`,
      });

      // Scroll to center the active tab if it's not fully visible
      if (tabsContainerRef.current) {
        const container = tabsContainerRef.current;
        const tab = tabElement;
        const containerWidth = container.clientWidth;
        const tabLeft = tab.offsetLeft;
        const tabWidth = tab.clientWidth;

        if (tabLeft < container.scrollLeft) {
          container.scrollTo({
            left: tabLeft - 20,
            behavior: "smooth",
          });
        } else if (tabLeft + tabWidth > container.scrollLeft + containerWidth) {
          container.scrollTo({
            left: tabLeft + tabWidth - containerWidth + 20,
            behavior: "smooth",
          });
        }
      }
    }
  }, []);

  const handleTabChange = (tabId: string) => {
    if (!isControlled) {
      setInternalActiveTab(tabId);
    }
    onTabChange?.(tabId);
  };

  const handleSwipeLeft = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    if (currentIndex < tabs.length - 1) {
      handleTabChange(tabs[currentIndex + 1].id);
    }
  };

  const handleSwipeRight = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    if (currentIndex > 0) {
      handleTabChange(tabs[currentIndex - 1].id);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    trackMouse: true,
  });

  useEffect(() => {
    const activeIndex = tabs.findIndex(tab => tab.id === activeTab);
    if (activeIndex >= 0) {
      updateIndicator(activeIndex);
    }
  }, [activeTab, tabs, updateIndicator]);

  useEffect(() => {
    const container = tabsContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setIsScrolled(container.scrollLeft > 0);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  if (tabs.length === 0) return null;

  // Size classes
  const sizeClasses = {
    sm: "px-3 py-2 text-xs",
    md: "px-4 py-2.5 text-sm",
    lg: "px-5 py-3 text-base",
  };

  // Variant classes
  const variantClasses = {
    default: {
      base: "border-b border-gray-200",
      tab: "relative hover:text-primary-500",
      active: "text-primary-600 font-semibold",
      indicator: "bg-primary-600 h-0.5 bottom-0",
    },
    pill: {
      base: "gap-1",
      tab: "rounded-lg hover:bg-gray-100",
      active: "bg-primary-100 text-primary-600 font-semibold",
      indicator: "hidden",
    },
    underline: {
      base: "border-b border-gray-200",
      tab: "border-b-2 border-transparent hover:text-primary-500",
      active: "text-primary-600 border-primary-600 font-semibold",
      indicator: "hidden",
    },
  };

  return (
    <div className={`flex flex-col w-full ${className}`}>
      {/* Tab Headers */}
      <div 
        ref={tabsContainerRef}
        className={`relative flex overflow-x-auto no-scrollbar ${variantClasses[variant].base} ${tabContainerClassName} ${
          isScrolled ? "shadow-[inset_-8px_0_8px_-8px_rgba(0,0,0,0.1)]" : ""
        }`}
      >
        <div className="flex">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              ref={(el) => { tabRefs.current[index] = el; }}
              className={`flex items-center justify-center transition-all duration-300 ${sizeClasses[size]} min-w-fit ${
                tab.id === activeTab
                  ? `${variantClasses[variant].active} ${activeTabClassName}`
                  : `text-gray-600 ${tabClassName}`
              } ${variantClasses[variant].tab}`}
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.icon && <span className="mr-2">{tab.icon}</span>}
              {tab.label}
              {showNotificationBadge && tab.notificationCount ? (
                <span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                  {tab.notificationCount}
                </span>
              ) : null}
            </button>
          ))}
        </div>
        {/* Animated Indicator */}
        {variant === "default" && (
          <div
            className={`absolute transition-all duration-300 ${variantClasses[variant].indicator} ${indicatorClassName}`}
            style={indicatorStyle}
          />
        )}
      </div>

      {/* Tab Content */}
      <div 
        className={`mt-4 ${contentClassName}`}
        {...swipeHandlers}
      >
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default CustomTabs;