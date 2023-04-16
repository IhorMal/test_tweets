import { useState, useEffect } from "react";

const useLocalFollow = (initialFollow) => {
  const [myFollow, setMyFollow] = useState(
    JSON.parse(localStorage.getItem("follow")) || initialFollow
  );

  useEffect(() => {
    localStorage.setItem("follow", JSON.stringify(myFollow));
  }, [myFollow]);

  const toggleFollow = (id, followers) => {
    if (myFollow.includes(id)) {
      setMyFollow(myFollow.filter((followId) => followId !== id));
      followers--;
    } else {
      setMyFollow([...myFollow, id]);
      followers++;
    }
    return followers;
  };

  return [myFollow, toggleFollow];
};

export default useLocalFollow;
