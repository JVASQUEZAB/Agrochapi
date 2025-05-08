import { useState, useEffect } from 'react';
import {
  getActivity,
  createActivity,
  updateActivity,
  deleteActivity,
} from '../services/activitiesService';
import { showToast } from '../../../lib/toast';



export const useActivities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchActivities = async () => {
    setLoading(true);
    try {
      const response = await getActivity();
      setActivities(response);
    } catch (error) {
        console.log(error)
    } finally {
      setLoading(false);
    }
  };

  const create = async (data) => {
    try {
      await createActivity(data);
      showToast('success', 'Actividad creada correctamente');
      await fetchActivities();
    } catch (error) {
        console.log(error)
    }
  };

  const update = async (id, data) => {
    try {
      await updateActivity(id, data);
      showToast('success', 'Actividad actualizada correctamente');
      await fetchActivities();
    } catch (error) {
        console.log(error)
    }
  };

  const remove = async (id) => {
    try {
      await deleteActivity(id);
      showToast('success', 'Actividad eliminada correctamente');
      await fetchActivities();
    } catch (error) {
        console.log(error)
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return {
    activities,
    loading,
    fetchActivities,
    create,
    update,
    remove,
  };
};
