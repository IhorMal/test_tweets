import styles from "./UserItem.module.css";
import imgBG from "../../assets/images/card.png";
import ellipse from "../../assets/images/ellipse.png";
import useLocalFollow from "../../hoks";
import { putFollow } from "../../api/requests";

const UserItem = ({ user }) => {
  const [myFollow, setMyFollow] = useLocalFollow([]);
  const changeFollow = () => {
    const followers = setMyFollow(Number(user.id), user.followers);
    user.followers = followers;
    putFollow(user.id, user);
  };

  return (
    <div className={styles.item}>
      <img className={styles.imgBG} src={imgBG} alt="displays" />
      <img src={ellipse} className={styles.ellipse} alt={user.user} />
      <span className={styles.line}></span>
      <img className={styles.imgUser} src={user.avatar} alt={user.user} />
      <div className={styles.conteiner}>
        <p className={styles.tweets}>{user.tweets} Tweets</p>
        <p>
          {user.followers
            .toString()
            .split("")
            .reverse()
            .map((e, i) => ((i + 1) % 3 === 0 ? `,${e}` : e))
            .reverse()
            .join("")}{" "}
          Followers
        </p>
        <button
          onClick={(e) => changeFollow(e)}
          className={
            myFollow.includes(Number(user.id))
              ? styles.buttonFollowing
              : styles.buttonFollow
          }
        >
          {myFollow.includes(Number(user.id)) ? "Following" : "Follow"}
        </button>
      </div>
    </div>
  );
};

export default UserItem;
