import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Players from "./components/Players";
import SelectedTeams from "./components/SelectedTeams";
import "./styles/styles.scss";

const App = () => (
  <Provider store={store}>
    <main>
      <h1>Boni Manager</h1>
      <Players />
      <SelectedTeams />
    </main>
  </Provider>
);

export default App;
