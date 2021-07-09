import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <React.Fragment>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
