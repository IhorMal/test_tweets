import UserItem from "../UserItem/UserItem";
import saylet from './UserList.module.css'
const UsersList = ({ users }) => {
  return (
    <ul className={saylet.items}>
      {users.map((user) => (
        <li key={user.id}>
          <UserItem user={user} />
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
