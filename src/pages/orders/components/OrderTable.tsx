import React from 'react';
import CustomTable from '@/pages/common/customTable';
import { Order, OrderStatus } from '@/pages/orders/types/OrderTypes';
import { tableConfigurations } from '@/pages/orders/configs/TableConfigs';

interface OrderTableProps {
  activeFilter: OrderStatus;
  data: Order[];
  onView: (order: Order) => void;
  onDelete: (order: Order) => void;
}

const OrderTable: React.FC<OrderTableProps> = ({
  activeFilter,
  data,
  onView,
  onDelete,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <CustomTable
        columns={tableConfigurations[activeFilter]}
        data={data}
        onView={onView as (row: any) => void}
        onDelete={onDelete as (row: any) => void}
      />
    </div>
  );
};

export default OrderTable;