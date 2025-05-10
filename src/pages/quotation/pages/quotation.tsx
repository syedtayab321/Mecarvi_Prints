"use client";

import React, { useState, useEffect } from "react";
import QuotationTable from "../components/quotationTable";
import { Quotation } from "../types/quotationType";

const QuotationsPage = () => {
  const [quotations, setQuotations] = useState<Quotation[]>([]);
  const [filteredQuotations, setFilteredQuotations] = useState<Quotation[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const itemsPerPage = 10;

  useEffect(() => {
    // Mock data
    const mockQuotations: Quotation[] = [
      {
        id: 1,
        name: "Harriett E. Penix",
        avatar: "/images/chair1.jpg",
        quoteNo: "QUO-103452",
        date: "Apr 19, 2025",
        seller: "John Doe",
        product: "Premium Widget",
        price: "$532.75",
        status: "Active",
      },
      {
        id: 2,
        name: "Carol L. Simon",
        avatar: "/avatars/2.jpg",
        quoteNo: "QUO-984321",
        date: "Nov 30, 2024",
        seller: "Jane Smith",
        product: "Deluxe Package",
        price: "$689.50",
        status: "Block",
      },
    ];

    // Add more mock data for pagination testing
    for (let i = 3; i <= 25; i++) {
      mockQuotations.push({
        id: i,
        name: `Customer ${i}`,
        avatar: `/avatars/${i % 5 || 1}.jpg`,
        quoteNo: `QUO-${100000 + i}`,
        date: new Date(2024, (i % 12), (i % 28) + 1).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
        seller: `Seller ${String.fromCharCode(65 + (i % 5))}`,
        product: ['Basic', 'Standard', 'Premium', 'Deluxe', 'Ultimate'][i % 5] + ' Package',
        price: `$${(Math.random() * 1000).toFixed(2)}`,
        status: ['Active', 'Block', 'Pending', 'Completed'][i % 4] as any,
      });
    }

    setQuotations(mockQuotations);
    setFilteredQuotations(mockQuotations);
  }, []);

  useEffect(() => {
    let result = quotations;
    
    // Apply search filter
    if (searchQuery) {
      result = result.filter(quotation =>
        quotation.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        quotation.quoteNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        quotation.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
        quotation.seller.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply status filter
    if (statusFilter) {
      result = result.filter(quotation => quotation.status === statusFilter);
    }
    
    setFilteredQuotations(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchQuery, statusFilter, quotations]);

  // Pagination logic
  const totalPages = Math.ceil(filteredQuotations.length / itemsPerPage);
  const paginatedQuotations = filteredQuotations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilter = (filter: string) => {
    setStatusFilter(filter);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Quotation Management</h1>
      <QuotationTable
        quotations={paginatedQuotations}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onSearch={handleSearch}
        onFilter={handleFilter}
      />
    </div>
  );
};

export default QuotationsPage;