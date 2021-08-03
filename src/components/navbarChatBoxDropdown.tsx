import * as React from "react";

export interface NavbarChatBoxDropdownProps {}

export const Dropdown = ({
  color = "black",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
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
  )
}

const NavbarChatBoxDropdown: React.FC<NavbarChatBoxDropdownProps> = () => {
  return (
    <div className="col-md-6 nav-dd right-section navChatBoxDD">
      <div className="dropdown float-right">
        {/* <svg
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
        </svg> */}
        <Dropdown />

        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="/">
            Contact Info
          </a>
          <a className="dropdown-item" href="/">
            Select messages
          </a>
          <a className="dropdown-item" href="/">
            Mute notification
          </a>
          <a className="dropdown-item" href="/">
            Clear messages
          </a>
          <a className="dropdown-item" href="/">
            Delete Room
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarChatBoxDropdown;
