import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Type } from "../chatRoom/appData";
import { ThemeContext } from "../ThemeContext";

export interface ChatRoomListProps {
  sideBarList: Array<Type>;
  chatTitle: (arg0: string) => void;
  viewChat: (arg0: Type) => void;
}

const ChatRoomList: React.FC<ChatRoomListProps> = ({
  sideBarList,
  chatTitle,
  viewChat,
}) => {
  const fetchTitle = (userDetail: Type) => {
    chatTitle(userDetail.title);
    viewChat(userDetail);
    console.log("LIST", userDetail);
  };
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <ul
      className={
        darkMode ? "bg-dark-theme chat-list" : "bg-light-theme chat-list"
      }
    >
      {sideBarList.map((chats: any) => (
        <Link key={chats._id} to="/chatroom" onClick={() => fetchTitle(chats)}>
          <li className={darkMode ? "color-dark-theme" : "color-light-theme"}>
            <div>
              <span>{chats.title.charAt(0)}</span>
            </div>
            <b>{chats.title}</b>
            <p>{chats.chat[chats.chat.length - 1].msg}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default ChatRoomList;
