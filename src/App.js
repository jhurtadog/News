import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Notice1 from "./Components/Notice1";
import Notice2 from "./Components/Notice2";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <Router>
      <Header />
      <main className="contaoner mt-5">
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/notice1/" component={Notice1} />
          <Route exact path="/notice2" component={Notice2} />
        </Switch>
      </main>
      <p className="mt-4 p2 text-center">Todos los derechos Reservador</p>
    </Router>
  );
}

export default App;
