import * as React from "react";
import userImage from "../images/thumbnail.png";

export interface UserProfileProps {}

const UserProfile: React.FC<UserProfileProps> = () => {
  return (
    <a className="navbar-brand" href="/">
      <div className="profile-header-img">
        <img
          className="rounded-circle"
          style={{ width: 50 }}
          src={userImage}
          alt="user profile"
        />
      </div>
    </a>
  );
};

export default UserProfile;
