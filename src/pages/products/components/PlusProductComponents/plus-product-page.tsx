"use client";

import React from "react";
import CommonCustomTable from "@/pages/common/commonCustomTable";
import { useTableData } from "@/pages/common/useTableData";

interface PlusProduct {
  id: number;
  product: {
    image: string;
    title: string;
  };
  category: string;
  stock: number;
  sales: number;
  rating: number;
  status: "Published" | "Unpublished" | "Out of Stock";
}

const mockData: PlusProduct[] = [
  {
    id: 1,
    product: {
      image: "https://via.placeholder.com/40/3b82f6/ffffff?text=P1",
      title: "Premium Analytics Dashboard"
    },
    category: "Templates",
    stock: 128,
    sales: 542,
    rating: 4.9,
    status: "Published",
  },
  {
    id: 2,
    product: {
      image: "https://via.placeholder.com/40/10b981/ffffff?text=P2",
      title: "AI Content Generator Plugin"
    },
    category: "Plugins",
    stock: 0,
    sales: 876,
    rating: 4.7,
    status: "Out of Stock",
  },
  {
    id: 3,
    product: {
      image: "https://via.placeholder.com/40/f59e0b/ffffff?text=P3",
      title: "Mobile App UI Kit"
    },
    category: "UI Kits",
    stock: 56,
    sales: 321,
    rating: 4.5,
    status: "Published",
  },
];

const PlusProductPage = () => {
  const fetchData = React.useCallback(() => mockData, []);
  
  const {
    paginatedData,
    currentPage,
    totalPages,
    setCurrentPage,
    setSearchQuery,
    setStatusFilter,
    isLoading,
    error,
    reload,
  } = useTableData<PlusProduct>(
    fetchData,
    ["product.title", "category", "status"],
    "status"
  );

  const columns = [
    {
      key: "id",
      header: "ID",
      width: "80px",
    },
    {
      key: "product",
      header: "Product",
      width: "250px",
      render: (item: PlusProduct) => (
        <div className="flex items-center">
          <img 
            src={item.product.image} 
            alt={item.product.title}
            className="w-10 h-10 rounded-md object-cover mr-3"
          />
          <span className="font-medium">{item.product.title}</span>
        </div>
      ),
    },
    {
      key: "category",
      header: "Category",
      width: "150px",
      render: (item: PlusProduct) => (
        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
          {item.category}
        </span>
      ),
    },
    {
      key: "stock",
      header: "Stock",
      width: "120px",
      render: (item: PlusProduct) => (
        <div className="flex items-center">
          <div 
            className={`w-3 h-3 rounded-full mr-2 ${
              item.stock > 50 ? 'bg-green-500' : 
              item.stock > 0 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
          />
          <span className={item.stock === 0 ? "text-red-500 font-medium" : ""}>
            {item.stock} units
          </span>
        </div>
      ),
    },
    {
      key: "sales",
      header: "Sales",
      width: "120px",
      render: (item: PlusProduct) => (
        <div className="flex items-center">
          <svg 
            className="w-4 h-4 text-blue-500 mr-1" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
          </svg>
          <span className="font-medium">{item.sales}</span>
        </div>
      ),
    },
    {
      key: "rating",
      header: "Rating",
      width: "150px",
      render: (item: PlusProduct) => (
        <div className="flex items-center">
          <div className="flex mr-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-4 h-4 ${star <= Math.round(item.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm font-medium text-gray-600">
            {item.rating.toFixed(1)}
          </span>
        </div>
      ),
    },
    {
      key: "status",
      header: "Status",
      width: "150px",
      render: (item: PlusProduct) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            item.status === "Published"
              ? "bg-green-100 text-green-800"
              : item.status === "Unpublished"
              ? "bg-gray-100 text-gray-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {item.status}
        </span>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      width: "120px",
      render: (item: PlusProduct) => (
        <div className="flex gap-2">
          <button 
            className="text-blue-600 hover:text-blue-800"
            title="Edit Plan"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </button>
          <button 
            className="text-red-600 hover:text-red-800"
            title="Delete Plan"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      ),
    },
  ];

  const filterOptions = [
    { value: "Published", label: "Published" },
    { value: "Unpublished", label: "Unpublished" },
    { value: "Out of Stock", label: "Out of Stock" },
  ];

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error.message}</span>
          <button 
            onClick={reload}
            className="absolute top-0 right-0 px-4 py-3"
          >
            <svg className="fill-current h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
            </svg>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Plus Products</h1>
        <div className="flex gap-4">
          <button 
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg flex items-center"
            onClick={reload}
            disabled={isLoading}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
            {isLoading ? 'Loading...' : 'Refresh'}
          </button>
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
            disabled={isLoading}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Add Plus Product
          </button>
        </div>
      </div>
      <CommonCustomTable<PlusProduct>
        data={paginatedData}
        columns={columns}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        onSearch={setSearchQuery}
        onFilter={setStatusFilter}
        filterOptions={filterOptions}
        title="Plus Products List"
      />
    </div>
  );
};

export default PlusProductPage;