import * as React from "react";
import { Component } from "react";
import connectedImage from "../images/whatsapp-connect.jpg";

export interface ConnectAreaProps {}

const ConnectArea: React.FC<ConnectAreaProps> = () => {
  return (
    <div className="col-md-8 right-connect-section">
      <img src={connectedImage} alt="" />
      <p className="message-connected">Keep your phone connected</p>
      <p className="message-detail">
        WhatsApp connects to your phone to sync messages. To reduce data usage,
        connect to yor phone to Wi-Fi.
      </p>
      <hr className="divider-connect"></hr>
      <div className="chat-landing-screen__footer">
        <svg
          className="MuiSvgIcon-root"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"></path>
        </svg>
        <p style={{ marginBottom: 0, color: "#b5b6b7" }}>
          WhatsApp is available for Windows.
        </p>
        <a target="_blank" href="https://www.whatsapp.com/download">
          Get it here.
        </a>
      </div>
    </div>
  );
};

export default ConnectArea;
