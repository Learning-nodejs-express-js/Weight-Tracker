import useWeights from './hooks/useWeights';
import styles from './HomeLeft.module.css';
import useDeleteWeights from './hooks/useDeleteWeights';

const HomeLeft = () => {
    
  const { state } = useWeights();
  const {error,isloading,deleteWeights}=useDeleteWeights();
  return (
    <div className={styles.container}>

      {state.map((eachWeight, key) => {
        return (
          <div key={key} className={styles.weightBox}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <div className={styles.weight}>{eachWeight.weight}</div>
                <button className="material-symbols-outlined" id={styles.buttonid} disabled={isloading} onClick={()=>{deleteWeights(eachWeight)}}>delete_forever</button>
            </div>
            
            <div className={styles.date}>{eachWeight.date}</div>
            {error ? <div>{error}</div> : <></>}
          </div>
        );
      })}
    </div>
  );
};

export default HomeLeft;
