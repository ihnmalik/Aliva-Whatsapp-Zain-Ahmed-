import React, { useContext } from "react";
import ModalChat from "./modal";
import SidebarDropdownMenu from "./sidebarDropdown";
import SearchChatList from "./searchChatRoom";
import UserProfile from "./profile";
import ChatRoomList from "./chatRoomsList";
import SwitchButton from "./button";
import { ThemeContext } from "../ThemeContext";
import { Type } from "../chatRoom/appData";

export interface SideBarProps {
  getChatTitle: (arg0: string) => void;
  getChat: (arg0: Type) => void;
  chatList: Array<Type>;
  searhRoomResult: (arg0: string) => void;
  addNewChatRoom: (arg0: Array<Type>) => void;
}

const SideBar: React.FC<SideBarProps> = ({
  getChatTitle,
  getChat,
  chatList,
  searhRoomResult,
  addNewChatRoom,
}) => {
  const handleChange = (value: string) => {
    searhRoomResult(value);
  };
  const fetchTitle = (value: string) => {
    getChatTitle(value);
  };
  const viewChat = (newChat: Type) => {
    getChat(newChat);
  };
  const updateChatList = (chatRoom: Array<Type>) => {
    addNewChatRoom(chatRoom);
  };
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div className="col-md-4 left-section">
        <nav
          className={
            darkMode ? "bg-dark-theme navbar" : "navbar navbar-light bg-light"
          }
        >
          <div className="col-md-3">
            <UserProfile />
          </div>
          <div className="col-md-5">
            <SwitchButton />
          </div>
          <div className="col-md-4 nav-dd right-section">
            <SidebarDropdownMenu />
            <ModalChat
              createChatRoom={chatList}
              updateChatList={updateChatList}
            />
          </div>
        </nav>
        <SearchChatList onSearch={handleChange} />
        <ChatRoomList
          sideBarList={chatList}
          chatTitle={fetchTitle}
          viewChat={viewChat}
        />
      </div>
    </>
  );
};
export default SideBar;
