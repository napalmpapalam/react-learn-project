import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div className={style.posts}>
        <Post message="Hi, how do you do?" likesCount="0" />
        <Post message="It's my first post" likesCount="23" />
      </div>
    </div>
  );
};

export default MyPosts;
