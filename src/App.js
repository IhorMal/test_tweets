import { Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import saylet from "./App.module.css";
import Tweets from "./pages/Tweets/Tweets";

function App() {
  return (
    <div className={saylet.App}>
      <nav>
        <ul className={saylet.list}>
          <li className={saylet.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={saylet.item}>
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
