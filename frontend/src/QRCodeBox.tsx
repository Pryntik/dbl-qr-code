import QRCode from "react-qr-code";

type QRCodeBoxProps = {
    nbFriend: number,
    value: string,
    code: string,
};

const QRCodeBox = ({nbFriend, value, code}: QRCodeBoxProps) => {
    return (
        <div className="qr-code-box">
            <div className="qr-code-container">
                <QRCode className="qr-code-value" value={value}/>
            </div>
            <span className="qr-code-title">{`Friend ${nbFriend} : ${code}`}</span>
        </div>
    );
}

export default QRCodeBox;