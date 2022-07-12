import React from "react";
import "./search.scss";
export const Search = ({ showSidebar }) => {
  return (
    <>
      <button onClick={showSidebar} className="btn-search">
        City Search
      </button>
    </>
  );
};
