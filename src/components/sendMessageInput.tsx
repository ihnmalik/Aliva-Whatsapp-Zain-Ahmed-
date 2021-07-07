import * as React from "react";
import { Type } from "../chatRoom/appData";
// import { ChatDetails } from "../chatRoom/appData";
export interface SendMessagesInputProps {
  enterMessage: any;
  updateMsgBox: (arg0: Type) => void;
}

const SendMessagesInput: React.FC<SendMessagesInputProps> = ({
  enterMessage,
  updateMsgBox,
}) => {
  // console.log("CHECK TYPE=", enterMessage);

  const handleKeyPress = (e: any) => {
    const cloneNewMSg = { ...enterMessage };
    const chatsList = cloneNewMSg.chat;
    if (e.key === "Enter" && e.target.value !== "") {
      const chatLength = chatsList.length;
      const newMessageEntered = e.target.value;
      const newMsgObj = {
        userId: chatLength + 1,
        msg: newMessageEntered,
      };
      chatsList.push(newMsgObj);
      updateMsgBox(cloneNewMSg);
      e.target.value = "";
    }
  };
  return (
    <div className="sendMsgWrap">
      <div className="col-md-2" style={{ float: "left" }}>
        <i className="fa fa-smile-o fa-2x" aria-hidden="true"></i>
        <i className="fa fa-paperclip fa-2x" aria-hidden="true"></i>
      </div>
      <div className="col-md-9 send-message-input" style={{ float: "left" }}>
        <div className="send-message">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Type a message"
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>
      </div>
      <div className="col-md-1" style={{ float: "left" }}>
        <i className="fa fa-microphone fa-2x" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default SendMessagesInput;
