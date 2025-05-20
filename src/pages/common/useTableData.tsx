import { useState, useEffect, useCallback, useMemo } from "react";

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
  const [rawData, setRawData] = useState<T[]>([]);
  const [filteredData, setFilteredData] = useState<T[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const itemsPerPage = 10;

  // Stable function that doesn't change between renders
  const getNestedValue = useCallback((obj: any, path: string) => {
    return path.split('.').reduce((o, p) => (o || {})[p], obj);
  }, []);

  // Memoized data loading function
  const loadData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await fetchData();
      setRawData(result);
      // Don't set filteredData here - let the filter effect handle it
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load data'));
    } finally {
      setIsLoading(false);
    }
  }, [fetchData]);

  // Initial data load (only runs once or when fetchData changes)
  useEffect(() => {
    loadData();
  }, [loadData]);

  // Memoized filter application
  useEffect(() => {
    let result = [...rawData];
    
    // Apply search filter if query exists
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
    
    // Apply status filter if active
    if (statusFilter && filterField) {
      result = result.filter(item => item[filterField] === statusFilter);
    }
    
    setFilteredData(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchQuery, statusFilter, rawData, searchFields, filterField, getNestedValue]);

  // Memoized pagination calculations
  const { paginatedData, totalPages } = useMemo(() => {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
    return { paginatedData, totalPages };
  }, [filteredData, currentPage, itemsPerPage]);

  return {
    paginatedData,
    currentPage,
    totalPages,
    setCurrentPage,
    setSearchQuery,
    setStatusFilter,
    isLoading,
    error,
    reload: loadData,
    rawData, // Optional: expose raw data if needed
    filteredData, // Optional: expose filtered data if needed
  };
}