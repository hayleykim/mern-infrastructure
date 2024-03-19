import { useState } from "react"
import LoginForm from "../../components/LoginForm/LoginForm"
import SignUpForm from "../../components/SignUpForm/SignUpForm"

export default function AuthPage({setUser}) {

    const [formToggle, setFormToggle] = useState(true);

    const _handleToggleForm = () => {
        setFormToggle(!formToggle);
    }

    return (
        <main>
            <button onClick={_handleToggleForm}>{formToggle ? "Click to Sign Up" : "Click to Log In"}</button>

            { formToggle ? 
                <>
                    <h1>Log in:</h1>
                    <LoginForm setUser={setUser}/>
                </>
                :
                <>
                    <h1>Sign up:</h1>
                    <SignUpForm setUser={setUser}/>
                </>
            }
            
        </main>
    );
};