import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axiosInstance from '../../utils/axios'; // Assuming you're using axios for requests
import styles from './ItemPage.module.css';

interface Item {
  id: number;
  task_name: string;
  task_description: string;
  pub_date: string;
}

const ItemPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      axiosInstance
        .get(`tasks/${id}/`) // Assuming this is the endpoint to fetch a specific item
        .then((response) => {
          setItem(response.data);
          setLoading(false);
        })
        .catch((err) => {
          setError('There was an error fetching the item.');
          setLoading(false);
        });
    }
  }, [id, location.pathname]);

  const handleBack = () => {
    navigate(-1); // This takes the user back to the previous page
  };

  if (loading) return <p>Loading item...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      {item && (
        <>
          <h1 className={styles.title}>{item.task_name}</h1>
          <p className={styles.description}>{item.task_description}</p>
          <p className={styles.date}>{item.pub_date}</p>
        </>
      )}
      <button onClick={handleBack} className={styles.backButton}>
        Back To List
      </button>
    </div>
  );
};

export default ItemPage;