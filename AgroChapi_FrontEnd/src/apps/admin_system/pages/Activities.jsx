import React, { useState } from 'react';
import { useActivities } from '../hooks/useActivities';
import { Box } from '@mui/material';
import ActivitiesTable from '../components/activities/ActivitiesTable';
import Spinner from '../../../components/common/Spinner';
import CreateActivityButton from '../components/activities/CreateActivityButton';
import CreateActivityModal from '../components/activities/CreateActivityModal';

const ActivitiesPage = () => {
  const { activities, loading, create } = useActivities();

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const openCreateModal = () => setIsCreateModalOpen(true);
  const closeCreateModal = () => setIsCreateModalOpen(false);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex justify-between items-center mb-4 mx-8">
            <h1 className="text-xl font-bold">Actividades</h1>
            <Box display="flex" gap={2}>
              <CreateActivityButton onClick={openCreateModal} />
            </Box>
          </div>

          <ActivitiesTable activities={activities} />

          <CreateActivityModal
            isOpen={isCreateModalOpen}
            onClose={closeCreateModal}
            onCreate={(activityData) => create(activityData).then(closeCreateModal)}
          />
        </>
      )}
    </>
  );
};

export default ActivitiesPage;
