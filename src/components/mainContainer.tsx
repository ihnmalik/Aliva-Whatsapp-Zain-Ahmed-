import React, { useState } from "react";
import SideBar from "./sidebar";
import ChatArea from "./chatArea";
import { Route, Switch, Redirect } from "react-router-dom";
import { ChatData } from "../chatRoom/appData";
import ConnectArea from "./contentArea";
import { SearchCustom } from "../common/commonFunctions";
import { Type } from "../chatRoom/appData";

// const chatList = ChatData();
export interface MainContainerProps {}

const MainContainer: React.FC<MainContainerProps> = () => {
  const [chatRoomList, setSearchResults] = useState<Array<Type>>(ChatData());
  const [updatedList, setUpdatedList] = useState<Array<Type>>(chatRoomList);
  const [newChat, setNewChatThred] = useState<Type>();
  const [currentTitle, setChatTitle] = useState<string>("");

  const fetchTitle = (value: string) => {
    setChatTitle(value);
  };
  const getChat = (chatThread: Type) => {
    // const cloneChatThread: any = { ...chatThread };
    setNewChatThred(chatThread);
  };
  const handleSearchResult = (value: string) => {
    setUpdatedList(SearchCustom(value, chatRoomList));
  };
  const handleAddNewChatRoom = (chatRoom: Array<Type>) => {
    setUpdatedList(chatRoom);
    setSearchResults(chatRoom);
  };
  const updateChatBox = (e: Type) => {
    setNewChatThred(e);
  };
  function getSidebar() {
    return (
      <SideBar
        getChatTitle={fetchTitle}
        getChat={getChat}
        chatList={updatedList}
        searhRoomResult={handleSearchResult}
        addNewChatRoom={handleAddNewChatRoom}
      />
    );
  }
  return (
    <div className="container custom-width effects">
      <div className="row">
        {getSidebar()}
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
