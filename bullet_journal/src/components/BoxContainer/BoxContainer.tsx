import React from "react";
import styles from './BoxContainer.module.css';


interface BoxContainerProps {
  children: React.ReactNode;
}

const BoxContainer: React.FC<BoxContainerProps> = ({ children }) => {
    return (
        <div className={`${styles.container}`}>{children}</div>
    );
};

export default BoxContainer;
