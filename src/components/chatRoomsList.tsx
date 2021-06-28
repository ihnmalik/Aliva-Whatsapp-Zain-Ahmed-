import { Link } from "react-router-dom";

export interface ChatRoomListProps {
  sideBarList: any;
  chatTitle: (arg0: string) => void;
}

const ChatRoomList: React.FC<ChatRoomListProps> = ({
  sideBarList,
  chatTitle,
}) => {
  const chatList = sideBarList;

  const fetchTitle = (userDetail: any) => {
    chatTitle(userDetail.title);
  };

  return (
    <ul className="chat-list">
      {chatList.map((chats: any) => (
        <Link key={chats._id} to="/chatroom" onClick={() => fetchTitle(chats)}>
          <li>
            <div>
              <span>{chats.title.charAt(0)}</span>
            </div>
            <b>{chats.title}</b>
            <p>{chats.lastMsg}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default ChatRoomList;
