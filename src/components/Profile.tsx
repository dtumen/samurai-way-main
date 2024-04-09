import React from 'react';
import styles from './Profile.module.css';

const Profile: React.FC = () => {
  return (
    <div className={styles.content}>
        <div>
          <img
            src="https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="nature"/>
        </div>
        <div>ava + desc</div>

        <div>
          My posts
          <div>New Post</div>
          <div>
            <div>Post 1</div>
            <div>Post 2</div>
            <div>Post 3</div>
          </div>
        </div>
      </div>
  );
};

export default Profile;