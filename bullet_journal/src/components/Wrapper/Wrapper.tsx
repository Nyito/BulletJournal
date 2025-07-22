import React from "react";
import BoxContainer from "../BoxContainer/BoxContainer";
import styles from './Wrapper.module.css';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <BoxContainer>{children}</BoxContainer>
    </div>
  );
};

export default Wrapper;