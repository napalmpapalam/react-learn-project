import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.item}>
      <img
        src="https://ru.citaty.net/media/authors/23290_the-notorious-big.jpeg"
        alt=""
        srcSet=""
        className={style.avatar}
      />
      <p className={style.text}>{props.message}</p>
      <div className={style.like_dislike}>
        {props.likesCount}
        <span>Like</span>
        <span>Dislike</span>
      </div>
    </div>
  );
};

export default Post;
