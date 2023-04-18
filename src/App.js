import { Route, Routes, NavLink } from "react-router-dom";
import Home from "./pages/Home/Home";
import saylet from "./App.module.css";
import Tweets from "./pages/Tweets/Tweets";

function App() {
  return (
    <div className={saylet.App}>
      <nav className={saylet.sidebar}>
        <ul className={saylet.list}>
          <li className={saylet.item}>
            <NavLink
              className={saylet.link}
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#fff",
                      background: "#7600dc",
                      borderRadius: "25px",
                    }
                  : { color: "#545e6f", background: "#f0f0f0" }
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className={saylet.item}>
            <NavLink
              className={saylet.link}
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#fff",
                      background: "#7600dc",
                      borderRadius: "25px",
                    }
                  : { color: "#545e6f", background: "#f0f0f0" }
              }
              to="/tweets"
            >
              Tweets
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
