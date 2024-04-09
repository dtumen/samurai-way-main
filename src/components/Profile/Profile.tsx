import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile: React.FC = () => {
  return (
    <div className={s.content}>
        <div>
          <img
            src="https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="nature"/>
        </div>
        <div>ava + desc</div>

        <MyPosts />
      </div>
  );
};

export default Profile;