import { Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import saylet from "./App.module.css";
import Tweets from "./pages/Tweets/Tweets";

function App() {
  return (
    <div className={saylet.App}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tweets">Tweets</Link>
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
