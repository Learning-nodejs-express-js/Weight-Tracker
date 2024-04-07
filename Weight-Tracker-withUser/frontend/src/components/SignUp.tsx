import { useState } from "react";
import useSignUp from './hooks/useSignUp';
import { useNavigate } from "react-router-dom";
import styles from './SignUp.module.css';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { error, isloading, signuphandler } = useSignUp();
    const navigate = useNavigate();

    return (
        <div className={styles.signUpContainer}>
            <div className={styles.title}>Weights</div>
            <div>
                <form action='#'>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Email</label>
                        <input 
                            type='email' 
                            className={styles.input} 
                            onChange={(e) => { setEmail(e.target.value) }} 
                            value={email}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Password</label>
                        <input 
                            type='password' 
                            className={styles.input} 
                            value={password} 
                            onChange={(e) => { setPassword(e.target.value) }} 
                        />
                    </div>
                    <div className={styles.error}>{error}</div>
                    <button 
                        className={styles.signupButton} 
                        onClick={(e) => { e.preventDefault(); signuphandler(email, password) }} 
                        disabled={isloading}
                    >
                        Signup
                    </button>
                </form>
                <button className={styles.toLoginButton} onClick={() => { navigate("/login") }}>Go to Login</button>
            </div>
        </div>
    );
};

export default SignUp;
