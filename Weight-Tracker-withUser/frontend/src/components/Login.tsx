import { useNavigate } from "react-router-dom";
import useLogin from "./hooks/useLogin";
import { useState } from "react";
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isloading, loginhandler } = useLogin();
  const navigate = useNavigate();

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginTitle}>Weights</div>
      <div>
        <form action="#" className={styles.formContainer}>
          <div>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              className={styles.input}
              onChange={(e) => { setEmail(e.target.value) }}
              value={email}
            />
          </div>
          <div>
            <label className={styles.label}>Password</label>
            <input
              type="password"
              className={styles.input}
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
            />
          </div>
          <div className={styles.error}>{error}</div>
          <button
            className={styles.loginButton}
            onClick={(e) => { e.preventDefault(); loginhandler(email, password) }}
            disabled={isloading}
          >
            Login
          </button>
        </form>
        <button className={styles.toSignupButton} onClick={() => { navigate("/signup") }}>
          Go to Signup
        </button>
      </div>
    </div>
  );
};

export default Login;
