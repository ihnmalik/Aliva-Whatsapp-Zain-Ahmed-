import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import newChat from "../images/newchat.png";
const handleChange = (e: any) => {
  console.log("VALUE PASS e :", e.target.value);
};
const ModalChat = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
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
          <Button variant="primary" onClick={handleClose}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalChat;
