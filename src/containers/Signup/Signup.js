import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { GoX } from 'react-icons/go'
import signup from '../../actions/signup';
import styles from './Signup.module.css';
import SocialSignup from '../../components/SocialSignup'

const clearError = (event) => {
    document.getElementById(`${event.target.id}Err`).innerHTML = "";
}

export class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: ""
        }
        this.showErrors = true
        this.signupTitle = "Welcome to Authors Haven";
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value.trim() });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.showErrors = true;
        const { dispatch } = this.props;
        dispatch(signup(this.state))
    }

    goToSignin = () => {
        const { toggleSigninModal, toggleModal } = this.props
        toggleModal() // stop showing signup modal
        toggleSigninModal() // show login modal
    }

    render() {
        const { error, toggleModal, loading, isAuthenticated } = this.props;
        if (this.showErrors && error && error.error) {
            Object.keys(error.error).map(key => {
                document.getElementsByName(`${key}Err`)[0].innerHTML = error.error[key]
                return 0
            })
            this.showErrors = false;
        } else if (isAuthenticated) {
            toggleModal(); // dissable modal
        }

        let submitBtn = <button type="submit" id={styles.submitBtn} >Signup </button>
        if (loading) {
            submitBtn = <button type="submit" id={styles.submitBtn} disabled>Signup </button>
        }

        return (
            <div id={styles.container}>
                <button className={styles.modalClose} type="button" onClick={toggleModal}>
                    <span className={styles.xIcon}>
                        <GoX />
                    </span>
                </button>
                    <div className={styles.regContainer}>
                        <p className={styles.center} >{this.signupTitle}</p>

                        <SocialSignup />
                        <form onSubmit={this.handleSubmit}>
                            <div className={styles.regForm}>

                                <div className={styles.formItemGroup}>
                                    <div>
                                        <div className={styles.errMsg} name="firstNameErr" id={`${styles.firstName}Err`} />
                                        <input type="text" name="firstName" className={styles.formInput} id={styles.firstName}
                                            placeholder="firstname" onChange={this.handleChange}
                                            onFocus={clearError} required />
                                    </div>
                                    <div>
                                        <div className={styles.errMsg} name="lastNameErr" id={`${styles.lastName}Err`} />
                                        <input type="text" name="lastName" className={styles.formInput} id={styles.lastName}
                                            placeholder="lastname" onChange={this.handleChange}
                                            onFocus={clearError} required />
                                    </div>
                                </div>

                                <div className={styles.formItemGroup}>
                                    <div>
                                        <div className={styles.errMsg} name="usernameErr" id={`${styles.username}Err`} />
                                        <input type="text" name="username" className={styles.formInput} id={styles.username}
                                            placeholder="username" onChange={this.handleChange}
                                            onFocus={clearError} required />
                                    </div>
                                    <div>
                                        <div className={styles.errMsg} name="emailErr" id={`${styles.email}Err`} />
                                        <input type="email" name="email" className={styles.formInput} id={styles.email}
                                            placeholder="email" onChange={this.handleChange}
                                            onFocus={clearError} required />
                                    </div>
                                </div>

                                <div className={styles.formItemGroup}>
                                    <div className={styles.errMsg} name="passwordErr" id={`${styles.password}Err`} />
                                    <input type="password" name="password" className={styles.formInput} id={styles.password}
                                        placeholder="password" onChange={this.handleChange}
                                        onFocus={clearError} required />
                                </div>
                                <div className={styles.formItemGroup}>
                                    {submitBtn}
                                </div>
                            </div>
                        </form>
                        <p className={styles.center}>Already Have an Account? <button type='button' className={styles.transparentBtn} onClick={this.goToSignin}><Link to="/auth/login"> Login </Link> </button></p>

                    </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    const { auth } = state;
    return {
        isAuthenticated: auth.isAuthenticated,
        loading: auth.signup.loading,
        error: auth.signup.error,
    }
}

export default connect(mapStateToProps)(Signup)
