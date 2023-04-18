import { useEffect, useState } from "react";
import "./App.css";
import { usersGet } from "./api/requests";
import UsersItems from "./components/UsersList/UsersList";
const limit = 8;

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [receivedCount, setReceivedCount] = useState(0);

  const addRequest = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    usersGet(limit, page).then((response) => {
      setReceivedCount(response.length);
      setUsers([...users, ...response]);
    });
  }, [page]);

  return (
    <div className="App">
      <UsersItems className="App-Items" users={users} />
      {users.length > 0 && receivedCount >= limit && (
        <button className="App-button" onClick={() => addRequest()}>
          Load More
        </button>
      )}
    </div>
  );
}

export default App;