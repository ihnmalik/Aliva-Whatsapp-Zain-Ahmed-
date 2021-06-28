import React, { useState } from "react";
import ModalChat from "./modal";
import SidebarDropdownMenu from "./sidebarDropdown";
import SearchChatList from "./searchChatRoom";
import UserProfile from "./profile";
import ChatRoomList from "./chatRoomsList";
import { SearchCustom } from "../common/commonFunctions";
import { ChatData } from "../chatRoom/appData";

export interface SideBarProps {
  getChatTitle: (arg0: string) => void;
}

const chatList = ChatData();

const SideBar: React.FC<SideBarProps> = ({ getChatTitle }) => {
  const [searchResults, setSearchResults] = useState(chatList);

  const handleChange = (value: string) => {
    setSearchResults(SearchCustom(value, chatList));
  };
  const fetchTitle = (value: string) => {
    getChatTitle(value);
  };
  return (
    <>
      <div className="col-md-4 left-section">
        <nav className="navbar navbar-light bg-light">
          <div className="col-md-3">
            <UserProfile />
          </div>
          <div className="col-md-9 nav-dd right-section">
            <SidebarDropdownMenu />
            <ModalChat />
          </div>
        </nav>
        <SearchChatList onSearch={handleChange} />
        <ChatRoomList sideBarList={searchResults} chatTitle={fetchTitle} />
      </div>
    </>
  );
};
export default SideBar;
