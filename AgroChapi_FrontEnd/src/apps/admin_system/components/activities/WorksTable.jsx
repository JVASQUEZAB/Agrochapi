import React from 'react';
import CustomTable from '../../../../components/ui/DataTable';
import { getWorksColumns } from './WorksColumns';

const WorksTable = ({ works, page, pageSize, totalCount, fetchWorks }) => {
  const columns = getWorksColumns();

  // Actualización para mejorar la forma en que se maneja la paginación
  return (
    <CustomTable
      columns={columns}
      data={works}
      manualPagination
      rowCount={totalCount}
      state={{ pagination: { pageIndex: page, pageSize } }}
      onPaginationChange={({ pageIndex, pageSize }) => {
        fetchWorks({ pageIndex, size: pageSize });
      }}
      
      loading={works.length === 0}
    />
  );
};

export default WorksTable;
