import * as React from "react";
import { Component } from "react";

export interface SearchChatListProps {}

const SearchChatList: React.FC<SearchChatListProps> = () => {
  return (
    <div className="search-section">
      <div className="form-group has-search">
        <span className="fa fa-search form-control-feedback"></span>
        <input type="text" className="form-control" placeholder="Search" />
      </div>
    </div>
  );
};

export default SearchChatList;
