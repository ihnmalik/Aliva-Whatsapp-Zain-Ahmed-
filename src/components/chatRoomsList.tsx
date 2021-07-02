import { Link } from "react-router-dom";

export interface ChatRoomListProps {
  sideBarList: any;
  chatTitle: (arg0: string) => void;
  viewChat: (arg0: string) => void;
}

const ChatRoomList: React.FC<ChatRoomListProps> = ({
  sideBarList,
  chatTitle,
  viewChat,
}) => {
  const fetchTitle = (userDetail: any) => {
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
