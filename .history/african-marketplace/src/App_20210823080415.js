import "./App.css";
import Home from "./component/home";
import NavigationBar from "./component/navigation-bar";
import Page404 from "./component/404";
import { BrowserRouter, Route, SWitch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <BrowserRouter>
        <switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/"> </Route>
          <Route path="/"> </Route>
          <Route >
            <
          </Route>
        </switch>
      </BrowserRouter>
    </div>
  );
}

export default App;