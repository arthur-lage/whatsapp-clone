import React, { useEffect, useState } from "react";

import { Container } from "./styles";

const SearchForChat: React.FC = () => {
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchButton = () => {
    if (isSearching) {
      setIsSearching(false);
      // @ts-ignore
      document.querySelector("#search-input").value = ""
      // @ts-ignore
      document.querySelector("#blur-hack").focus();
    } else {
      setIsSearching(true);
      // @ts-ignore
      document.querySelector("#search-input").focus();
    }
  };

  return (
    <Container>
      <button onClick={() => handleSearchButton()}>
        {isSearching ? (
          <i style={{ color: "#30BAF5" }} className="fas fa-long-arrow-alt-left"></i>
        ) : (
          <i className="fas fa-search"></i>
        )}
      </button>
      <input
        type="text"
        id="search-input"
        placeholder="Search or start new chat"
        onFocus={() => setIsSearching(true)}
      />
      <input id="blur-hack" type="hidden" style={{ position: "absolute", opacity: "0" }} />
    </Container>
  );
};

export default SearchForChat;
