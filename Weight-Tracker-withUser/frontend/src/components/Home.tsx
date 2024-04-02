import HomeLeft from "./HomeLeft"
import HomeRight from "./HomeRight"
import styles from './Home.module.css';

const Home = () => {
  return (
    <div >
      <h2>Weights</h2>
      <div className={styles.container}>
        <HomeLeft></HomeLeft>
        <HomeRight></HomeRight>
      </div>
    </div>
  )
}

export default Home