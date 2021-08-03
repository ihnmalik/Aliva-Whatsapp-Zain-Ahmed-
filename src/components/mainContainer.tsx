import React, { useState, useContext, useEffect } from "react";
import SideBar from "./sidebar";
import ChatArea from "./chatArea";
import { Route, Switch, Redirect } from "react-router-dom";
import { dataChat } from "../chatRoom/appData";
import ConnectArea from "./contentArea";
import { SearchCustom } from "../common/commonFunctions";
import { Type } from "../chatRoom/appData";
import { ThemeContext } from "./themeContext";
import store from "../redux/store/store";
import { useSelector, useDispatch, connect } from "react-redux";
import axios from 'axios'
import * as actions from '../redux/ActionTypes'
import ChatRoomList from "./chatRoomsList";
import { act } from "@testing-library/react";



// export interface MainContainerProps {}


const MainContainer = (props:any) => {

//   const selector = (state:any) => ({
//     chat: state.chat
// })
// const chatsData = useSelector(selector)
//   let tempResponse = chatsData.chat
  // const storing = store.getState()

  const [chatRoomList, setSearchResults] = useState<Array<Type>>(props.chatdataxx);
  console.log("CHECK DATA PROPS WALA", props.chatdataxx)
  const [updatedList, setUpdatedList] = useState<Array<Type>>(chatRoomList);
  // console.log("CHECK DATA ROOM LIST", chatRoomList)

  const [newChat, setNewChatThred] = useState<Type>();
  const [currentTitle, setChatTitle] = useState<string>("");
  // console.log('chat data', chatRoomList, 'type is ', typeof(dataChat))

  // const dispatch = useDispatch() 

  // console.log("Temp Response", tempResponse)
  // console.log("STORE", storing.chat)
// console.log("Selector", state.chat)git

// const checkingfuin = () => {
//   return(
//     props.chatData()
//   )
// }
useEffect(()=>{
  
  // dispatch({
  //   type: actions.ASYNC,
    // checkingfuin()
    props.chatData()  
}, [])


  // axios
  // .get("https://run.mocky.io/v3/6f45507a-0a30-4624-8af6-d13b56199fc1")
  // .then((response: any) => {
  //     dispatch({
  //         // type: actions.NEW_CHAT,
  //         type: actions.ASYNC,
  //         payload: response.data,
  //     })
  //     // console.log("WOW", response.data)

  // })
  // .catch((error:any) => {
  //     dispatch({ type: actions.FAILED })
  // });
  
// }, 
  // console.log('DATA CHAT', chatsData.chat, 'the type is', typeof(chatsData.chat))
  useEffect(()=>{
    setSearchResults(props.chatdataxx)
  }, [props.chatdataxx])
  
  useEffect(()=>{
    // setSearchResults(storing.chat)
    setUpdatedList(chatRoomList)
  }, [chatRoomList])

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
  // console.log('chat data', chatRoomList, "type of chatroom is", typeof(ChatRoomList))
  function getSidebar() {
    return (
      <>
      <SideBar
        getChatTitle={fetchTitle}
        getChat={getChat}
        chatList={updatedList}
        searhRoomResult={handleSearchResult}
        addNewChatRoom={handleAddNewChatRoom}
        
      />
{/* 
      <div>
      <ThemedButton />
      </div> */}
      </>
    );
  }
  const theme = useContext(ThemeContext);
 


  // const mapStateToProps = (state:any) => {
  //   console.log("MAP STATE TO PROPS", state.chat)
  //   return {
  //   chatdataxx: state.chat
  //   }
  // }
  
  
  // const mapDispatchToProps = (dispatch:any) => {
  //   return {
  //     // dispatching plain actions
  //     chatData: () => dispatch({ type: actions.ASYNC }),
  //   }
  // }

  return (
    <div className="container custom-width effects" style={{ background: theme.background, color: theme.foreground }}>
      <div className="row" >
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
}


const mapStateToProps = (state:any) => ({
  // console.log("MAP STATE TO PROPS", state.chat)
  
  chatdataxx: state.chat
  })



const mapDispatchToProps = (dispatch:any) => ({
    // dispatching plain actions
    chatData: () => dispatch({ type: actions.ASYNC }),
})

// connect(mapStateToProps,App)

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
