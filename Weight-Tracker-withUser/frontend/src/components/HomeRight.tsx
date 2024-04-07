import React, { useState } from 'react';
import useCreateWeight from './hooks/useCreateWeight';
import styles from './HomeRight.module.css';

const HomeRight = () => {
  const [weight, setWeights] = useState(0);
  const [date, setDate] = useState("");
  const { error, loading, postweight } = useCreateWeight();

  const addWeight = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    postweight(weight, date);
  };

  return (
    <div className={styles.homeRight}>
      <div className={styles.addWeightTitle}>Add Weight</div>
      <form action="#" className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Weight: </label>
          <input
            type='number'
            name="weight"
            value={weight}
            onChange={(e) => { setWeights(parseInt(e.target.value)) }}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Date: </label>
          <input
            type='text'
            name="date"
            value={date}
            onChange={(e) => { setDate(e.target.value) }}
            className={styles.input}
          />
        </div>
        {error ? <div className={styles.error}>{error}</div> : <></>}
        <div className={styles.formGroup}>
          <button
            onClick={(e) => { addWeight(e) }}
            disabled={loading}
            className={styles.button}
          >
            Add Weight
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomeRight;
