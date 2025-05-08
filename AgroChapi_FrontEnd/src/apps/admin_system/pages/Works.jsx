import React, { useState } from 'react';
import { useWorks } from '../hooks/useWorks';
import { useActivities } from '../hooks/useActivities';
import { Box } from '@mui/material';
import WorksTable from '../components/activities/WorksTable';
import Spinner from '../../../components/common/Spinner';
import CreateWorkButton from '../components/activities/CreateWorkButton';
import CreateWorkModal from '../components/activities/CreateWorkModal';

const WorksPage = () => {
  const {
    works,
    page,
    pageSize,
    totalCount,
    fetchWorks,
    loading: loadingWorks,
    create,
  } = useWorks();
  const { activities, loading: loadingActivities } = useActivities();

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const openCreateModal = () => setIsCreateModalOpen(true);
  const closeCreateModal = () => setIsCreateModalOpen(false);

  const isLoading = loadingWorks || loadingActivities;

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex justify-between items-center mb-4 mx-8">
            <h1 className="text-xl font-bold">Labores</h1>
            <Box display="flex" gap={2}>
              <CreateWorkButton onClick={openCreateModal} />
            </Box>
          </div>

          <WorksTable
            works={works}
            page={page}
            pageSize={pageSize}
            totalCount={totalCount}
            fetchWorks={fetchWorks}
          />

          <CreateWorkModal
            isOpen={isCreateModalOpen}
            onClose={closeCreateModal}
            onCreate={(workData) => create(workData).then(closeCreateModal)}
            activities={activities}
          />
        </>
      )}
    </>
  );
};

export default WorksPage;
