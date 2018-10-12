import React from 'react';
import { connect } from 'react-redux'
// components
import UserFollow from '../UserFollow/UserFollow';
// styles
import styles from './UserBio.module.scss';
// images
import profileImage from '../../assets/images/ksolo.jpg';
// icons
import { FaFacebookSquare, FaLinkedin} from 'react-icons/fa';

const UserBio = props => {
  const { user } = props;
  const { firstName, lastName, username, email, linkedin, twitter, bio } = user;
  return (
    <div className={ styles.profileHeader }>
      <img src={ profileImage } alt={ username } className={styles.profileImage} />
      <span className={ styles.userNames }>{ `${firstName} ${lastName}` }</span>
      <div className={ styles.bioDiv }>
        <div className={ styles.userBio }>
          { bio }
        </div>
        <div className={ styles.socialMedia }>
          <div>
            <a href="https://twitter.com"> <FaFacebookSquare /> </a>
          </div>
          <div>
            <a href="https://linkedin.com"> <FaLinkedin /> </a>
          </div>
        </div>
        <UserFollow />
        <div className={styles.btnAction}>
          <button type='submit'>Edit profile</button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { auth } = state;
  const { user } = auth;
  return {
    user,
  }
}

export default connect( mapStateToProps )( UserBio );
