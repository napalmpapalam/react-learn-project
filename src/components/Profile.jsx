import React from "react";

const Profile = () => {
  return (
    <div className="profile">
      <div className="promo">
        <img
          src="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt=""
          srcSet=""
        />
      </div>
      <div className="avatar-desc">
        <img
          src="https://ru.citaty.net/media/authors/23290_the-notorious-big.jpeg"
          alt=""
          srcSet=""
        />
        <div className="desc">desc</div>
        <div className="my-posts">my-posts</div>
        <div className="new-post">new-post</div>
        <div className="post-1">post-1</div>
        <div className="post-2">post-2</div>
      </div>
    </div>
  );
};

export default Profile;
