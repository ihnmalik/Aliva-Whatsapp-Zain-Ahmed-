import * as React from "react";
import UserDetails from "./navbarChatboxUserDetails";
import NavbarChatBoxDropdown from "./navbarChatBoxDropdown";
import ChatBox from "./chatBox";
import SendMessagesInput from "./sendMessageInput";

export interface ChatAreaProps {
  chatList: any;
  chatTitle: string;
}

const ChatArea: React.FC<ChatAreaProps> = ({ chatTitle }) => {
  return (
    <div className="col-md-8 right-chat-section">
      <nav className="navbar navbar-light bg-light">
        <UserDetails chatTitle={chatTitle} />
        <NavbarChatBoxDropdown />
      </nav>
      <ChatBox />
      <SendMessagesInput />
    </div>
  );
};

export default ChatArea;
