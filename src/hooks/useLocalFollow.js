import { useState, useEffect } from "react";

const useLocalFollow = () => {
  const [myFollow, setMyFollow] = useState(
    JSON.parse(localStorage.getItem("follow")) || []
  );

  // useEffect(() => {
  //   localStorage.setItem("follow", JSON.stringify(myFollow));
  // }, [myFollow]);

  const toggleFollow = (id, followers) => {
    if (myFollow.includes(id)) {
      setMyFollow(myFollow.filter((followId) => followId !== id));
      followers--;
    } else {
      const updatedIds = [...myFollow, id];
      setMyFollow(updatedIds);
      localStorage.setItem("follow", JSON.stringify(updatedIds));
      followers++;
    }
    return followers;
  };

  return [myFollow, toggleFollow];
};

export default useLocalFollow;
