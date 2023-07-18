import { IconMinus } from './icons/iconMinus';
import { IconPlus } from './icons/iconPlus';

import styles from './Counter.module.css';
import { useState } from 'react';

export const Counter = ({ text }) => {
  const [value, setValue] = useState(0);

  const handleDecrement = () => {
    if (value <= 0) {
      return;
    }

    setValue(value - 1);
  };

  const handleIncrement = () => {
    setValue(value + 1);
  };

  return (
    <div className={styles.wrapper}>
      <span>
        {value} {text}
      </span>
      <nav>
        <button onClick={handleDecrement}>
          <IconMinus />
        </button>
        <button onClick={handleIncrement}>
          <IconPlus />
        </button>
      </nav>
    </div>
  );
};
