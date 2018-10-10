/* eslint-disable */
import React, { Component, Fragment } from "react";
import ArticleTitle from "./ArticleTitle";
import TextEditor from "./TextEditor";
import styles from './CreateArticle.module.scss';

class CreateArticle extends Component {
  state = {
    title: "Title",
    imageUrl: "",
    articleBody: "Share your thoughts..."
  };

  titleChangeHandler = (title) => {
    this.setState({
      title
    })
  }

  handleSubmit = () => {
    
  }

  render() {
    const { title, imageUrl, articleBody } = this.state;
    return (
      <Fragment>
        <div className="col-md-8 mx-auto my-5">
          <div className={styles.createArticle}>
            <div className={styles.articleTitle}>
              <ArticleTitle
                value={title}
                onChange={this.titleChangeHandler}
                onFocusIn={this.placeholderFocusInHandler}
                onEditorChange={this.placeholderFocusOutHandler}
                onPaste={this.pasteHandler}
              />
            </div>
            <div className="textEditor">
              <TextEditor
                value={articleBody}
                onEditorChange={this.editorChangeHandler}
                onFocusIn={this.placeholderFocusInHandler}
                onFocusOut={this.placeholderFocusOutHandler}
              />
            </div>
          </div>
          <button className={styles.publishButton} onClick={this.handleSubmit}>Publish</button>
        </div>
      </Fragment>
    );
  }
}

export default CreateArticle;
