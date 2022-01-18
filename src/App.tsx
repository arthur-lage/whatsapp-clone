import React from "react";

import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";

import { SearchProvider } from "./contexts/SearchContext";

function App() {
  return (
    <div className="App">
      <SearchProvider>
        <GlobalStyles />
        <Layout />
      </SearchProvider>
    </div>
  );
}

export default App;
