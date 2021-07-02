import React, { useState } from "react";
import SideBar from "./sidebar";
import ChatArea from "./chatArea";
import { Route, Switch, Redirect } from "react-router-dom";
import { ChatData } from "../chatRoom/appData";
import ConnectArea from "./contentArea";
import { SearchCustom } from "../common/commonFunctions";

const chatList = ChatData();
export interface MainContainerProps {}

const MainContainer: React.FC<MainContainerProps> = () => {
  const [chatRoomList, setSearchResults] = useState(chatList);
  const [updatedList, setUpdatedList] = useState(chatRoomList);
  const [newChat, setNewChatThred] = useState("");
  const [currentTitle, setChatTitle] = useState("");

  const fetchTitle = (value: string) => {
    setChatTitle(value);
  };
  const getChat = (chatThread: any) => {
    const cloneChatThread = { ...chatThread };
    setNewChatThred(cloneChatThread);
  };
  const handleSearchResult = (value: string) => {
    setUpdatedList(SearchCustom(value, chatRoomList));
  };
  const handleAddNewChatRoom = (chatRoom: any) => {
    setUpdatedList(chatRoom);
    setSearchResults(chatRoom);
  };
  const updateChatBox = (e: any) => {
    setNewChatThred(e);
  };
  return (
    <div className="container custom-width effects">
      <div className="row">
        <SideBar
          getChatTitle={fetchTitle}
          getChat={getChat}
          chatList={updatedList}
          searhRoomResult={handleSearchResult}
          addNewChatRoom={handleAddNewChatRoom}
        />
        <Switch>
          <Route
            path="/chatroom"
            render={(props) => (
              <ChatArea
                {...props}
                chatTitle={currentTitle}
                newMessage={newChat}
                updateChat={updateChatBox}
              />
            )}
          />
          <Route path="/" exact component={ConnectArea} />
          <Redirect to="not-found" />
        </Switch>
      </div>
    </div>
  );
};

export default MainContainer;
