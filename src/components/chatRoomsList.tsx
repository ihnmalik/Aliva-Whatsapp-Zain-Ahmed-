import { Link } from "react-router-dom";
import { Type } from "../chatRoom/appData";

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

  return (
    <ul className="chat-list">
      {sideBarList.map((chats: any) => (
        <Link key={chats._id} to="/chatroom" onClick={() => fetchTitle(chats)}>
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
