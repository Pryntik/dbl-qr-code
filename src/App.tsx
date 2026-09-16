import './App.css';
import { useEffect, useState } from 'react';
import QRCode from "react-qr-code";
import QRCodeBox from './QRCodeBox';

/**
 * Pryntik : CMTHGEEHJMB
 * Karnack : fpq4any
 * Kairos  : mzudzyw
 * Sunraku : q3sauaw
 * 
 * Result  : 4,fpq4any5CMTHGEEHJMB
 */

const App = () => {
    const startCode = "4,";
    const [yourCode, setYourCode] = useState("CMTHGEEHJMB");
    const [friendCode1, setFriendCode1] = useState("");
    const [friendCode2, setFriendCode2] = useState("");
    const [friendCode3, setFriendCode3] = useState("");
    const [resultCode1, setResultCode1] = useState("");
    const [resultCode2, setResultCode2] = useState("");
    const [resultCode3, setResultCode3] = useState("");

    const hasResult = !!resultCode1 || !!resultCode2 || !!resultCode3;

    const computeResult = (friendCode: string) => {
        if (friendCode.length === 7 && yourCode.length === 11) return startCode + friendCode + yourCode;
        return "";
    };

    useEffect(() => {
        setResultCode1(computeResult(friendCode1));
    }, [friendCode1, yourCode]);

    useEffect(() => {
        setResultCode2(computeResult(friendCode2));
    }, [friendCode2, yourCode]);

    useEffect(() => {
        setResultCode3(computeResult(friendCode3));
    }, [friendCode3, yourCode]);

    return (
        <div className="app">
            <div className="nav-bar">
                <span>DBL QR Code</span>
                <button className="login-button">Login</button>
            </div>
            <div className="your-code">
                <span className='title'>Your code</span>
                <input type="text" maxLength={11} placeholder='Your code' value={yourCode} onChange={(e) => setYourCode(e.target.value)}/>
            </div>
            <div className="friend-codes">
                <span className='title'>Friend codes</span>
                <input type="text" maxLength={7} placeholder='Friend code 1' value={friendCode1} onChange={(e) => setFriendCode1(e.target.value)}/>
                <input type="text" maxLength={7} placeholder='Friend code 2' value={friendCode2} onChange={(e) => setFriendCode2(e.target.value)}/>
                <input type="text" maxLength={7} placeholder='Friend code 3' value={friendCode3} onChange={(e) => setFriendCode3(e.target.value)}/>
            </div>
            {hasResult && (
                <div className="result-codes">
                    <span className='title'>Result codes</span>
                    {resultCode1 && <QRCodeBox nbFriend={1} code={friendCode1} value={resultCode1}/>}
                    {resultCode2 && <QRCodeBox nbFriend={2} code={friendCode2} value={resultCode2}/>}
                    {resultCode3 && <QRCodeBox nbFriend={3} code={friendCode3} value={resultCode3}/>}
                </div>
            )}
        </div>
    );
};

export default App;