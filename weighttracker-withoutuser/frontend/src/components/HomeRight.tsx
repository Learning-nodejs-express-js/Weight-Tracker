import { useState } from 'react';
import useAddWeights from '../Hooks/useAddWeights';
import styles from './HomeRight.module.css'; // Import your custom CSS

const HomeRight = () => {
  const [weight,setWeight]=useState(100);
  const [date,setDate]=useState(new Date().toLocaleDateString('en-CA'))
  const {error,isloading,addweights}=useAddWeights()
  const addweighthandler=()=>{
    addweights(weight,date)
  }

  return (
    
      <div className={styles.container}> 

            <div className={styles.formContainer}>
              <div className={styles.formGroup}> 
                <label htmlFor="weight" className={styles.label}>Weight</label> 
                <input type="number" id="weight" name="weight" className={styles.input} onChange={(e)=>{setWeight(parseInt(e.target.value))}} value={weight} required/>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="date" className={styles.label}>Date</label>
                <input type="date" id="date" name="date" className={styles.input} onChange={(e)=>{setDate(e.target.value)}} value={date} required/>
              </div>
              <button type="submit" className={styles.button} onClick={addweighthandler} disabled={isloading}>Submit</button> 
              {error ? <div>{error}</div> : <></>}
            </div>

      </div>
 
  );
};

export default HomeRight;
