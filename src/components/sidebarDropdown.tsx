import * as React from "react";
import { Component } from "react";

export interface SidebarDropdownMenuProps {}

const SidebarDropdownMenu: React.FC<SidebarDropdownMenuProps> = () => {
  return (
    <div className="dropdown float-right">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-three-dots-vertical"
        viewBox="0 0 16 16"
        id="dropdownMenuButton"
        data-toggle="dropdown"
      >
        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
      </svg>

      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">
          Profile
        </a>
        <a className="dropdown-item" href="#">
          Archived
        </a>
        <a className="dropdown-item" href="#">
          Starred
        </a>
        <a className="dropdown-item" href="#">
          Settings
        </a>
        <a className="dropdown-item" href="#">
          Logout
        </a>
      </div>
    </div>
  );
};

export default SidebarDropdownMenu;
