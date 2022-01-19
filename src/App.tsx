import React from "react";

import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";

import { SearchProvider } from "./contexts/SearchContext";
import { ChatProvider } from "./contexts/ChatContext";

function App() {
  return (
    <div className="App">
      <ChatProvider>
        <SearchProvider>
          <GlobalStyles />
          <Layout />
        </SearchProvider>
      </ChatProvider>
    </div>
  );
}

export default App;
