import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../utils/axios";
import Wrapper from "../../components/Wrapper/Wrapper";
import styles from "./HomePage.module.css";


interface Item {
    id: number;
    task_name: string;
}

const HomePage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axiosInstance
      .get('tasks')
      .then((response) => {
        setItems(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('There was an error fetching the data.');
        setLoading(false);
      });
  }, [IdleDeadline, ]);

  return (
    <Wrapper>
      <h1 className={styles.heading}>Items List</h1>
      {/* {loading && <p className={styles.loading}>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>} */}
      <ul className={styles.itemList}>
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            <Link to={`/item/${item.id}`} className={styles.itemLink}>
              Item ID: {item.id} - {item.task_name}
            </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default HomePage;
