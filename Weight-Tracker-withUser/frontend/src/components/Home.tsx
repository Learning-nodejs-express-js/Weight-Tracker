import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";
import styles from './Home.module.css';
import useUser from "./hooks/useUser";
import useWeights from "./hooks/useWeights";

const Home = () => {
  const { state,dispatch } = useUser();
  const { dispatch: weightDispatch } = useWeights();

  return (
    <div className={styles.homeContainer}>
      <div className={styles.header}>
        <h2>Weights</h2>
        <div style={{display:"flex"}}>
          {state ? <div style={{padding:"1rem"}}>{state.email}</div> : <></>}
          <button className={styles.logoutButton} onClick={() => {dispatch({type: "LOGOUT"}), weightDispatch({type: "LOGOUT"})}}>Logout</button>
          
        </div>
      </div>
      <div className={styles.contentContainer}>
        <HomeLeft />
        <HomeRight />
      </div>
    </div>
  );
};

export default Home;
