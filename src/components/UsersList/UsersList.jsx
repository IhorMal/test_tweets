import UserItem from "../UserItem/UserItem";
import saylet from './UserList.module.css'
import useLocalFollow from "../../hooks/useLocalFollow";
const UsersList = ({ users }) => {
  const [myFollow, setMyFollow] = useLocalFollow();
  
  return (
    <ul className={saylet.items}>
      {users.map((user) => (
        <li key={user.id}>
          <UserItem user={user} setMyFollow={setMyFollow} myFollow={myFollow}/>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
