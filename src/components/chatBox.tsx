import * as React from "react";

export interface ChatBoxProps {}

const ChatBox: React.FC<ChatBoxProps> = () => {
  return (
    <div className="chatBoxBG">
      <div className="chat-messages">
        <p className="other-user-msg">
          this is a test message skfjhaskjg askfjaksjghka askjhfasnVashfgui
          askfkafgm <span>9:35 PM</span>
        </p>
      </div>
      <div className="chat-messages">
        <p className="my-msg">
          this is a test message<span>9:46 PM</span>
        </p>
      </div>
      <div className="chat-messages">
        <p className="other-user-msg">
          this is a test message skfjhaskjg askfjaksjghka askjhfasnVashfgui
          askfkafgm <span>9:35 PM</span>
        </p>
      </div>
      <div className="chat-messages">
        <p className="my-msg">
          this is a test message skfjhaskjg askfjaksjghka askjhfasnVashfgui
          askfkafgm <span>9:35 PM</span>
        </p>
      </div>
      <div className="chat-messages">
        <p className="other-user-msg">
          this is a test message skfjhaskjg askfjaksjghka askjhfasnVashfgui
          askfkafgm <span>9:35 PM</span>
        </p>
      </div>
      <div className="chat-messages">
        <p className="my-msg">
          this is a test message skfjhaskjg askfjaksjghka askjhfasnVashfgui
          askfkafgm <span>9:35 PM</span>
        </p>
      </div>
      <div className="chat-messages">
        <p className="other-user-msg">
          this is a test message skfjhaskjg<span>9:35 PM</span>
        </p>
      </div>
      <div className="chat-messages">
        <p className="my-msg">
          this is a test message skfjhaskjg askfjaksjghka askjhfasnVashfgui
          askfkafgm <span>9:35 PM</span>
        </p>
      </div>
      <div className="chat-messages">
        <p className="other-user-msg">
          this is a test message skfjhaskjg askfjaksjghka askjhfasnVashfgui
          askfkafgm <span>9:35 PM</span>
        </p>
      </div>
    </div>
  );
};

export default ChatBox;
