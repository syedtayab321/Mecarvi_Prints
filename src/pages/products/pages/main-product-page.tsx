// app/settings/products/page.tsx
"use client";

import LeftSideTabs from "@/pages/tabbar/customlefttabbar";
import { 
  FiBox, 
  FiLayers,
  FiPlus,
  FiFileText,
  FiUsers,
  FiStar,
  FiMessageSquare,
  FiHelpCircle,
  FiAlertCircle
} from "react-icons/fi";
import AllProductsPage from "../components/AllProductComponents/all-prodcuts-page";
import DigitalProductsPage from "../components/DigitalProductComponents/digital-product-page";
import PlusProductPage from "../components/PlusProductComponents/plus-product-page";
import QuotationProductsPage from "../components/QuotationProductComponents/quotation-product-page";
import AffiliateProductsPage from "../components/AffilateProductComponents/affilate-product-page";
import PopularProductsPage from "../components/PopularProductComponents/popular-products-page";
import ProductReviewsPage from "../components/ProductReviewsComponents/product-reviews-page";
import ProductQuestionsPage from "../components/ProductQuestionComponents/product-question-page";

export const MainProductPage = () => {
  const tabs = [
    {
      id: "all-products",
      label: "All Products",
      icon: <FiBox size={18} />,
      content: <AllProductsPage />,
    },
    {
      id: "digital-products",
      label: "Digital Products",
      icon: <FiLayers size={18} />,
      content: <DigitalProductsPage />,
    },
    {
      id: "plus-products",
      label: "Plus Products",
      icon: <FiPlus size={18} />,
      content: <PlusProductPage />,
    },
    {
      id: "quotation-products",
      label: "Quotation Products",
      icon: <FiFileText size={18} />,
      content: <QuotationProductsPage />,
    },
    {
      id: "affiliate-products",
      label: "Affiliate Products",
      icon: <FiUsers size={18} />,
      content: <AffiliateProductsPage />,
    },
    {
      id: "popular-products",
      label: "Popular Products",
      icon: <FiStar size={18} />,
      content: <PopularProductsPage />,
    },
    {
      id: "product-reviews",
      label: "Product Reviews",
      icon: <FiMessageSquare size={18} />,
      content: <ProductReviewsPage />,
    },
    {
      id: "product-questions",
      label: "Product Questions",
      icon: <FiHelpCircle size={18} />,
      content: <ProductQuestionsPage />,
    },
    {
      id: "reported-products",
      label: "Reported Products",
      icon: <FiAlertCircle size={18} />,
      content: <AllProductsPage />,
    },
  ];

  return (
    <div className="h-[calc(100vh-64px)] bg-white">
      <LeftSideTabs 
        tabs={tabs}
        defaultActiveTab="all-products"
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

export default MainProductPage;