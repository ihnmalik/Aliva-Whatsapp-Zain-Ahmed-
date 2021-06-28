import * as React from "react";

export interface SendMessagesInputProps {}

const SendMessagesInput: React.FC<SendMessagesInputProps> = () => {
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
