
import './App.css'
import Home from './components/Home'
import useUser from './components/hooks/useUser'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { Route,Routes } from 'react-router-dom'
function App() {
  const {state}=useUser();
  return (
    <>
    <Routes>
      <Route path="/login" element={!state ?<Login></Login> : <Home></Home>}></Route>
      <Route path="/signup" element={!state ?<SignUp></SignUp> : <Home></Home>}></Route>
      <Route path='/' element={(state && state.email) ? <Home></Home> : <></>}></Route>
    </Routes>
     
    </>
  )
}

export default App
