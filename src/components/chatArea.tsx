import * as React from "react";
import UserDetails from "./navbarChatboxUserDetails";
import NavbarChatBoxDropdown from "./navbarChatBoxDropdown";
import ChatBox from "./chatBox";
import SendMessagesInput from "./sendMessageInput";
import { Type } from "../chatRoom/appData";

export interface ChatAreaProps {
  chatTitle: string;
  newMessage: Type | undefined;
  updateChat: (arg0: Type) => void;
}

const ChatArea: React.FC<ChatAreaProps> = ({
  chatTitle,
  newMessage,
  updateChat,
}) => {
  const updateMsgBox = (msg: Type) => {
    updateChat(msg);
  };
  return (
    <div className="col-md-8 right-chat-section">
      <nav className="navbar navbar-light bg-light">
        <UserDetails chatTitle={chatTitle} />
        <NavbarChatBoxDropdown />
      </nav>
      <ChatBox newMessage={newMessage} />
      <SendMessagesInput
        enterMessage={newMessage}
        updateMsgBox={updateMsgBox}
      />
    </div>
  );
};

export default ChatArea;
