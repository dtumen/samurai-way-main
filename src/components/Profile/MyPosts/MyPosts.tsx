import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts: React.FC = () => {
  return (
        <div>
          My posts
          <div>New Post</div>
          <textarea name="" id=""></textarea>
          <button>Add post</button>
          <div className={s.posts}>
            <Post message={'Hi, how are you?'} likesCount={10}/>
            <Post message={'What are you doing?'} likesCount={15}/>
          </div>
        </div>
  );
};

export default MyPosts;