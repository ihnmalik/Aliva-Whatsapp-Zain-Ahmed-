import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import newChat from "../images/newchat.png";
import { Type } from "../chatRoom/appData";

export interface ModalChatProps {
  createChatRoom: Array<Type>;
  updateChatList: (arg0: Array<Type>) => void;
}

const ModalChat: React.FC<ModalChatProps> = ({
  createChatRoom,
  updateChatList,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [chatRoomNameResult, setChatRoomName] = useState("");

  const handleChange = (e: any) => {
    console.log("CHECK TYPE:", e);
    const value = e.target.value;
    setChatRoomName(value);
  };
  const roomCreated = () => {
    const copyListObj = [...createChatRoom];
    const lengthList = copyListObj.length;
    const newListObj = {
      _id: lengthList + 1,
      title: chatRoomNameResult,
      lastMsg: "",
      msgTime: "",
      chat: [
        {
          userId: 1,
          msg: "",
        },
      ],
    };
    copyListObj.unshift(newListObj);
    updateChatList(copyListObj);
    handleClose();
  };
  return (
    <React.Fragment>
      <img
        src={newChat}
        alt="newchat"
        className="newchat-icon"
        onClick={handleShow}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Chat Room</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="roomname">Room Name</label>
            <input
              value={chatRoomNameResult}
              name="roomname"
              id="roomname"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={roomCreated}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};
export default ModalChat;
