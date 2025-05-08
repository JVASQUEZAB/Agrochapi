import React from 'react';
import CustomTable from '../../../../components/ui/DataTable';
import { getActivityColumns } from './ActivitiesColumns';



const ActivitiesTable = ({ activities }) => {
  const columns = getActivityColumns();
  return <CustomTable columns={columns} data={activities} />;
}
export default ActivitiesTable;