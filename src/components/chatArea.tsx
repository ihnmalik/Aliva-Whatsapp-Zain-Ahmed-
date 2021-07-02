import * as React from "react";
import UserDetails from "./navbarChatboxUserDetails";
import NavbarChatBoxDropdown from "./navbarChatBoxDropdown";
import ChatBox from "./chatBox";
import SendMessagesInput from "./sendMessageInput";

export interface ChatAreaProps {
  chatTitle: string;
  newMessage: any;
  updateChat: (arg0: string) => void;
}

const ChatArea: React.FC<ChatAreaProps> = ({
  chatTitle,
  newMessage,
  updateChat,
}) => {
  const updateMsgBox = (msg: any) => {
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
