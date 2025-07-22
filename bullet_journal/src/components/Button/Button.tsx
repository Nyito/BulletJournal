import React from "react";
import styles from './Button.module.css';


interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  color?: 'blue' | 'red' | 'green';
}

const Button: React.FC<ButtonProps> = ({ onClick, children, color = 'blue' }) => {
  return (
    <button className={`${styles.button} ${styles[color]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;