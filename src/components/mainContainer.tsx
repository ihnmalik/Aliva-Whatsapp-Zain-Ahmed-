import React, { useState, useEffect } from "react";
import SideBar from "./sidebar";
import ChatArea from "./chatArea";
import { Route, Switch, Redirect } from "react-router-dom";
import ConnectArea from "./contentArea";
import { SearchCustom } from "../common/commonFunctions";
import { Type } from "../chatRoom/appData";
import store from "./redux-saga/store";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./redux-saga/actionTypes";
// import { ChatData } from "../chatRoom/appData";
export interface MainContainerProps {}
const MainContainer: React.FC<MainContainerProps> = () => {
  const dispatch = useDispatch();
  const selector = (state: any) => ({
    chat: state.chat,
  });
  const chatList = useSelector(selector); // ASYNC state update
  const updatedState = store.getState(); // Updated Redux state
  const [chatRoomList, setSearchResults] = useState<Array<Type>>(chatList.chat);
  const [updatedList, setUpdatedList] = useState<Array<Type>>([]);
  const [newChat, setNewChatThred] = useState<Type>();
  const [currentTitle, setChatTitle] = useState<string>("");

  /* Function to get chatbox Title according to selected chat start */
  const fetchTitle = (value: string) => {
    setChatTitle(value);
  };
  /* Function to get chatbox Title according to selected chat end */

  /* Function to get existing chat in chat box according to selected chat start */
  const getChat = (chatThread: Type) => {
    setNewChatThred(chatThread);
  };
  /* Function to get existing chat in chat box according to selected chat end */

  /* Function to filter chat rooms according to search start */
  const handleSearchResult = (value: string) => {
    setUpdatedList(SearchCustom(value, chatRoomList));
  };
  /* Function to filter chat rooms according to search end */

  /* Function to add new chat rooms start */
  const handleAddNewChatRoom = (chatRoom: Array<Type>) => {
    setUpdatedList(chatRoom);
    setSearchResults(chatRoom);
  };
  /* Function to add new chat rooms end */

  /* Function to send message in chat box through input field strat */
  const updateChatBox = (e: Type) => {
    setNewChatThred(e);
  };
  /* Function to send message in chat box through input field end */

  /* Use Effect function For SAGA action Start */
  useEffect(() => {
    dispatch({
      type: actions.ASYNC_START,
    });
  }, []);
  /* Use Effect function For SAGA End */

  /* Use Effect For to update local states after updating state in Redux Start */
  useEffect(() => {
    setUpdatedList(chatList.chat);
    setSearchResults(chatList.chat);
  }, [updatedState]);
  /* Use Effect For to update local states after updating state in Redux End */

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
