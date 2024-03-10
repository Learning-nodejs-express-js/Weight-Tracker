import styles from './Home.module.css'
import HomeLeft from './HomeLeft'
import HomeRight from './HomeRight'

const Home = () => {
  return (
    <div style={{display:"flex",boxSizing:"border-box"}}>
      <HomeLeft></HomeLeft>
      <HomeRight></HomeRight>
    </div>
  )
}

export default Home