// hooks/useTableData.ts
import { useState, useEffect } from "react";

type NestedKeyOf<T> = T extends object ? {
  [K in keyof T]: K extends string ? 
    T[K] extends object ? `${K}.${NestedKeyOf<T[K]>}` : K
    : never
}[keyof T] : never;

export function useTableData<T>(
  fetchData: () => Promise<T[]> | T[],
  searchFields: (NestedKeyOf<T> | keyof T)[],
  filterField?: keyof T
) {
  const [data, setData] = useState<T[]>([]);
  const [filteredData, setFilteredData] = useState<T[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const itemsPerPage = 10;

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchData();
      setData(result);
      setFilteredData(result);
    };
    loadData();
  }, [fetchData]);

  const getNestedValue = (obj: any, path: string) => {
    return path.split('.').reduce((o, p) => (o || {})[p], obj);
  };

  useEffect(() => {
    let result = data;
    
    // Apply search filter
    if (searchQuery) {
      result = result.filter(item =>
        searchFields.some(field => {
          const fieldValue = typeof field === 'string' && field.includes('.') 
            ? getNestedValue(item, field)
            : item[field as keyof T];
          return String(fieldValue).toLowerCase().includes(searchQuery.toLowerCase());
        })
      );
    }
    
    // Apply status filter
    if (statusFilter && filterField) {
      result = result.filter(item => item[filterField] === statusFilter);
    }
    
    setFilteredData(result);
    setCurrentPage(1);
  }, [searchQuery, statusFilter, data, searchFields, filterField]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return {
    paginatedData,
    currentPage,
    totalPages,
    setCurrentPage,
    setSearchQuery,
    setStatusFilter,
  };
}