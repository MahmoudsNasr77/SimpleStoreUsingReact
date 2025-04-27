import {useState} from 'react';

function Login() {
    const [isLogin, setIsLogin] = useState(false);
    if (isLogin) {
        return (
            <div className="login">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="Password" required />
                    <button type="button">Login</button>
                </form>
                <p>Don't have an account? <a href='#' onClick={() => setIsLogin(true)}>Sign Up</a></p>
            </div>
        );
    }
    return (
        <div className="login">
            <h1>Sign Up</h1>
            <form>
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <button type="button">Sign Up</button>
            </form>
            <p>Already have an account? <a href='' onClick={() => setIsLogin(true)}>Login</a></p>
        </div>
    );
}
export default Login;