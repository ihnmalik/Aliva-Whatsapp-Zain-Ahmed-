import React, {useContext}from "react";
import { formatAMPM } from "../common/commonFunctions";
// import { Type } from "../chatRoom/appData";
import { ChatDetails } from "../chatRoom/appData";
import { ThemeContext } from "./themeContext";

export interface ChatBoxProps {
  newMessage: any;
}

const ChatBox: React.FC<ChatBoxProps> = ({ newMessage }) => {
  let messageChat: Array<ChatDetails> = newMessage.chat;
  let i: number = 1;
  const theme = useContext(ThemeContext);

  return (
    <div className="chatBoxBG" style={{ background: theme.background, color: theme.foreground }}>
      <p className="box-alert" style={{ background: theme.background, color: theme.foreground }}>
        <svg
          className="MuiSvgIcon-root"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M21 21.78L4.22 5 3 6.22l2.04 2.04C4.42 8.6 4 9.25 4 10v10c0 1.1.9 2 2 2h12c.23 0 .45-.05.66-.12L19.78 23 21 21.78zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H9.66L20 18.34V10c0-1.1-.9-2-2-2h-1V6c0-2.76-2.24-5-5-5-2.56 0-4.64 1.93-4.94 4.4L8.9 7.24V6z"></path>
        </svg>
        This is a whatsapp clone. Messages are not encrpyted.
      </p>
      {messageChat.map((messages: any) => (
        <div
          key={i++}
          className={messages.msg === "" ? "d-none" : "chat-messages"}
        >
          <p
            className={messages.userId % 2 === 0 ? "my-msg" : "other-user-msg"} style={{ background: theme.background, color: theme.foreground }}>
            {messages.msg}
            <span>{formatAMPM(new Date())}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ChatBox;
