import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hobbies from "./pages/Hobbies";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <header className="App__header">
          <nav className="App__navigation">
            <NavLink exact to="/">
              Home
            </NavLink>

            <NavLink to="/About">About</NavLink>

            <NavLink to="/Hobbies">Hobbies</NavLink>

            <NavLink to="/Contact">Contact</NavLink>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Hobbies">
              <Hobbies />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
