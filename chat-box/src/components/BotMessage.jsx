import React from "react";

export const BotMessage = ({ text }) => {
    return (
        <div className="botmessage botowner">
            <div className="botmessageInfor">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/4712/4712125.png"
                    alt=""
                    style={{ width: "40px", height: "40px" }} 
                />
            </div>
            <div className="botmessageContent">
                <p>{text}</p>
            </div>
        </div>
    );
};
