// Component login
import Header from '../src/components/header'
import styles from '../styles/login.module.css'

export default function Login () {


    return (
        <>
        <Header />
        <div className={styles.login}>
            <div className={styles.container}>
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" name="email" />
                    <h5>Password</h5>
                    <input type="password" name="password" />
                    <button type="submit">Sign in</button>
                </form>
                <p>
                    By signing-in you agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
                </p>
                <p>
                    Need an account? <a href="#">Sign up</a>
                </p>
            </div>
        </div>
        </>
    )
}