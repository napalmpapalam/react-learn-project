import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
  return (
    <div className={style.post}>
      <img
        src="https://ru.citaty.net/media/authors/23290_the-notorious-big.jpeg"
        alt=""
        srcSet=""
        className={style.avatar}
      />
      <p className={style.text}>{props.message}</p>
      <div className={style.votes}>
        {props.likesCount}
        <span className={style.votes__text}>Like</span>
        <span className={style.votes__text}>Dislike</span>
      </div>
    </div>
  );
};

export default Post;
