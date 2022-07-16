import React from "react";
import List from "./components/List";
import View from "./components/View";
import PokemonProvider from "./PokemonContext/Provider";
import PokemonContext from "./PokemonContext/Context";

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <PokemonProvider>
        <Router>
          <h1>
            <Link to="/pokemons/list">Pokelist</Link>
          </h1>
          <PokemonContext.Consumer>
            {({ user }) => (
              <p>
                {user && user.name} {Object.keys(user.pokedex).length} pokemons
              </p>
            )}
          </PokemonContext.Consumer>
          <Switch>
            <Route path="/pokemons/list" component={List} />
            <Route path="/pokemons/:name" component={View} />
            <Route path="/" exact>
              <Redirect to="/pokemons/list" />
            </Route>
          </Switch>
        </Router>
      </PokemonProvider>
    </div>
  );
}
