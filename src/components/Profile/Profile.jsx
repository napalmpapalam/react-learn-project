import React from "react";
import style from "./Profile.module.css";
import MyPosts from "../MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div className={style.promo}>
        <img
          src="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt=""
          srcSet=""
        />
      </div>
      <div className={style.avatar}>
        <img
          src="https://ru.citaty.net/media/authors/23290_the-notorious-big.jpeg"
          alt=""
          srcSet=""
        />
        ava desc
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
