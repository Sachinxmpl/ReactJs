import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setidsLiked] = useState(false);
  let styles = { color: "red" };
  let [click, setClick] = useState(0);
  function likeClicked() {
    setClick(click + 1);
    setidsLiked(!isLiked);
  }
  return (
    <div>
      <p>
        <b>{click}</b> &nbsp;
        {isLiked.toString() == "false" ? (
              <i className="fa-regular fa-heart" onClick={likeClicked}></i>
            ) : (
              <i
                className="fa-solid fa-heart"
                style={styles}
                onClick={likeClicked}
              ></i>
        )}
      </p>
    </div>
  );
}
