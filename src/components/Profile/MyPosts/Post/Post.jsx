import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img src='https://media.npr.org/assets/img/2021/04/27/prancer_wide-db59609b5bd96c9e56e4dfe32d198461197880c2.jpg?s=1400' />
      post 1
          <div>
        <span>like</span>
      </div>
    </div>
  )

}

export default Post;