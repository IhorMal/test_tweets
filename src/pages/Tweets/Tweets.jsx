import { useEffect, useState } from "react";
import { usersGet } from "../../api/requests";
import UsersItems from "../../components/UsersList/UsersList"
import saylet from ".//Tweets.module.css"
import { Link } from "react-router-dom";
 const limit = 8;

function Tweets() {
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
        <>
        <Link className={saylet.link}  to="/">Back</Link>
        <UsersItems users={users} />
        {users.length > 0 && receivedCount >= limit && (
          <button className={saylet.button} onClick={() => addRequest()}>
            Load More
          </button >
        )} 
        </>
    )
}

export default Tweets;
