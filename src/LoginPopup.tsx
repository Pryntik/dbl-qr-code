import './Popup.css';
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type LoginPopupProps = {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    isLogged: boolean
    setIsLogged: Dispatch<SetStateAction<boolean>>
};

const LoginPopup = ({isOpen, setIsOpen, isLogged, setIsLogged}: LoginPopupProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
        console.log('Logging in with:', username, password);
        setIsLogged(!isLogged);
        setIsOpen(false);
    };

    useEffect(() => {
        setIsOpen(isOpen);
    }, [isOpen]);

    return (
        <>
            {isOpen && (
                <div className="login-popup">
                    <input id="username" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <input id="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button className="submit-button" onClick={handleLogin}>Submit</button>
                </div>
            )}        
        </>
    );
}

export default LoginPopup;