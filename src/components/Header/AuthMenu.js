import React, { Component } from 'react';
// icons
import { FaEllipsisV, FaTimes } from 'react-icons/fa';
// styles
import styles from './header.module.scss';
import Signin from '../../containers/SignIn/SignIn'
import signupStyle from '../../containers/Signup/Signup.module.css'
import SignUp from '../../containers/Signup/Signup'

class AuthMenu extends Component {
  constructor(props) {
    super(props);
    this.triggerMobileCategory = this.triggerMobileCategory.bind(this);

    this.state = {
      showModal: false,
      showSignupModal: false
    }
  }

  toggleModal = () => {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal })
  }

  toggleSignupModal = () => {
    const { showSignupModal } = this.state;
    this.setState({ showSignupModal: !showSignupModal })
  }

  triggerMobileCategory() {
    const { triggerCategory, mobileCategory } = this.props;
    triggerCategory(mobileCategory === 'visible' ? 'hidden' : 'visible');
  }

  render() {
    const { showModal, showSignupModal } = this.state;
    let modal = null;
    let signupModal = null;
    if (showModal) {
      modal = <Signin toggleModal={this.toggleModal} toggleSignupModal={this.toggleSignupModal} />;
    } else if (showSignupModal) {
      signupModal = <SignUp toggleModal={this.toggleSignupModal} toggleSigninModal={this.toggleModal} />;
    }

    const { mobileCategory } = this.props;
    return (
      <div className={styles.links}>
        <ul>
          <li>
            <button className={styles.transparentBtn} type="button" onClick={this.toggleModal}> Login</button>
          </li>
          <li><button type='button' className={signupStyle.transparentBtn} onClick={this.toggleSignupModal}>Register</button></li>
        </ul>
        <button className={styles.mobileMenuCtrl} onClick={this.triggerMobileCategory} type="button">
          {mobileCategory === 'visible' ? <FaTimes /> : <FaEllipsisV />}
        </button>
        {modal}
        {signupModal}
      </div>
    );
  }
}

export default AuthMenu;
