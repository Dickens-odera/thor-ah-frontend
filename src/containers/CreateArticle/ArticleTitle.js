import React from 'react';
import styles from './TextEditor.scss';

const ArticleTitle = ({ title }) => (
  <div>
    <input 
      className={styles.articleTitle} 
      title={ title }
      placeholder="Title"
    />
  </div>
);

export default ArticleTitle;
