import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => (
    <div className={styles.container}>
        <div className={styles.card}>
            <p>404 Error</p>
            <p>OOPS! ... just searched our universe and {"can't"} find the page.</p>
            <p>something went wrong or the page {"does't"} exist anymore</p>
            <Link to='/' > Lets take you Home </Link>
        </div>
    </div>
)

export default NotFound;
