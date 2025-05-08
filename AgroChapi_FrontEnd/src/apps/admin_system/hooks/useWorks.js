import { useState, useEffect } from 'react';
import { getWorks, createWork, updateWork, deleteWork } from '../services/worksService';
import { showToast } from '../../../lib/toast';

export const useWorks = () => {
  const [works, setWorks] = useState([]);
  const [page, setPage] = useState(0); // Página actual
  const [pageSize, setPageSize] = useState(20); // Tamaño de página
  const [totalCount, setTotalCount] = useState(0); // Total de elementos
  const [loading, setLoading] = useState(false);

  const fetchWorks = async ({ pageIndex = page, size = pageSize } = {}) => {
    setLoading(true);
    try {
      const response = await getWorks({ page: pageIndex + 1, pageSize: size }); // Backend usa paginación 1-indexed
      setWorks(response.results);
      setTotalCount(response.count);
      setPage(pageIndex);
      setPageSize(size);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const create = async (data) => {
    try {
      await createWork(data);
      showToast('success', 'Labor creada correctamente');
      await fetchWorks(); // Vuelve a cargar los datos
    } catch (error) {
      console.log(error);
    }
  };

  const update = async (id, data) => {
    try {
      await updateWork(id, data);
      showToast('success', 'Labor actualizada correctamente');
      await fetchWorks(); // Vuelve a cargar los datos
    } catch (error) {
      console.log(error);
    }
  };

  const remove = async (id) => {
    try {
      await deleteWork(id);
      showToast('success', 'Labor eliminada correctamente');
      await fetchWorks(); // Vuelve a cargar los datos
    } catch (error) {
      console.log(error);
    }
  };

  
  useEffect(() => {
    fetchWorks();
  }, []);

  return {
    works,
    page,
    pageSize,
    totalCount,
    loading,
    fetchWorks,
    setPage,
    setPageSize,
    create,
    update,
    remove,
  };
};
