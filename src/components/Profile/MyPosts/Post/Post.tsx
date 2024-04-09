import React from 'react';
import s from './Post.module.css';

const Post: React.FC = () => {
  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxCrgWSayYrKu-nMuVPHgrVTyVEUJ-f8dnRw&s" alt="avatar" />
      Post 1
      <span>like</span>
    </div>
  )
};

export default Post;