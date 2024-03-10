import styles from './EachWeight.module.css';

interface WeightStateType {
  _id: string;
  weight: number;
  date: string;
  __v: number;
}

interface EachWeightProps {
  eachweight: WeightStateType;
}

const EachWeight = ({ eachweight }: EachWeightProps) => {
  return (
    <div className={styles.eachWeightContainer}>
      <div className={styles.date}>{eachweight.date}</div>
      <div className={styles.weight}>{eachweight.weight}kg</div>
    </div>
  );
};

export default EachWeight;
