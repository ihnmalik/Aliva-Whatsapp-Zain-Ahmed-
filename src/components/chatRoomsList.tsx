import { Link } from "react-router-dom";
import { Type } from "../chatRoom/appData";
import { ThemeContext } from "./themeContext";
import { useContext } from "react";

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
  };
  const theme = useContext(ThemeContext);

  return (
    <ul className="chat-list"  style={{ background: theme.background, color: theme.foreground }}>
      {sideBarList.map((chats: any) => (
        <Link key={chats._id} to="/chatroom" onClick={() => fetchTitle(chats)}  style={{ color: theme.foreground }}>
          <li>
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
