import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
  message: string
  likesCount: number
}

const Post: React.FC<PostPropsType> = ({ message, likesCount }) => {
  debugger
  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxCrgWSayYrKu-nMuVPHgrVTyVEUJ-f8dnRw&s" alt="avatar" />
      { message }
      <span>likes: { likesCount }</span>
    </div>
  )
};

export default Post;