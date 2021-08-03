import { useContext } from "react";
import { ThemeContext } from "./themeContext";

export interface SearchChatListProps {
  onSearch: (arg0: string) => void;
}

const SearchChatList: React.FC<SearchChatListProps> = ({ onSearch }) => {
  const handleChange = (event: any) => {
    onSearch(event.target.value);
  };
  const theme = useContext(ThemeContext);

  return (
    <>
      <div className="search-section">
        <div className="form-group has-search" style={{ background: theme.background, color: theme.foreground }}>
          <span className="fa fa-search form-control-feedback"></span>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default SearchChatList;
