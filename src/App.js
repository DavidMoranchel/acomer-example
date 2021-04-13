import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Screens
import Home from "./screens/Home";

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/perro">Perro</Link>
        </li>
      </ul>

      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/perro" exact>
            <h1>Perro</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
