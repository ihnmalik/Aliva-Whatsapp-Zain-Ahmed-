import React, { useState } from "react";
import SideBar from "./sidebar";
import ChatArea from "./chatArea";
import { Route, Switch, Redirect } from "react-router-dom";
import { ChatData } from "../chatRoom/appData";
import ConnectArea from "./contentArea";

export interface MainContainerProps {}

const chatList = ChatData();

const MainContainer: React.FC<MainContainerProps> = () => {
  const [currentTitle, setChatTitle] = useState("");

  const fetchTitle = (value: string) => {
    setChatTitle(value);
  };
  return (
    <div className="container custom-width effects">
      <div className="row">
        <SideBar getChatTitle={fetchTitle} />
        <Switch>
          <Route
            path="/chatroom"
            render={(props) => (
              <ChatArea
                {...props}
                chatList={chatList}
                chatTitle={currentTitle}
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
