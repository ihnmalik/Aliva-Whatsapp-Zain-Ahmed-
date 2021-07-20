import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export interface SearchChatListProps {
  onSearch: (arg0: string) => void;
}

const SearchChatList: React.FC<SearchChatListProps> = ({ onSearch }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleChange = (event: any) => {
    onSearch(event.target.value);
  };
  return (
    <>
      <div
        className={darkMode ? "bg-dark-theme search-section" : "search-section"}
      >
        <div className="form-group has-search">
          <span
            className={
              darkMode
                ? "color-dark-theme fa fa-search form-control-feedback"
                : "fa fa-search form-control-feedback"
            }
          ></span>
          <input
            type="text"
            className={
              darkMode ? "input-dark-theme form-control" : "form-control"
            }
            placeholder="Search"
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default SearchChatList;
