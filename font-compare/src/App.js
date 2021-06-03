import React from "react";
import { createGlobalStyle } from "styled-components";
import FontSelector from "./components/FontSelector.js";
import FontList from "./components/FontList.js";
import GlobalFonts from "./fonts.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    color: white;
    padding: 1%;
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
  }
`;

// Root component
const App = () => {
  let testStr = "Almost before we knew it, we had left the ground.";

  return (
    <Router>
      <div>
        <GlobalStyle />
        <GlobalFonts />
        <Switch>
          <Route exact path="/">
            <FontSelector exampleText={testStr} />
          </Route>
          <Route path="/list">
            <FontList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
