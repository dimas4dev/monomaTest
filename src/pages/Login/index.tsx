import React, { useState } from "react";

import Input from "../../components/Input";
import Button from "../../components/Button";
// import Button from "./components/Button";


interface LoginProps {
    onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const handleEmailChange = (value: string) => {
        setEmailValue(value);
    };

    const handlePasswordChange = (value: string) => {
        setPasswordValue(value);
    };

    const [error, setError] = useState('');

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/users');
            const users = await response.json();
            const user = users.find((u: any) => u.username === emailValue && u.password === passwordValue);

            if (user) {
                setError('');
                onLogin();
            } else {
                setError('Invalid username or password');
            }
        } catch (error) {
            setError('Error occurred during login');
        }
    };

    return (
        <>
            <div className="Login">
                <form className="Login__Form" onSubmit={handleLogin}>
                    <Input
                        value={emailValue}
                        onChange={handleEmailChange}
                        type="email"
                        placeholder="Ingresa tu email"
                        label="Email"
                    />
                    <Input
                        value={passwordValue}
                        onChange={handlePasswordChange}
                        type="password"
                        placeholder="Ingresa tu Password"
                        label="Password"
                    />
                    <Button className="p-2 border border-gray-300 rounded-r focus:outline-none" type="submit" onClick={handleLogin} >Ingresar</Button>
                </form>


            </div>
        </>
    );
}

export default Login;
