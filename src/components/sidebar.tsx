import { Component } from "react";
import ModalChat from "./modal";
import SidebarDropdownMenu from "./sidebarDropdown";
import SearchChatList from "./searchChatRoom";
import UserProfile from "./profile";
import ChatRoomList from "./chatRoomsList";
export interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
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
        <SearchChatList />
        <ChatRoomList />
      </div>
    </>
  );
};
export default SideBar;
