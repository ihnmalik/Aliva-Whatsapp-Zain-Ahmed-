import * as React from "react";
import SideBar from "./sidebar";
import ConnectArea from "./contentArea";

export interface mainContainerProps {}

const mainContainer: React.FC<mainContainerProps> = () => {
  return (
    <div className="container custom-width effects">
      <div className="row">
        <SideBar />
        <ConnectArea />
      </div>
    </div>
  );
};

export default mainContainer;
