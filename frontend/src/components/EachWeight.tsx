import styles from './EachWeight.module.css';
import useDeleteWeight from '../Hooks/useDeleteWeight';
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
  const {error,isloading,deleteweight}=useDeleteWeight()
  const deletehandler=()=>{
    deleteweight(eachweight)
  }
  return (
    <div className={styles.eachWeightContainer}>
      <div className={styles.minicontainer}>
      <div className={styles.date}>Date: {eachweight.date}</div>
      <button className="material-symbols-outlined " style={{cursor:"pointer",border:"0px solid white"}} onClick={deletehandler} disabled={isloading}>delete_forever</button>
      </div>
      
      <div className={styles.weight}>weight: {eachweight.weight}kg</div>
      {error ? <div>{error}</div> : <></>}
    </div>
  );
};

export default EachWeight;
