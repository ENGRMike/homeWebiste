import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Home } from "../Home/Home";
import { Drinks } from "../Drinks/Drinks";

function App() {
  return (
    <Router>
      <div>
        <h2>Testing the router</h2>
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/Drinks"} className="nav-link">
                Drinks
              </Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Drinks" component={Drinks} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
