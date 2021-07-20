import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { currentTimeCustom } from "../common/commonFunctions";

export interface UserDetailsProps {
  chatTitle: string;
}

const UserDetails: React.FC<UserDetailsProps> = ({ chatTitle }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="col-md-6 chat-user-details">
      <div className="userIcon">
        <span>{chatTitle.charAt(0)}</span>
      </div>
      <div className="userLastseen">
        <b className={darkMode ? "color-dark-theme" : ""}>{chatTitle}</b>
        <p style={{ color: "gray" }}>
          Last seen Friday, June 25, 2021, {currentTimeCustom()}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
