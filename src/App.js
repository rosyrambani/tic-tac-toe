import { Route, Switch } from "react-router";
import Home from "./Home";
import Game from "./Game";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
